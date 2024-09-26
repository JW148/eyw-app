import { client } from "../../sanity/lib/client";
import {
  POSTS_QUERY,
  POST_QUERY,
  SUPPORT_QUERY,
} from "../../sanity/lib/queries";

export async function getPosts() {
  const options = { next: { revalidate: 30 } };
  try {
    const posts = await client.fetch(POSTS_QUERY, {}, options);
    return posts;
  } catch (error) {
    console.log(error);
  }
}

export async function getPost(slug) {
  const options = { next: { revalidate: 30 } };
  try {
    const post = await client.fetch(POST_QUERY, { slug: slug }, options);
    return post;
  } catch (error) {
    console.log(error);
  }
}

export async function getSupportContent() {
  const options = { next: { revalidate: 30 } };
  try {
    const content = await client.fetch(SUPPORT_QUERY, {}, options);
    return content;
  } catch (error) {
    console.log(error);
  }
}
