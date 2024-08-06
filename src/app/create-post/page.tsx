"use client";
import ServerActionCreatePost from "@/actions/actions";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Logout from "@/components/logoutBtn";
interface IData {
  title: string;
  body: string;
}
const schema = z.object({
  title: z.string(),
  body: z.string(),
});
const CreatePost = () => {
  // const { isAuthenticated } = getKindeServerSession();
  // if (!(await isAuthenticated())) {
  //   redirect("/api/auth/login?post_login_redirect_url=/create-post");
  // }
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: IData) => {
    console.log(data);
    ServerActionCreatePost({ data });
    reset();
  };
  return (
    <>
      <main className="text-center pt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Create post</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
        >
          <Controller
            control={control}
            name="title"
            render={({ field }) => {
              return (
                <>
                  <input
                    value={field.value || ""}
                    onChange={field.onChange}
                    type="text"
                    name="title"
                    placeholder="Title for new post"
                    required
                    className="border rounded px-3 h-10"
                  />
                </>
              );
            }}
          />
          <Controller
            control={control}
            name="body"
            render={({ field }) => {
              return (
                <>
                  <textarea
                    value={field.value || ""}
                    onChange={field.onChange}
                    name="body"
                    placeholder="Body content for new post"
                    className="border rounded px-3 py-2"
                    rows={6}
                    required
                  />
                </>
              );
            }}
          />
          <button className="h-10 bg-blue-500 px-5 rounded text-white">
            Submit
          </button>
        </form>

        {/* <LogoutLink>Logout</LogoutLink> */}
        <Logout />
      </main>
    </>
  );
};
export default CreatePost;
