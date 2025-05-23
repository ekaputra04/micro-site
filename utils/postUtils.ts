"use server";

import { AccordionItem } from "@/types/AccordionItem";
import { Post, PrismaClient } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";
import { deleteFile } from "./imageUtils";

const prisma = new PrismaClient();

export const createPost = async (
  userId: string,
  slug: string,
  title: string,
  backgroundColor: string,
  backgroundImage: string,
  content: AccordionItem[],
  iconImage?: string,
  description?: string
): Promise<Post> => {
  const contentData = JSON.stringify(content);
  try {
    const post = await prisma.post.create({
      data: {
        title,
        authorId: userId,
        slug,
        backgroundColor,
        backgroundImage,
        iconImage,
        description,
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

export const editPost = async (
  id: number,
  userId: string,
  title: string,
  backgroundColor: string,
  backgroundImage: string,
  content: AccordionItem[],
  iconImage?: string,
  description?: string
): Promise<Post> => {
  try {
    const selectedPost = await prisma.post.findFirst({
      where: {
        id,
      },
    });

    if (!selectedPost) {
      throw new Error("Post not found");
    }

    const contentData = JSON.stringify(content);
    const post = await prisma.post.update({
      data: {
        title,
        authorId: userId,
        backgroundColor,
        backgroundImage,
        iconImage,
        description,
        content: contentData,
        updatedAt: new Date(),
      },
      where: {
        id,
      },
    });

    revalidateTag("posts");

    return post;
  } catch (error) {
    console.error("Error updating post:", error);
    throw new Error("Unable to update post");
  }
};

export const updateStarredPost = async (id: number) => {
  try {
    const selectedPost = await prisma.post.findFirst({
      where: {
        id: id,
      },
    });

    if (!selectedPost) {
      throw new Error("Post not found");
    }

    const post = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        isStarred: !selectedPost.isStarred,
        updatedAt: new Date(),
      },
    });

    revalidateTag("posts");

    return post;
  } catch (error) {
    console.error("Error updating post:", error);
    throw new Error("Unable to update post");
  }
};

export const updatePublishedPost = async (id: number) => {
  try {
    const selectedPost = await prisma.post.findFirst({
      where: {
        id: id,
      },
    });

    if (!selectedPost) {
      throw new Error("Post not found");
    }

    const post = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        published: !selectedPost.published,
        updatedAt: new Date(),
      },
    });

    revalidateTag("posts");

    return post;
  } catch (error) {
    console.error("Error updating post:", error);
    throw new Error("Unable to update post");
  }
};

export const deletePost = async (id: number) => {
  try {
    const selectedPost = await prisma.post.findFirst({
      where: {
        id: id,
      },
    });

    if (!selectedPost) {
      throw new Error("Post not found");
    }

    if (selectedPost.backgroundImage.startsWith("https:")) {
      const data = await deleteFile(selectedPost.backgroundImage);
    }

    const post = prisma.post.delete({
      where: {
        id: id,
      },
    });

    revalidateTag("posts");

    return post;
  } catch (error) {
    console.error("Error deleting post:", error);
    throw new Error("Unable to delete post");
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

export const getPostBySlug = unstable_cache(
  async (slug: string) => {
    return await prisma.post.findFirst({
      where: { slug: slug },
    });
  },
  ["posts"],
  { revalidate: 3600, tags: ["posts"] }
);
