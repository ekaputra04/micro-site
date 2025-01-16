import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const projectUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const projectAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(projectUrl as string, projectAnonKey as string);

export async function uploadFile(file: File) {
  const fileExtension = file.name.split(".").pop();
  const uniqueFileName = `${uuidv4()}.${fileExtension}`;

  const { data, error } = await supabase.storage
    .from("images")
    .upload(uniqueFileName, file, {
      upsert: true,
    });

  if (error) {
    console.error("Upload error:", error.message);
    return { success: false, message: error.message };
  }

  console.log("Upload success:", data);
  return { success: true, data };
}

export async function deleteFile(fileUrl: string) {
  try {
    // Ekstrak bucket dan path dari URL
    const urlPattern = new RegExp(
      `${projectUrl}/storage/v1/object/public/(.+?)/(.+)`
    );
    const match = fileUrl.match(urlPattern);

    if (!match) {
      return { success: false, message: "Invalid file URL format" };
    }

    const bucket = match[1]; // Nama bucket
    const filePath = match[2]; // Path file

    // Cek apakah file ada
    const { data: existsData, error: existsError } = await supabase.storage
      .from(bucket)
      .list("", { search: filePath });

    if (
      existsError ||
      !existsData ||
      !existsData.some((file) => file.name === filePath)
    ) {
      return { success: false, message: "File does not exist" };
    }

    // Hapus file
    const { data: deleteData, error: deleteError } = await supabase.storage
      .from(bucket)
      .remove([filePath]);

    if (deleteError) {
      return {
        success: false,
        message: "Failed to delete file",
        error: deleteError,
      };
    }

    return {
      success: true,
      message: "File deleted successfully",
      data: deleteData,
    };
  } catch (error) {
    return { success: false, message: "An error occurred", error };
  }
}
