import { createClient } from "@/utils/supabase/server";
import CreateOrEditView from "../_components/CreateOrEditView";

export default async function CreatePage() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <>
      <div className="">
        <CreateOrEditView userId={user?.id as string} type="create" />
      </div>
    </>
  );
}
