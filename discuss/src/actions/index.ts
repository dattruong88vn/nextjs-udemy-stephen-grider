"use server";

import * as auth from "@/auth";
import { createTopic } from "./create-topic";
import { createComment } from "./create-comment";
import { createPost } from "./create-post";

export async function signIn() {
  return auth.signIn("github");
}

export async function signOut() {
  return auth.signOut();
}

export { createTopic, createComment, createPost };
