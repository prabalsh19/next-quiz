import React from "react";

export const Button = ({ text, width }: { text: string; width?: string }) => {
  return (
    <button className={`btn-grad ${width ? `w-[${width}]` : ""}`}>
      {text}
    </button>
  );
};
