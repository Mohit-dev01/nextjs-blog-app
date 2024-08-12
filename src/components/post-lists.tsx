import prisma from "@/lib/db";
import Link from "next/link";

const PostLists = async () => {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      body: true,
    },
  });
  return (
    <>
      <ul className="mt-5">
        {posts.map((item) => (
          <li key={item.id} className="mb-3 hover:font-bold text-blue-400">
            <Link href={`/posts/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default PostLists;
