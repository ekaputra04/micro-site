import { getPostsBySlug } from "@/utils/postUtils";

export default async function EditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getPostsBySlug(slug);

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Post not found</p>
      </div>
    );
  }

  return (
    <>
      {JSON.stringify(post, null, 2)}
      <div className="">Edit page</div>
    </>
  );
}
