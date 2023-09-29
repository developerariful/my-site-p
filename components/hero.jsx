import React from "react";
import CodeHighlighter from "./codeHighlighter";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" h-screen flex justify-center items-center cusBg ">
      <div className="w-11/12 mx-auto text-white ">
        <div className="">
          <div className="flex justify-around flex-row flex-wrap mx-auto items-center  ">
            <div className="">
              <h3 className="font-semibold text-2xl mb-2">Hi, There</h3>
              <h1 className="text-5xl font-extrabold mb-5">I'm Ariful</h1>
              <p className="mb-3 text-2xl text-gray-300">
                Programmer, Trainer & Public Speake
              </p>
              <p className="text-2xl text-gray-200">
                Over the last 3 years, I have been developing web and mobile
                <br />
                apps for my clients world wide.
              </p>
              <div className="mt-8">
                <Link
                  href={"/"}
                  className="cbtn px-4 py-3 text-lg mr-6 rounded-md font-semibold mb-4 hover:hoverBtn duration-500 t"
                >
                  Hire Me{" "}
                </Link>
                <Link
                  href={"/"}
                  className="px-4 py-3 bg-[#0466c8] rounded-md font-semibold text-lg hover:bg-[#0466c8c9]"
                >
                  {" "}
                  Courses
                </Link>
              </div>
            </div>
            <div className="">
              <CodeHighlighter />
            </div>
          </div>
        </div>
        {/* <div className="text-center pt-20">
          <h4>hello</h4>
          <h4>hello</h4>
          <h4>hello</h4>
          <h4>hello</h4>
          <h4>hello</h4>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
