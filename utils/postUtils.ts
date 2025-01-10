"use server";

import { AccordionItem } from "@/types/AccordionItem";
import { Post, PrismaClient } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";

const prisma = new PrismaClient();

export const createPost = async (
  userId: string,
  slug: string,
  title: string,
  content: AccordionItem[]
): Promise<Post> => {
  const contentData = JSON.stringify(content);
  try {
    const post = await prisma.post.create({
      data: {
        title: title,
        authorId: userId,
        slug: slug,
        content: contentData,
      },
    });

    revalidateTag("posts");

    return post;
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("Unable to create post");
  }
};

export const getPostsByUserId = unstable_cache(
  async (userId: string) => {
    return await prisma.post.findMany({
      where: { authorId: userId },
      orderBy: { createdAt: "desc" },
    });
  },
  ["posts"],
  { revalidate: 3600, tags: ["posts"] }
);
