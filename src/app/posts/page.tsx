import PostLists from "@/components/post-lists";
import { Suspense } from "react";

const Posts = async () => {
  //   const response = await fetch("https://dummyjson.com/posts?limit=10");
  //   const d = await response.json();
  //   console.log(d);

  return (
    <div className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5 ">All Posts</h1>
      {/* {data.posts.map()} */}
      <Suspense fallback="Loading...">
        <PostLists />
      </Suspense>
    </div>
  );
};

export default Posts;
