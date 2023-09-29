import Link from "next/link";
import React from "react";

const Header = () => {
  const Navlinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Skill",
      path: "/",
    },
    {
      title: "Project",
      path: "/",
    },
    {
      title: "Course",
      path: "/",
    },
    {
      title: "Contact",
      path: "/",
    },
  ];
  return (
    <>
      <nav className="bg-[#014f86] fixed w-full">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between flex-row flex-wrap mx-auto items-center py-4 ">
            <div className="text-white">
              <Link href={"/"} className="font-bold font-roboto text-lg">
                Ariful
              </Link>
            </div>
            <div>
              <ul className="flex items-center">
                {Navlinks.map((item) => (
                  <li className="mx-5 text-white font-semibold">
                    <Link href={item.path} key={item.title}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
