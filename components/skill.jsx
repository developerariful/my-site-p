import React from "react";
import Image from "next/image";
import CircleSkill from "./circleSkill";

const Skills = () => {
  return (
    <section className="py-40 bg-[#d62977a7]">
      <div>
        <div className="w-11/12 mx-auto">
          <div className="flex items-center justify-evenly flex-wrap">
            <div className=" w-[570px]">
              <CircleSkill
                title={"My Skills"}
                subTitle={"HTML"}
                parcentage={90}
                cwidth={{ width: "90%", background: "#FF5D3A" }}
              />
              <CircleSkill
                subTitle={"Css"}
                parcentage={70}
                cwidth={{ width: "70%", background: "#186DF8" }}
              />
              <CircleSkill
                subTitle={"JavaScript"}
                parcentage={80}
                cwidth={{ width: "80%", background: "#FFEA00" }}
              />
              <CircleSkill
                subTitle={"jQuery"}
                parcentage={75}
                cwidth={{ width: "75%", background: "#A41FF0" }}
              />
              <CircleSkill
                subTitle={"React JS"}
                parcentage={60}
                cwidth={{ width: "60%", background: "#3498DB" }}
              />
              <CircleSkill
                subTitle={"Next Js "}
                parcentage={50}
                cwidth={{ width: "50%", background: "#F39C12" }}
              />
              <CircleSkill
                subTitle={"Tailwind Css "}
                parcentage={70}
                cwidth={{ width: "70%", background: "#5E63E5" }}
              />
            </div>
            <div className="">
              <div className="items-center w-full text-center justify-center flex">
                <Image
                  src={"/assets/images/skill.JPG"}
                  width={350}
                  height={350}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
