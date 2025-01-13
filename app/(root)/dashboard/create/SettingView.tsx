"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ButtonTheme from "./ButtonTheme";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { themeData } from "@/types/themeData";
import useMainInformationStore from "@/hooks/useMainInformationStore";
import useFileStore from "@/hooks/useFileStore";
import { toast } from "sonner";

export default function SettingView() {
  const { itemsFile, setItemsFile } = useFileStore();
  const { mainInformation, setItems } = useMainInformationStore();
  const URL = process.env.NEXT_PUBLIC_URL;

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "profileImage" | "backgroundImage" | "headerImage"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1048576) {
        toast.error("Ukuran file maksimal adalah 1 MB.");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const updatedItems = itemsFile.map((item) =>
          item.type === type
            ? { ...item, File: file, url: reader.result as string }
            : item
        );
        setItemsFile(updatedItems);
        e.target.value = "";
        setItems({ ...mainInformation, backgroundImage: "" });
      };
      reader.readAsDataURL(file);
    }
  };

  function handleChangeTitle(title: string) {
    setItems({
      ...mainInformation,
      title,
    });
  }

  function handleChangeLink(link: string) {
    setItems({
      ...mainInformation,
      link,
    });
  }

  function handleupdateBackgroundColor(color: string) {
    setItems({
      ...mainInformation,
      backgroundColor: color,
    });
  }

  function handleDeleteBackgroundImage(
    type: "profileImage" | "backgroundImage" | "headerImage"
  ) {
    setItems({
      ...mainInformation,
      backgroundImage: "",
    });
    const updatedItems = itemsFile.map((item) =>
      item.type === type ? { ...item, File: null, url: null } : item
    );
    setItemsFile(updatedItems);
  }

  return (
    <>
      <div className="space-y-4">
        <h2 className="font-bold text-2xl">📝 Main Information</h2>
        <div className="">
          <Label htmlFor="title">Title</Label>
          <Input
            type="title"
            id="title"
            placeholder="Insert title here..."
            onChange={(e) => handleChangeTitle(e.target.value)}
          />
        </div>
        <div className="">
          <Label htmlFor="link">Link</Label>
          <Input
            type="link"
            id="link"
            placeholder={`${URL}/{your-link}`}
            onChange={(e) => handleChangeLink(e.target.value)}
          />
        </div>
        <hr />
        <h3 className="font-bold text-xl">🎨 Theme and Color</h3>
        <h4 className="font-semibold text-lg">Theme</h4>
        <div className="gap-2 grid xl:grid-cols-4 p-2 border rounded-md h-80 overflow-y-scroll">
          {themeData.map((theme, index) => (
            <ButtonTheme theme={theme} key={index} />
          ))}
        </div>

        <h4 className="font-semibold text-lg">Background Image</h4>

        <div className="relative bg-slate-200 w-full h-48 group">
          {itemsFile.find((item) => item.type === "backgroundImage")?.url ||
          mainInformation.backgroundImage ? (
            <img
              src={
                itemsFile.find((item) => item.type === "backgroundImage")
                  ?.url ?? mainInformation.backgroundImage
              }
              alt="Image"
              className="relative mx-auto w-fit h-48 aspect-4/5 object-cover"
            />
          ) : null}
          <div className="group-hover:block right-2 bottom-2 absolute space-x-2 hidden animate-in animate-out">
            <div className="flex gap-2">
              <Label
                htmlFor="backgroundImage"
                className={`flex items-center border-input px-4 bg-background hover:bg-accent py-2  border  hover:text-accent-foreground rounded-md hover:cursor-pointer`}
              >
                <Pencil className="w-4 h-4" />
              </Label>
              <Input
                id="backgroundImage"
                name="backgroundImage"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "backgroundImage")}
              />

              <Button
                variant={"outline"}
                onClick={() => handleDeleteBackgroundImage("backgroundImage")}
              >
                <Trash className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <h4 className="font-semibold text-lg">Background Color</h4>

        <input
          type="color"
          defaultValue={mainInformation.backgroundColor}
          onChange={(event) => handleupdateBackgroundColor(event.target.value)}
        />
        <p>{JSON.stringify(itemsFile, null, 2)}</p>
      </div>
    </>
  );
}
