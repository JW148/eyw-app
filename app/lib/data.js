import { client } from "../../sanity/lib/client";
import {
  POSTS_QUERY,
  POST_QUERY,
  SUPPORT_QUERY,
  RESOURCES_QUERY,
  RESOURCE_QUERY,
} from "../../sanity/lib/queries";

const options = { next: { revalidate: 60 } };

export async function getPosts() {
  try {
    const posts = await client.fetch(POSTS_QUERY, {}, options);
    return posts;
  } catch (error) {
    console.log(error);
  }
}

export async function getPost(slug) {
  try {
    const post = await client.fetch(POST_QUERY, { slug: slug }, options);
    return post;
  } catch (error) {
    console.log(error);
  }
}

export async function getSupportContent() {
  try {
    const content = await client.fetch(SUPPORT_QUERY, {}, options);
    return content;
  } catch (error) {
    console.log(error);
  }
}

export async function getResources() {
  try {
    const resources = await client.fetch(RESOURCES_QUERY, {}, options);
    return resources;
  } catch (err) {
    console.error(err);
  }
}

export async function getResource(slug) {
  try {
    const resource = await client.fetch(
      RESOURCE_QUERY,
      { slug: slug },
      options
    );
    return resource;
  } catch (err) {
    console.error(err);
  }
}
