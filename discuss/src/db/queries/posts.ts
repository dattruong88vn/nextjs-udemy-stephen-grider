import type { Post } from "@prisma/client";
import { db } from "@/db";

// // 1. declare a type
// export type PostWithData = Post & {
//   topic: { slug: string };
//   user: { name: string | null };
//   _count: { comments: number };
// };

// // 2. use type of function return
export type PostListWithData = Awaited<
  ReturnType<typeof fetchPostsByTopicSlug>
>;
export type PostWithData = PostListWithData[number];

export function fetchPostsByTopicSlug(slug: string) {
  return db.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
}
