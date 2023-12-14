import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col w-full justify-center items-center pt-6 pb-2">
      <div className="w-full flex justify-center items-center text-green-200">
        <a
          href="https://github.com/hackelite01/github-readme-maker"
          className="opacity-75 hover:opacity-95 mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"</>"} by&nbsp;💛&nbsp;Mayank Rajput
        </a>
      </div>
    </div>
  );
}
