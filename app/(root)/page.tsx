import { Button } from "@/components/ui/button";
import { getPostsByUserId } from "@/utils/postUtils";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const posts = await getPostsByUserId(user?.id as string);

  return (
    <>
      <Link href={"/dashboard"}>
        <Button>Dashboard</Button>
      </Link>
      <div className="">
        <p>User: {JSON.stringify(user, null, 2)}</p>
      </div>
      <h1>Home Page</h1>
      {posts.map((post, index) => (
        <div className="" key={index}>
          <p>{post.title}</p>
          <p>{post.content?.toString()}</p>
          {/* {JSON.parse(post.content as string)} */}
        </div>
      ))}
    </>
  );
}
