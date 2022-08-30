import { Directus } from "@directus/sdk";

console.log(process.env.REACT_APP_DIRECTUS_URL);

export const directus = new Directus(process.env.REACT_APP_DIRECTUS_URL);