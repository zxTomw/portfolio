import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tom Wang's Portfolio",
    short_name: "Tom",
    description: "projects, experiences, and hobbies",
    start_url: "/",
    display: "standalone",
    screenshots: [
      {
        src: "/screenshot-wide.png",
        sizes: "3008x1506",
        type: "wide",
      },
      {
        src: "/screenshot-narrow.png",
        sizes: "624x1346",
      },
    ],
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
