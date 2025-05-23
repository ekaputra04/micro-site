import { getPostBySlug } from "@/utils/postUtils";
import CreateOrEditView from "../../_components/CreateOrEditView";
import { PostType } from "@/types/Types";

export default async function EditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Post not found</p>
      </div>
    );
  }

  return (
    <>
      <div className="">
        <CreateOrEditView type="edit" post={post as PostType} />
      </div>
    </>
  );
}
