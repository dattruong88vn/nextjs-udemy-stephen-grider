"use server";

import * as auth from "@/auth";

export async function signIn() {
  return auth.signIn("github");
}

export async function signOut() {
  return auth.signOut();
}

// export { createComment } from "./create-comment";
// export { createPost } from "./create-post";
// export { createTopic } from "./create-topic";
