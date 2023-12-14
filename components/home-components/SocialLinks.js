import React from "react";
import AnchorWithSVG from "../elements/anchor/AnchorWithSVG";

export default function SocialLinks() {
  return (
    <div className="flex flex-col-reverse md:flex-row my-8 text-green-300">
      <div className="w-full md:w-6/12 flex flex-col justify-center md:items-end my-6 md:my-0">
        <p className="text-3xl sm:text-4xl md:text-5xl font-medium">
          Our Social Links
        </p>
        <p className="text-gray-500 md:pl-10 my-6 md:text-lg 2xl:text-xl md:text-right">
          We&apos;re available on Telegram, Youtube, Instagram and GitHub. You can connect
          me to get notification about any new feature we add, any cool
          product we create or get early access of some cool projects !
        </p>
        <div className="flex flex-row flex-wrap justify-center md:items-end">
          <AnchorWithSVG
            url="https://t.me/hackelite01"
            title="Telegram"
          />
          <AnchorWithSVG
            url="https://www.youtube.com/@HackEliteOfficial"
            title="Youtube"
          />
          <AnchorWithSVG
            url="https://www.instagram.com/hackelite01"
            title="Instagram"
          />
          <AnchorWithSVG
            url="https://github.com/hackelite01"
            title="GitHub"
          />
        </div>
      </div>
      <div className="w-full md:w-6/12 flex flex-col justify-center items-center">
        <img
          src="/socials.svg"
          alt=""
          className="w-10/12 aspect-square select-none pointer-events-none -rotate-3"
          draggable="false"
        />
      </div>
    </div>
  );
}
