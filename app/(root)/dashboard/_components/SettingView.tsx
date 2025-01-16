"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ButtonTheme from "./ButtonTheme";
import { Button } from "@/components/ui/button";
import { Image, ImageIcon, Pencil, Trash } from "lucide-react";
import { themeData } from "@/types/ThemeData";
import useMainInformationStore from "@/hooks/useMainInformationStore";
import useFileStore from "@/hooks/useFileStore";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { deleteFile } from "@/utils/imageUtils";

interface SettingViewProps {
  type: "create" | "edit";
}

export default function SettingView({ type }: SettingViewProps) {
  const { itemsFile, setItemsFile } = useFileStore();
  const { mainInformation, setMainInformation } = useMainInformationStore();
  const URL = process.env.NEXT_PUBLIC_URL;

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "backgroundImage" | "iconImage"
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
        if (type === "backgroundImage") {
          setMainInformation({ ...mainInformation, backgroundImage: "" });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  function handleChangeTitle(title: string) {
    setMainInformation({
      ...mainInformation,
      title,
    });
  }

  function handleChangeLink(link: string) {
    setMainInformation({
      ...mainInformation,
      link,
    });
  }

  function handleChangeDascriptionMetadata(description: string) {
    setMainInformation({
      ...mainInformation,
      description,
    });
  }

  function handleupdateBackgroundColor(color: string = "#ffffff") {
    setMainInformation({
      ...mainInformation,
      backgroundColor: color,
    });
  }

  async function handleDeleteImage(
    type: "profileImage" | "backgroundImage" | "headerImage" | "iconImage"
  ) {
    if (type == "backgroundImage") {
      if (mainInformation.backgroundImage.startsWith("https:")) {
        const a = await deleteFile(mainInformation.backgroundImage);
        console.log(a.toString);
      }
      setMainInformation({
        ...mainInformation,
        backgroundImage: "",
      });
    }

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
            defaultValue={mainInformation.title}
            placeholder="Insert title here..."
            onChange={(e) => handleChangeTitle(e.target.value)}
          />
        </div>
        <div className="">
          <Label htmlFor="link">Link</Label>
          <Input
            type="link"
            id="link"
            disabled={type == "edit"}
            defaultValue={mainInformation.link}
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
                onClick={() => handleDeleteImage("backgroundImage")}
              >
                <Trash className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <h4 className="font-semibold text-lg">Background Color</h4>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={mainInformation.backgroundColor}
            onChange={(event) =>
              handleupdateBackgroundColor(event.target.value)
            }
          />
          <Button
            onClick={() => handleupdateBackgroundColor()}
            variant={"ghost"}
            className="px-2"
          >
            Reset
          </Button>
        </div>
        <hr />
        <h3 className="font-bold text-xl">⚙️ Setting</h3>
        <h4 className="font-semibold text-lg">
          Meta Image & Description (Optional)
        </h4>
        <p className="text-sm">
          Meta Image & Description are used to enhance the appearance of your
          microsite when shared on various platforms.
        </p>
        <div className="gap-4 grid grid-cols-4">
          <div className="col-span-1">
            {itemsFile.find((item) => item.type === "iconImage")?.url ? (
              <img
                src={
                  itemsFile.find((item) => item.type === "iconImage")
                    ?.url as string
                }
                alt="Image"
                className="object-contain"
              />
            ) : (
              <>
                <Label htmlFor="iconImage" className="cursor-pointer">
                  <div className="flex justify-center items-center bg-slate-200 h-24">
                    <div className="flex flex-col justify-center items-center">
                      <ImageIcon className="w-4 h-4" />
                      <p>Input Image</p>
                    </div>
                  </div>
                </Label>
              </>
            )}
            <div className="flex gap-2 mt-4">
              <Label
                htmlFor="iconImage"
                className={`flex items-center border-input px-4 bg-background hover:bg-accent py-2  border  hover:text-accent-foreground rounded-md hover:cursor-pointer`}
              >
                <Pencil className="w-4 h-4" />
              </Label>
              <Input
                id="iconImage"
                name="iconImage"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "iconImage")}
              />

              <Button
                variant={"outline"}
                onClick={() => handleDeleteImage("iconImage")}
              >
                <Trash className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="col-span-3">
            <Textarea
              placeholder="Description..."
              defaultValue={mainInformation.description}
              onChange={(e) => handleChangeDascriptionMetadata(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
