import configPromise from "../payload.config.ts";
import { generateTypes } from "payload/node";

const config = await configPromise;
await generateTypes(config);

// eslint-disable-next-line no-console
console.log("Generated payload types.");
