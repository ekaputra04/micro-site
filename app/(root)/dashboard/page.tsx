import { getPostsByUserId } from "@/utils/postUtils";
import { createClient } from "@/utils/supabase/server";
import DashboardView from "./DashboardView";
import { PostType } from "@/types/Types";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const posts: PostType[] = await getPostsByUserId(user?.id as string);

  return (
    <>
      <DashboardView posts={posts} />
    </>
  );
}
