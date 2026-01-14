import React from "react";
import iconMinus from "/Images/Icon minus.svg";
import iconPlus from "/Images/Icon plus.svg";

export default function SectionSix() {
  return (
    <>
      <section className="bg-[#efefef] py-15">
        <div className="lg:w-200 mx-auto ">
          <div className="flex flex-col lg:mb-15">
            <h2 className="lg:text-[40px] lg:font-bold lg:text-center">
              Frequently asked questions
            </h2>
            <p className="lg:text-[20px] lg:text-center text-[#444444]">
              Everything you need to know about Telex
            </p>
          </div>

          <div>
            <div className="lg:flex lg:flex-row lg:justify-between mb-1.5">
              <p className="lg:text-[18px] lg:font-semibold">How does Bob improve customer support?</p>
              <img src={iconMinus} alt="minus Icon" />  
            </div>

            <p className="lg:text-[16px] text-[#444444] mb-7">
              Bob provides instant responses, reducing response times and
              enhancing customer satisfaction
            </p>

            <div className="bg-[#dfdfdf] h-0.5 mb-7"></div>

            <div className="lg:flex lg:flex-row lg:justify-between lg:mb-8">
              <p className="font-semibold">Can Bob integrate with my CRM?</p>
              <img src={iconPlus} alt="Plus icon" />
            </div>

            <div className="bg-[#dfdfdf] h-0.5 mb-8"></div>

            <div className="lg:flex lg:flex-row lg:justify-between">
              <p className="font-semibold">Does Bob work 24/7?</p>
              <img src={iconPlus} alt="Plus icon" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
