import { Button } from "@/components/ui/button";
import { PostType } from "@/types/Types";
import { deletePost, updateStarredPost } from "@/utils/postUtils";
import { formatRelativeTime } from "@/utils/timeUtils";
import { Clock3, SquarePen, Star, Trash } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface LinkCardProps {
  post: PostType;
}

export default function LinkCard({ post }: LinkCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateStarredPost = async (id: number) => {
    setIsLoading(true);
    try {
      const post = await updateStarredPost(id);
      toast.success("Post updated successfully");
    } catch (e) {
      console.error("Error creating post:", e);
      throw new Error("Unable to update post");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeletePost = async (id: number) => {
    setIsLoading(true);
    try {
      const post = await deletePost(id);
      toast.success("Post deleted successfully");
    } catch (e) {
      console.error("Error deleting post:", e);
      throw new Error("Unable to delete post");
    } finally {
      setIsLoading(false);
    }
  };
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
              disabled={isLoading}
              onClick={() => handleUpdateStarredPost(post.id)}
            >
              <Star className="w-4 h-4" />
              {post.isStarred ? <p>Starred</p> : <p>Star</p>}
            </Button>
            <Link href={`/dashboard/edit/${post.slug}`}>
              <Button
                className="flex gap-2"
                variant={"outline"}
                disabled={isLoading}
              >
                <SquarePen className="w-4 h-4" />
                <p>Edit</p>
              </Button>
            </Link>

            <AlertDialog>
              <AlertDialogTrigger className="flex justify-center items-center gap-2 bg-red-500 px-4 py-2 border rounded-md text-sm text-white">
                <Trash className="w-4 h-4" />
                <p>Delete</p>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your post and remove the data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => handleDeletePost(post.id)}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="flex justify-end items-center gap-2">
            <Clock3 className="w-4 h-4" />
            <p className="">{formatRelativeTime(post.updatedAt)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
