import React from "react";

export default function Button(props) {
  return (
    <>
      <button
        className={`bg-[#2A2B67] rounded-[5px] px-6 py-2 navFont font-medium ${props.buttonStyle}`}
      >
        {props.button}
      </button>
    </>
  );
}
