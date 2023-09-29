import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { RiYoutubeFill } from "react-icons/ri";

const About = () => {
  return (
    <section className="py-40 bgCus">
      <div className="bgLinear">
        <div className="w-11/12 mx-auto">
          <div className="flex  justify-center">
            <div className="w-[500px]">
              <Image
                src={"/assets/images/skill.JPG"}
                width={400}
                height={400}
                className="border-sky-250 border-8 rounded-md"
              />
            </div>
            <div className="w-[500px]">
              <h2 className="text-white mb-4 text-5xl font-bold">Md. Ariful</h2>
              <p className="text-gray-400 text-md mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis suscipit est magni voluptate quidem autem,
                exercitationem atque cumque? Officia provident, magni iste fuga
                quas eveniet. Provident tempora expedita dignissimos laboriosam.
              </p>
              <div>
                <h2 className="mb-4 text-lg text-gray-200 font-semibold">
                  Social Media{" "}
                </h2>
                <div className="flex items-center">
                  <Link href={"/"} className=" !fill-green-400  ">
                    <BsFacebook
                      className=" text-green-500 bg-white  rounded-full mr-3 w-4 h-4 "
                      size={35}
                    />{" "}
                  </Link>
                  <Link href={"/"}>
                    <BsInstagram
                      className="  bg-[#d62976]  rounded-full mr-3  w-6 h-6"
                      size={35}
                    />{" "}
                  </Link>
                  <Link href={"/"}>
                    <FaTwitterSquare
                      className="text-[#3b5998] bg- rounded-full mr-3"
                      size={35}
                    />{" "}
                  </Link>
                  <Link href={"/"}>
                    <RiYoutubeFill
                      className="text-[#3b5998] bg-white rounded-full  "
                      size={35}
                    />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
