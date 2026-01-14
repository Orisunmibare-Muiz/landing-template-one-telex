import React from "react";
import Button from "./Shared component/Button";
import twoSidedPhones from "/Images/iPhone-13-two-sided.svg";
import spiralCircle from "/Images/spiral-circle.svg";

export default function SectionSeven() {
  return (
    <>
      <section className="bg-[#efefef] py-5 relative">
        <div className="bg-[#303073] rounded-[20px] flex flex-row lg:w-291.75 mx-auto">
          <div className="p-5 flex flex-col justify-center px-20">
            <h2 className="text-[40px] font-semibold text-white mb-3">
              Secure. Collaborate. Defend.
            </h2>
            <p className="text-[white] text-[18px] mb-5">
              Sign up for free and strengthen your cyber security operations
              with Telex.
            </p>
            <Button
              button="Start Your Free 14-Days Trial"
              buttonStyle={
                "text-[#303073] bg-white font-semibold text-[20px] lg:py-[12px] lg:px-[24px] w-max"
              }
            />
          </div>
          <div className="">
            <img src={twoSidedPhones} alt="Two Sided Phones" className="relative z-2" />
          </div>
          <img src={spiralCircle} alt="Spiral Circle" className="absolute top-5 right-0 z-1 lg:w-220 lg:h-110" />
        </div>
      </section>
    </>
  );
}
