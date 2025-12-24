import React from "react";

export default function Button(props) {
  return (
    <>
      <button
        className={`bg-[#2A2B67] rounded-[5px] px-4 py-1 navFont font-medium text-[12px] ${props.buttonStyle}`}
      >
        {props.button}
      </button>
    </>
  );
}
