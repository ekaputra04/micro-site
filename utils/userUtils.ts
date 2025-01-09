"use server";

import { PrismaClient } from "@prisma/client";
import { unstable_cache } from "next/cache";

const prisma = new PrismaClient();

export const getUserBySlug = unstable_cache(
  async (slug: string) => {
    return await prisma.post.findFirst({
      where: { slug: slug },
    });
  },
  ["users"],
  { revalidate: 3600, tags: ["users"] }
);
