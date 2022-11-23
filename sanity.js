import { createClient } from "next-sanity";
// import imageUrlBuilder from "@sanity/image-url";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: process.env.SANITY_API_TOKEN,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-10-21", // Learn more: https://www.sanity.io/docs/api-versioning
  useCdn: process.env.NODE_ENV === "production",
};

// set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// export const urlFor = (source) => {
//   return builder.image(source);
// };
