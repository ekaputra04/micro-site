"use client";

import useMainInformationStore from "@/hooks/useMainInformationStore";
import { ThemeDataType } from "@/types/themeData";

export default function ButtonTheme({ theme }: { theme: ThemeDataType }) {
  const { mainInformation, setItems } = useMainInformationStore();

  function handleClickButtonTheme(url: string) {
    setItems({
      ...mainInformation,
      backgroundImage: url,
    });
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
