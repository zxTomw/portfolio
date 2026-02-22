import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import config from "../payload.config.ts";
import { getPayload } from "payload";
import { projectSeedData, siteSeedData } from "./seed-data";

type MediaDoc = {
  id: number;
};

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const projectRoot = path.resolve(dirname, "..");

const resolvePublicAsset = (assetPath: string) => {
  const sanitized = assetPath.startsWith("/") ? assetPath.slice(1) : assetPath;
  return path.resolve(projectRoot, "public", sanitized);
};

async function getOrCreateMedia(payload: Awaited<ReturnType<typeof getPayload>>, imagePath: string) {
  const localFilePath = resolvePublicAsset(imagePath);
  if (!fs.existsSync(localFilePath)) {
    return null;
  }

  const filenameOnDisk = path.basename(localFilePath);
  const existing = await payload.find({
    collection: "media",
    where: {
      filename: {
        equals: filenameOnDisk,
      },
    },
    limit: 1,
    overrideAccess: true,
  });

  if (existing.docs[0]) {
    return existing.docs[0] as MediaDoc;
  }

  const created = await payload.create({
    collection: "media",
    data: {
      alt: filenameOnDisk,
    },
    filePath: localFilePath,
    overrideAccess: true,
  });

  return created as MediaDoc;
}

async function seed() {
  const payload = await getPayload({ config });

  await payload.updateGlobal({
    slug: "site-settings",
    data: {
      ...siteSeedData,
      _status: "published",
    },
    overrideAccess: true,
  });

  for (let index = 0; index < projectSeedData.length; index += 1) {
    const project = projectSeedData[index];
    const existing = await payload.find({
      collection: "projects",
      where: {
        slug: {
          equals: project.slug,
        },
      },
      limit: 1,
      overrideAccess: true,
    });

    const media = project.image ? await getOrCreateMedia(payload, project.image) : null;

    const projectData = {
      title: project.title,
      slug: project.slug,
      description: project.description,
      github: project.github,
      techStack: project.techStack.map((name) => ({ name })),
      sortOrder: index,
      image: media?.id ?? null,
      _status: "published" as const,
    };

    if (existing.docs[0]) {
      await payload.update({
        collection: "projects",
        id: existing.docs[0].id,
        data: projectData,
        overrideAccess: true,
      });
      continue;
    }

    await payload.create({
      collection: "projects",
      data: projectData,
      overrideAccess: true,
    });
  }

  // eslint-disable-next-line no-console
  console.log("Payload seed complete.");
}

seed().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
});
