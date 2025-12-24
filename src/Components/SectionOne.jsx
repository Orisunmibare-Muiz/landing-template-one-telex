import React from "react";
import Button from "./Shared component/Button";
import RoboTech from "/Images/robot.svg";
import curvedArrow from "../../public/Images/Curved-arrow.svg"

export default function SectionOne() {
  return (
    <>
      {/* Section One - Section Background */}
      <section className="bg-[#e6e6e6] flex sm:h-screen">
        {/* Section One - Content Container */}
        <div className="flex flex-row items-center outline-1 sm:mx-auto sm:my-auto sm:w-291.75 sm:h-152">
          <div className="outline-1 sm:w-136 sm:h-99">
            {/* Section One - Heading */}
            <h1 className="navFont font-bold text-[40px]">
              Instant <span className="text-[#5531BA]">AI-Powered</span>{" "}
            </h1>
            <h1 className="navFont font-bold text-[40px] mb-5">
              Customer Support
            </h1>

            {/* Section One - Description Paragraph */}
            <p className="navFont text-[#444444] text-[24px] mb-5">
              Automate responses, improve efficiency, and provide 24/7
              assistance with Bob.
            </p>

            {/* Section One - Activate Bob Button🔘 */}
            <Button
              button="Activate Bob"
              buttonStyle="text-white w-[173px] h-[60px] text-[20px]"
            />
          </div>

          <div>
            <img src={curvedArrow} alt="curved arrow image" />
          </div>

          {/* Section One - 📷 Robot image.svg */}
          <div>
            <img
              className="sm:w-133 sm:h-84.5"
              src={RoboTech}
              alt="Robot Illustration"
            />
          </div>
        </div>
      </section>
    </>
  );
}