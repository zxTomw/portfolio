import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
} from "payload";

const HOME_PATH = "/";

const safeRevalidateHome = async () => {
  try {
    const { revalidatePath } = await import("next/cache");
    revalidatePath(HOME_PATH);
  } catch {
    // Revalidation is only available in Next.js request contexts.
  }
};

export const revalidateHomeAfterChange: CollectionAfterChangeHook = async ({
  doc,
  previousDoc,
  req: { context },
}) => {
  if (context.disableRevalidate) {
    return doc;
  }

  if (doc._status === "published" || previousDoc?._status === "published") {
    await safeRevalidateHome();
  }

  return doc;
};

export const revalidateHomeAfterDelete: CollectionAfterDeleteHook = async ({
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    await safeRevalidateHome();
  }
};

export const revalidateHomeAfterGlobalChange: GlobalAfterChangeHook = async ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    await safeRevalidateHome();
  }

  return doc;
};
