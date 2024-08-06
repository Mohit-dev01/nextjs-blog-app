import PostLists from "@/components/post-lists";
import UpvoteButton from "@/components/upvoteBtn";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!post) {
    notFound();
  }
  console.log(params);
  return (
    <>
      <main className="px-7 pt-24 text-center">
        <h1 className="text-5xl font-semibold mb-7">{post?.title}</h1>
        <p className="max-w-[700px] mx-auto">{post?.body}</p>
        {/* <UpvoteButton /> */}
      </main>
    </>
  );
};
export default Page;
