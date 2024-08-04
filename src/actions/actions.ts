"use server";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// import prisma from "@/lib/db";
interface IData {
  title: string;
  body: string;
}
const ServerActionCreatePost = async ({ data }: { data: IData }) => {
  const { isAuthenticated } = await getKindeServerSession();
  if (!(await isAuthenticated)) {
    redirect("/api/auth/login");
  }
  await prisma.post.create({
    data: {
      title: data.title,
      body: data.body,
    },
  });
};
revalidatePath("/posts");

export default ServerActionCreatePost;
