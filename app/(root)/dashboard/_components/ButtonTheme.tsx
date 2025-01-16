"use client";

import useFileStore from "@/hooks/useFileStore";
import useMainInformationStore from "@/hooks/useMainInformationStore";
import { ThemeDataType } from "@/types/ThemeData";

export default function ButtonTheme({ theme }: { theme: ThemeDataType }) {
  const { mainInformation, setMainInformation } = useMainInformationStore();
  const { itemsFile, setItemsFile } = useFileStore();

  function handleClickButtonTheme(url: string) {
    setMainInformation({
      ...mainInformation,
      backgroundImage: url,
    });
    const updatedItems = itemsFile.map((item) =>
      item.type === "backgroundImage"
        ? { ...item, File: null, url: null }
        : item
    );
    setItemsFile(updatedItems);
  }

  return (
    <>
      <button
        className={`flex flex-col p-1 border rounded-md ${mainInformation.backgroundImage == theme.url ? "bg-green-200 border-green-500" : ""}`}
        onClick={() => handleClickButtonTheme(theme.url)}
      >
        <div className="w-full h-24">
          <img
            src={theme.url}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="mx-auto text-sm">{theme.name}</p>
      </button>
    </>
  );
}
