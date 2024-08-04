'use client'
import { useState } from "react";

const UpvoteButton = () => {
  const [ upvoteCount, setUpvoteCount]  = useState(0);
  return (
    <>
      <button
        onClick={() => setUpvoteCount(upvoteCount + 1)}
        className="bg-blue-500 text-white p-2 mt-10"
      >
        Upvote
      </button>
    </>
  );
};
export default UpvoteButton;
