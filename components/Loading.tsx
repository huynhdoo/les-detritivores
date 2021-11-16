import React from "react";
import { Icons } from "./Icons";

const Loading = ({ title }) => {
  return (
    <div className="flex space-x-1 justify-center">
      <Icons
        icons="spinner"
        className="animate-spin h-5 w-5 text-gray-900 dark:text-gray-100"
      />
      <span>{title}</span>
    </div>
  );
};
export default Loading;
