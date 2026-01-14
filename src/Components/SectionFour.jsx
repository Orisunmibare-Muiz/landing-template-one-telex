import React from "react";
import videoFrame from "/Images/video-frame.png";
import Button from "./Shared component/Button";

export default function SectionFour() {
  return (
    <>
      <section className="bg-[#efefef] py-15">
        <div className="lg:flex lg:flex-row lg:w-291.75 mx-auto">
          <div className="lg:w-150 lg:pt-5 lg:pr-15">
            <h2 className="lg:font-bold lg:text-[40px] lg:mb-4">Bob’s explainer video</h2>

            <p className="lg:text-[20px] text-[#444444] lg:mb-10 leading-6">
              Bob instantly responds to customer inquiries, automates repetitive
              tasks, and seamlessly integrates with your support tools. This
              video shows how Bob improves efficiency, routes complex queries to
              human agents, and provides 24/7 assistance.
            </p>

            <div>
              <Button
                button="Watch now"
                buttonStyle={"outline-[#D1D5DB] text-[#7141F8] bg-white lg:outline-3 lg:rounded-full lg:py-3 lg:px-7 lg:font-semibold lg:text-[15px]"}
              />
            </div>
          </div>

          <div className="">
            <img src={videoFrame} alt="image replacing video spacing" />
          </div>
        </div>
      </section>
    </>
  );
}
