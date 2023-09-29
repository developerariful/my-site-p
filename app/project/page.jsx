import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <section className="py-40">
      <div>
        <div className="w-11/12 mx-auto">
          <div className="">
            <div>
              <div className="bg-gray-300  w-[350px]  m-4  ">
                <Link href={"/"}>
                  {" "}
                  <h3>Project Name</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
