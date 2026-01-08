import React from "react";
import Button from "./Shared component/Button";
import RoboTech from "/Images/robot.svg";
import curvedArrow from "/Images/Curved-arrow.svg";
import chatOne from "/Images/text-message-one.svg";
import chatTwo from "/Images/text-message-two.svg";

export default function SectionOne() {
  return (
    <>
      {/* Section One - Section Background */}
      <section className="bg-[#efefef] flex md:h-100 lg:h-screen sm:h-100">
        {/* Section One - Main Container */}
        <div className="items-center mx-auto relative my-auto h-max sm:flex sm:w-125 md:w-145 lg:flex-row lg:h-152 lg:w-291.75">
          {/* Section One - Content Container */}
          <div className="lg:w-136 lg:h-99 md:h-max md:w-190 sm:items-start sm:py-0 flex flex-col items-center gap-2 py-15">
            {/* Section One - Heading */}
            <h1 className="navFont font-bold text-[30px] sm:text-[21px] md:text-[30px] lg:text-[40px]">
              Instant <span className="text-[#5531BA]">AI-Powered</span>
            </h1>
            <h1 className="navFont font-bold lg:text-[40px] md:text-[30px] sm:text-[21px] mb-5 text-[30px]">
              Customer Support
            </h1>

            {/* Section One - Description Paragraph */}
            <p className="navFont md:text-[#444444] lg:text-[24px] md:text-[15px] mb-5 sm:text-[12px] text-center sm:text-left text-[#5531BA] font-medium">
              Automate responses, improve efficiency, and provide 24/7
              assistance with Bob.
            </p>

            {/* Section One - Activate Bob Button🔘 */}
            <Button 
              button="Activate Bob"
              buttonStyle="text-white lg:w-[173px] lg:h-[60px] lg:text-[20px] lg:rounded-[10px] md:text-[16px] md:rounded-[7px] sm:text-[13px] sm:py-2 sm:px-5 py-2 py-3 px-7 text-[25px] "
            />
          </div>

          {/* Section One - 📷 Curved Arrow Image */}
          <div className="hidden sm:flex absolute lg:w-73 lg:top-12.5 lg:left-100 md:top-1 md:left-67 md:w-35 sm:w-30 sm:left-45 sm:top-20">
            <img src={curvedArrow} alt="curved arrow image" />
          </div>

          {/* Section One - 📷 Robot image.svg */}
          <div className="py-13">
            <img
              className="sm:w-133 sm:h-84.5 md:h-max"
              src={RoboTech}
              alt="Robot Illustration"
            />
          </div>

          {/* Section One - 📷 Chat one image.svg */}
          <div className="absolute lg:top-55 lg:left-204 lg:w-71.5 md:left-112 md:top-17 md:w-55 sm:top-31 sm:left-88 sm:w-60 top-110 left-23 w-86">
            <img
              className=""
              src={chatOne}
              alt="Chat One Illustration"
            />
          </div>

          {/* Section One - 📷 Chat two image.svg */}
          <div className="absolute lg:w-71.5 lg:top-79 lg:left-150 md:left-75 md:top-28 md:w-55 sm:w-55 sm:top-43 sm:left-51 top-140 left-0 w-83">
            <img
              src={chatTwo}
              alt="Chat Two Illustration"
            />
          </div>
        </div>
      </section>
    </>
  );
}
