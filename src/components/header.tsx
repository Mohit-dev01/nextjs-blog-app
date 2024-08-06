"use client";
import Link from "next/link";
import { TfiWrite } from "react-icons/tfi";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Header = () => {
  const navlinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/posts",
      label: "Posts",
    },
    {
      href: "/create-post",
      label: "Create Post",
    },
  ];

  const pathname = usePathname();
  return (
    <>
      <header className="flex justify-between px-7 py-4 items-center border-b">
        <Link className="" href="/">
          <Image
            src="/blog.png"
            alt="logo"
            width={35}
            height={35}
            className="w-[35px] h-[35px]"
          />
        </Link>

        <nav>
          <ul className="flex gap-x-7 text-[14px]">
            {navlinks.map((item) => {
              return (
                <>
                  <li
                    key={item.href}
                    className={` ${
                      pathname === item.href
                        ? "text-zinc-900 font-bold"
                        : "text-zinc-400"
                    }`}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                </>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
