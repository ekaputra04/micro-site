"use server";

import { AccordionItem } from "@/types/AccordionItem";
import { Post, PrismaClient } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";

const prisma = new PrismaClient();

export const createPost = async (
  userId: number,
  postData: {
    title: string;
    content: AccordionItem[];
  }
): Promise<Post> => {
  const contentData = JSON.stringify(postData.content);
  try {
    const post = await prisma.post.create({
      data: {
        ...postData,
        content: contentData,
        authorId: userId,
      },
    });

    revalidateTag("posts");

    return post;
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("Unable to create post");
  }
};

export const getPostsByUser = unstable_cache(
  async (userId: number) => {
    return await prisma.post.findMany({
      where: { authorId: userId },
      orderBy: { createdAt: "desc" },
    });
  },
  ["posts"],
  { revalidate: 3600, tags: ["posts"] }
);
