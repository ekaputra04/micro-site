import { createClient } from "@/utils/supabase/server";
import CreateView from "./CreateView";

export default async function CreatePage() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <>
      <div className="">
        <CreateView userId={user?.id as string} />
      </div>
    </>
  );
}
