import configPromise from "../payload.config.ts";
import { generateImportMap } from "payload";

const config = await configPromise;
await generateImportMap(config);

// eslint-disable-next-line no-console
console.log("Generated payload import map.");
