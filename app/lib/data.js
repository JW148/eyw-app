import { client } from "../../sanity/lib/client";
import {
  POSTS_QUERY,
  POST_QUERY,
  SUPPORT_QUERY,
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
