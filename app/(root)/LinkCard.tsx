import { Button } from "@/components/ui/button";
import { Clock3, SquarePen, Star, Trash } from "lucide-react";
import Link from "next/link";

export default function LinkCard() {
  return (
    <>
      <div className="flex justify-between gap-4 bg-white dark:bg-primary p-4 border rounded-lg">
        <div className="flex gap-4">
          <img
            src="https://nwqvfawximjelnlolzei.supabase.co/storage/v1/object/public/images/Group%2093.png?t=2025-01-04T06%3A43%3A14.270Z"
            alt=""
            className="rounded-md w-16 h-16 object-cover"
          />
          <div className="space-y-2">
            <h2 className="font-semibold text-xl">Portofolio</h2>
            <p>Link</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Button className="flex gap-2" variant={"outline"}>
              <Star className="w-4 h-4" />
              <p>Star</p>
            </Button>
            <Link
              href={"/"}
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 border rounded-lg"
            >
              <SquarePen className="w-4 h-4" />
              <p>Edit</p>
            </Link>
            <Button className="flex gap-2">
              <Trash className="w-4 h-4" />
              <p>Delete</p>
            </Button>
          </div>
          <div className="flex justify-end items-center gap-2">
            <Clock3 className="w-4 h-4" />
            <p className="">2 days ago</p>
          </div>
        </div>
      </div>
    </>
  );
}
