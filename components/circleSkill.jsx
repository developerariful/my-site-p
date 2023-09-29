import React from "react";

const CircleSkill = ({ title, subTitle, parcentage, cwidth, cColor }) => {
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold text-white mb-8">{title} </h2>
      </div>
      <div className="flex justify-between mb-[0px] text-base">
        <span className="font-bold text-lg text-gray-300">{subTitle}</span>
        <span className="text-gray-200 ">{parcentage}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-1 dark:bg-gray-700">
        <div className=" h-1 rounded-full " style={cwidth}></div>
      </div>
    </div>
  );
};

export default CircleSkill;
