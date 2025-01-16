import { getPostBySlug } from "@/utils/postUtils";
import { notFound } from "next/navigation";
import ProfileView from "../(root)/dashboard/_components/section-item/ProfileView";
import { AccordionItem } from "@/types/AccordionItem";
import ContactUsView from "../(root)/dashboard/_components/section-item/ContactUsView";
import TwitterView from "../(root)/dashboard/_components/section-item/TwitterView";
import WhatsAppView from "../(root)/dashboard/_components/section-item/WhatsAppView";
import EmailView from "../(root)/dashboard/_components/section-item/EmailView";
import LinkedInView from "../(root)/dashboard/_components/section-item/LinkedInView";
import TelegramView from "../(root)/dashboard/_components/section-item/TelegramView";
import InstagramView from "../(root)/dashboard/_components/section-item/InstagramView";
import SpaceView from "../(root)/dashboard/_components/section-item/SpaceView";
import TextView from "../(root)/dashboard/_components/section-item/TextView";

export default async function PublicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);

  if (!post || post.published == false) {
    return notFound();
  }

  const postContent = JSON.parse(post?.content as string) as AccordionItem[];

  return (
    <>
      <div
        className="fixed inset-0 flex justify-center items-center"
        style={{
          backgroundImage: post.backgroundImage
            ? `url(${post.backgroundImage})`
            : undefined,
          backgroundColor: post.backgroundColor,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`lg:w-96 h-full overflow-y-scroll custom-scrollbar ${
            post.backgroundImage ? "bg-cover bg-center" : "bg-white"
          }`}
          style={{
            backgroundColor: post.backgroundImage
              ? "transparent"
              : post.backgroundColor,
          }}
        >
          {postContent.map((item) => (
            <div className="" key={item.id}>
              {item.content.type == "profile" ? (
                <ProfileView item={item} />
              ) : item.content.type == "phone" ? (
                <ContactUsView item={item} />
              ) : item.content.type == "twitter" ? (
                <TwitterView item={item} />
              ) : item.content.type == "whatsapp" ? (
                <WhatsAppView item={item} />
              ) : item.content.type == "email" ? (
                <EmailView item={item} />
              ) : item.content.type == "linkedIn" ? (
                <LinkedInView item={item} />
              ) : item.content.type == "telegram" ? (
                <TelegramView item={item} />
              ) : item.content.type == "instagram" ? (
                <InstagramView item={item} />
              ) : item.content.type == "space" ? (
                <SpaceView item={item} />
              ) : item.content.type == "text" ? (
                <TextView item={item} />
              ) : null}
            </div>
          ))}
          <div className="flex justify-center py-16">
            <div className="flex justify-center items-center gap-2 p-4 rounded-full animate-bounce">
              <p>Inspired by</p>
              <img
                src="/images/sid.png"
                alt="Logo"
                className="h-4 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
