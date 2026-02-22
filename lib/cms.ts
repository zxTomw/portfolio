import { cache } from "react";
import { getPayloadClient } from "@/lib/payload";
import { defaultProjects, defaultSiteLinks } from "@/lib/default-content";

export type SiteLinks = typeof defaultSiteLinks;

export type ProjectCard = {
  id: string;
  title: string;
  description: string;
  github?: string | null;
  techStack: string[];
  image?: string | null;
};

type MediaDoc = {
  url?: string | null;
};

const getPayloadOrNull = async () => {
  try {
    return await getPayloadClient();
  } catch {
    return null;
  }
};

export const getSiteSettings = cache(async (): Promise<SiteLinks> => {
  const payload = await getPayloadOrNull();
  if (!payload) {
    return defaultSiteLinks;
  }

  try {
    const global = await payload.findGlobal({
      slug: "site-settings",
      draft: false,
    });

    return {
      email: global.email || defaultSiteLinks.email,
      linkedin: global.linkedin || defaultSiteLinks.linkedin,
      github: global.github || defaultSiteLinks.github,
      resumeUrl: global.resumeUrl || defaultSiteLinks.resumeUrl,
    };
  } catch {
    return defaultSiteLinks;
  }
});

export const getProjects = cache(async (): Promise<ProjectCard[]> => {
  const payload = await getPayloadOrNull();
  if (!payload) {
    return defaultProjects.map((project) => ({
      id: project.slug,
      title: project.title,
      description: project.description,
      github: project.github ?? null,
      techStack: project.techStack,
      image: project.image ?? null,
    }));
  }

  const { docs } = await payload
    .find({
      collection: "projects",
      draft: false,
      depth: 1,
      limit: 50,
      sort: "sortOrder",
    })
    .catch(() => ({ docs: [] }));

  if (!docs.length) {
    return defaultProjects.map((project) => ({
      id: project.slug,
      title: project.title,
      description: project.description,
      github: project.github ?? null,
      techStack: project.techStack,
      image: project.image ?? null,
    }));
  }

  return docs.map((doc) => {
    const techStack = (doc.techStack || [])
      .map((item: { name?: string } | null) => item?.name)
      .filter((item: string | undefined): item is string => Boolean(item));

    const image =
      doc.image && typeof doc.image === "object"
        ? ((doc.image as MediaDoc).url ?? null)
        : null;

    return {
      id: String(doc.id),
      title: doc.title,
      description: doc.description,
      github: doc.github,
      techStack,
      image,
    };
  });
});
