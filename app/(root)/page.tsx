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
      <h1>Home Page</h1>
    </>
  );
}
