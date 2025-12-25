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
      <section className="bg-[#efefef] flex md:h-100 lg:h-screen">
        <div className="flex lg:flex-row items-center mx-auto my-auto outline-1 lg:h-152 lg:w-291.75 relative  md:w-145">
          {/* Section One - Content Container */}
          <div className="lg:w-136 lg:h-99 md:h-max md:w-190">
            {/* Section One - Heading */}
            <h1 className="navFont font-bold lg:text-[40px] md:text-[30px]">
              Instant <span className="text-[#5531BA]">AI-Powered</span>{" "}
            </h1>
            <h1 className="navFont font-bold lg:text-[40px] md:text-[30px] mb-5">
              Customer Support
            </h1>

            {/* Section One - Description Paragraph */}
            <p className="navFont text-[#444444] lg:text-[24px] md:text-[15px] mb-5">
              Automate responses, improve efficiency, and provide 24/7
              assistance with Bob.
            </p>

            {/* Section One - Activate Bob Button🔘 */}
            <Button
              button="Activate Bob"
              buttonStyle="text-white lg:w-[173px] lg:h-[60px] lg:text-[20px] md:text-[16px] lg:rounded-[10px] md:rounded-[7px] md:py-2 "
            />
          </div>

          {/* Section One - 📷 Curved Arrow Image */}
          <div className="absolute lg:w-73 lg:top-12.5 lg:left-100 md:top-1 md:left-67 md:w-35">
            <img src={curvedArrow} alt="curved arrow image" />
          </div>

          {/* Section One - 📷 Robot image.svg */}
          <div>
            <img
              className="sm:w-133 sm:h-84.5 md:h-max"
              src={RoboTech}
              alt="Robot Illustration"
            />
          </div>

          {/* Section One - 📷 Chat one image.svg */}
          <div>
            <img
              className="absolute lg:top-55 lg:left-204 lg:w-71.5 md:left-112 md:top-17 md:w-55 "
              src={chatOne}
              alt="Chat One Illustration"
            />
          </div>

          {/* Section One - 📷 Chat two image.svg */}
          <div>
            <img
              className="absolute lg:w-71.5 lg:top-79 lg:left-150 md:left-75 md:top-28 md:w-55"
              src={chatTwo}
              alt="Chat Two Illustration"
            />
          </div>
        </div>
      </section>
    </>
  );
}
