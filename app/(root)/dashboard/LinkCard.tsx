import { Button } from "@/components/ui/button";
import { PostType } from "@/types/Types";
import { formatRelativeTime } from "@/utils/timeUtils";
import { Clock3, SquarePen, Star, Trash } from "lucide-react";
import Link from "next/link";

interface LinkCardProps {
  post: PostType;
}

export default function LinkCard({ post }: LinkCardProps) {
  return (
    <>
      <div className="flex justify-between gap-4 p-4 border rounded-lg">
        <div className="flex gap-4">
          <img
            src="/images/batik.png"
            alt="Image"
            className="rounded-md w-16 h-16 object-cover"
          />
          <div className="space-y-2">
            <h2 className="font-semibold text-xl">{post.title}</h2>
            <p>{post.slug}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Button
              className={`flex gap-2 ${post.isStarred ? "bg-yellow-500 hover:bg-yellow-600" : ""}`}
              variant={"outline"}
            >
              <Star className="w-4 h-4" />
              {post.isStarred ? <p>Starred</p> : <p>Star</p>}
            </Button>
            <Link href={"/"}>
              <Button className="flex gap-2" variant={"outline"}>
                <SquarePen className="w-4 h-4" />
                <p>Edit</p>
              </Button>
            </Link>
            <Button className="flex gap-2" variant={"destructive"}>
              <Trash className="w-4 h-4" />
              <p>Delete</p>
            </Button>
          </div>
          <div className="flex justify-end items-center gap-2">
            <Clock3 className="w-4 h-4" />
            <p className="">{formatRelativeTime(post.createdAt)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
