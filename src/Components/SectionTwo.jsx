import React from "react";
import RoboTech from "/Images/robot.svg";
import chatOne from "/Images/text-message-one.svg";

export default function SectionTwo() {
  return (
    <>
      {/*Section two background*/}
      <section className="bg-[#efefef] lg:flex lg:flex-row">
        {/* Section two - Main Container */}
        <div className="lg:w-291.75 lg:flex lg:flex-row lg:mx-auto">
          {/*Section two - first (📷 image)container */}
          <div className="hidden lg:flex lg:flex-col lg:relative">
            <img src={RoboTech} alt="A robotic image" className="lg:w-350" />
            <img src={chatOne} alt="in-chat note" className="absolute top-61 left-5" />
          </div>

          {/*Section two - second container */}
          <div className="p-5 text-[20px] lg:px-5 lg:pt-3">
            <h1 className="font-semibold text-[40px] text-center lg:font-semibold lg:text-[50px] lg:mb-5">About Bob</h1>
            <p className="text-center text-[#333333] lg:text-[#444444] lg:text-[24px]">
              Bob is an AI-powered virtual assistance that helps business
              automate customer inquiries, provide real-time support, and free
              human agents to focus on more complex issues
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
