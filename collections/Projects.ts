import type { Access, CollectionConfig } from "payload";
import {
  revalidateHomeAfterChange,
  revalidateHomeAfterDelete,
} from "../hooks/revalidateHome.ts";

const readPublishedOrAuthenticated: Access = ({ req }) => {
  if (req.user) {
    return true;
  }

  return {
    _status: {
      equals: "published",
    },
  };
};

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "_status", "updatedAt"],
  },
  access: {
    read: readPublishedOrAuthenticated,
  },
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [revalidateHomeAfterChange],
    afterDelete: [revalidateHomeAfterDelete],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "github",
      type: "text",
    },
    {
      name: "gitlab",
      type: "text",
    },
    {
      name: "image",
      type: "relationship",
      relationTo: "media",
    },
    {
      name: "techStack",
      type: "array",
      required: true,
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "sortOrder",
      type: "number",
      defaultValue: 0,
    },
  ],
};
