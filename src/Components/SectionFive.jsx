import React from "react";
import deviceTouchScreen from "/Images/Device-touch-screen.png";
import Button from "./Shared component/Button";

export default function SectionFive() {
  return (
    <>
      <section className="bg-[#efefef] py-15">
        <div className="lg:w-291.75 lg:mx-auto">
          <div>
            <h2 className="lg:text-[40px] lg:font-bold text-center lg:mb-3">Get Started With Telex</h2>

            <p className="lg:text-[20px] text-[#444444] lg:px-25 text-center mb-8">
              Join our community of software engineers and stay updated on the
              latest in application performance monitoring metrics. Sign up for
              a free demo and exclusive insights.
            </p>
          </div>

          <div className=""> 
            <div className="lg:flex gap-10">
              <div>
                <img src={deviceTouchScreen} alt="Device Touch Screen" className="lg:w-130" />
              </div>

              <div className="flex flex-col gap-8 bg-white lg:w-full rounded-[10px] p-10">

                <div className="flex flex-col gap-3">
                  <label htmlFor="Name" className="text-[20px]">Full Name</label>
                  <input type="text" placeholder="Your name" className="outline-[#E0E3E7] outline-1 rounded-[5px] lg:w-full lg:h-10 p-2 text-[18px]" />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="Profession" className="text-[20px]">Profession</label>
                  <input type="text" placeholder="e.g Designer, Filmmaker,  etc." className="outline-[#E0E3E7] outline-1 rounded-[5px] lg:w-full lg:h-10 p-2 text-[18px]" />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="Email" className="text-[20px]">Email</label>
                  <input type="text" placeholder="you@email.com" className="outline-[#E0E3E7] outline-1 rounded-[5px] lg:w-full lg:h-10 p-2 text-[18px]" />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="Phone-number" className="text-[20px]">Phone Number</label>
                  <input type="text" placeholder="Your Phone Number" className="outline-[#E0E3E7] outline-1 rounded-[5px] lg:w-full lg:h-10 p-2 text-[18px]" />
                </div>

                <Button
                button="Request a demo"
                buttonStyle="w-full text-white text-[20px] py-2.5 rounded-[13px]"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
