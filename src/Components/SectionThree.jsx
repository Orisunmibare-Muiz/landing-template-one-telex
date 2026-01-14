import React from "react";
import { sectionThree } from "../Data/SectionThree";

export default function SectionThree() {
  return (
    <>
      <section className="bg-[#efefef] lg:flex lg:flex-col lg:pb-10">
        <div className="px-5 lg:w-291.75 mx-auto lg:pt-15">
          <div className="flex justify-center font-semibold text-[40px]">
            <h1 className="lg:mx-auto lg:font-semibold lg:text-[50px] mb-7">Features</h1>
          </div>

          <div className="grid grid-rows-1 lg:grid-cols-4 gap-10">
            {sectionThree.map((props, index) => (
              <div key={index} className="bg-white p-5 flex flex-col items-center rounded-[15px]">
                <img src={props.image} alt={props.description} className="mb-5 lg:mb-4" />
                <h3 className="mb-3 text--center lg:font-bold lg:text-[21px] lg:mb-2 lg:text-center">{props.header}</h3>
                <p className="text-center text-[#444444]  lg:text-center lg:text-[17px] lg:font-semibold">{props.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
