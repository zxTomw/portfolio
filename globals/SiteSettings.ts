import type { GlobalConfig } from "payload";
import { revalidateHomeAfterGlobalChange } from "../hooks/revalidateHome.ts";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [revalidateHomeAfterGlobalChange],
  },
  fields: [
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "linkedin",
      type: "text",
      required: true,
    },
    {
      name: "github",
      type: "text",
      required: true,
    },
    {
      name: "resumeUrl",
      type: "text",
      required: true,
      defaultValue: "/resume.pdf",
    },
  ],
};
