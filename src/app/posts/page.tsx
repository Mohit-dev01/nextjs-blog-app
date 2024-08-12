import PostLists from "@/components/post-lists";
import { Suspense } from "react";

const Posts = async () => {
  return (
    <div className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5 ">All Posts</h1>
      <span className="">
        Click on the below posts to go to their main content
      </span>
      <Suspense fallback="Loading...">
        <PostLists />
      </Suspense>
    </div>
  );
};

export default Posts;
