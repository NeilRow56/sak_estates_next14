import Link from "next/link";
import React from "react";

interface PageTitleProps {
  title?: string;
  href?: string;
  linkCaption?: string;
}

const PageTitle = ({ title, href, linkCaption }: PageTitleProps) => {
  return (
    <div className="p-4 bg-gradient-to-br from-cyan-400 to-blue-600 flex justify-between">
      <h1 className="text-white text-xl font-medium">{title}</h1>
      {href!! && (
        <Link
          className="text-white hover:text-cyan-200 transition-colors"
          href={href}
        >
          {linkCaption}
        </Link>
      )}
    </div>
  );
};

export default PageTitle;
