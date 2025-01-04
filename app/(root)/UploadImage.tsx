"use client";

import { useState } from "react";
import Hero from "@/components/hero";
import { uploadFile } from "@/utils/imageUtils";

export default function UploadImage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedFile) {
      setUploadStatus("Please select a file first.");
      return;
    }

    setUploadStatus("Uploading...");
    const result = await uploadFile(selectedFile);
    if (result.success) {
      setUploadStatus("File uploaded successfully!");
    } else {
      setUploadStatus(`Upload failed: ${result.message}`);
    }
  };

  return (
    <>
      <main className="flex flex-col flex-1 gap-6 px-4">
        <section className="mt-8">
          <h3 className="font-semibold text-lg">Upload an Image</h3>
          <form onSubmit={handleUpload} className="flex flex-col gap-4 mt-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="p-2 border rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
            >
              Upload
            </button>
          </form>
          {uploadStatus && <p className="mt-2 text-sm">{uploadStatus}</p>}
        </section>
      </main>
    </>
  );
}
