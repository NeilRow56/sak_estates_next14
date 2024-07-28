import React from "react";

interface SectionTitleProps {
  title: string;
}
const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-slate-500">{title}</h1>
      <hr className="border-slate-400 my-2 border-solid" />
    </div>
  );
};

export default SectionTitle;
