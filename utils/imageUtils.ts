import { createClient } from "@supabase/supabase-js";

const projectUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const projectAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(projectUrl as string, projectAnonKey as string);

export async function uploadFile(file: File) {
  const filePath = `${file.name}`;
  const { data, error } = await supabase.storage
    .from("images")
    .upload(filePath, file, {
      upsert: true,
    });

  if (error) {
    console.error("Upload error:", error.message);
    return { success: false, message: error.message };
  }

  console.log("Upload success:", data);
  return { success: true, data };
}
