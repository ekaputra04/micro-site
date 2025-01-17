import { getPostBySlug } from "@/utils/postUtils";
import { notFound } from "next/navigation";
import PublicViewPage from "./PublicPage";
import { PostType } from "@/types/Types";

export default async function PublicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);

  if (!post || post.published == false) {
    return notFound();
  }

  return (
    <>
      <PublicViewPage post={post as PostType} type="public" />
    </>
  );
}
