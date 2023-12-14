import React, { useState } from "react";
import FilterButton from "../elements/buttons/FilterButton";
import NextButton from "../elements/buttons/NextButton";
import Pagination from "../elements/Pagination";
import { username } from "./HomePage";
import Socials from "./Socials";

export default function GitHubStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState("radical");
  const [border, setBorder] = useState(false);
  const [includeAll, setIncludeAll] = useState(false);
  const [includePrivate, setIncludePrivate] = useState(false);
  function onNext() {
    githubstats = `# 📊GitHub Stats :
![](${document.getElementById("stats").getAttribute("src")})<br/>
![](${document.getElementById("streak").getAttribute("src")})<br/>
![](${document.getElementById("langs").getAttribute("src")})
`;
    setIsVisible(true);
  }
  return (
    <>
      {isVisible ? (
        <Socials />
      ) : (
        <div className="flex flex-col items-center fade-on-appear">
          <p className="w-full text-center text-3xl my-10">
            Flex your GitHub Stats
          </p>
          {/* Options */}
          <div className="flex flex-wrap justify-center items-center">
            Theme:
            <select
              id="theme"
              onChange={() => setTheme(document.getElementById("theme").value)}
              className="bg-transparent py-1 px-2 outline-none"
            >
              {themes.map((item) => {
                return (
                  <option key={item} value={item} className="bg-zinc-900">
                    {item}
                  </option>
                );
              })}
            </select>
            <FilterButton title="Border" onClick={() => setBorder(!border)} />
            <FilterButton
              title="Lifetime Commits"
              onClick={() => setIncludeAll(!includeAll)}
            />
            <FilterButton
              title="Private Commits"
              onClick={() => setIncludePrivate(!includePrivate)}
            />
          </div>
          <p className="mt-4 text-green-300 opacity-90">
            please wait for images to load after changing any values
          </p>
          <div className="w-full md:w-8/12 justify-center flex flex-col flex-wrap md:my-4">
            <img
              className="m-2 select-none pointer-events-none"
              draggable="false"
              id="stats"
              src={`https://github-readme-stats.vercel.app/api?username=${username}&theme=${theme}&hide_border=${border}&include_all_commits=${includeAll}&count_private=${includePrivate}`}
              alt=""
            />
            <img
              className="m-2 select-none pointer-events-none"
              draggable="false"
              id="streak"
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=${border}`}
              alt=""
            />
            <img
              className="m-2 select-none pointer-events-none"
              draggable="false"
              id="langs"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=${theme}&hide_border=${border}&include_all_commits=${includeAll}&count_private=${includePrivate}&layout=compact`}
              alt=""
            />
          </div>
          <NextButton onClick={() => onNext()} />
          <Pagination val={2} />
        </div>
      )}
    </>
  );
}

const themes = [
  "default",
  "dark",
  "radical",
  "merko",
  "gruvbox",
  "tokyonight",
  "onedark",
  "synthwave",
  "highcontrast",
  "dracula",
  "prussian",
  "monokai",
  "vue",
  "vue-dark",
  "shades-of-purple",
  "nightowl",
  "buefy",
  "blue-green",
  "algolia",
  "great-gatsby",
  "darcula",
  "bear",
  "solarized-dark",
  "solarized-light",
  "chartreuse-dark",
  "nord",
  "gotham",
  "material-palenight",
  "graywhite",
  "vision-friendly-dark",
  "ayu-mirage",
  "midnight-purple",
  "calm",
  "flag-india",
  "omni",
  "react",
  "jolly",
  "maroongold",
  "yeblu",
  "blueberry",
  "slateorange",
  "kacho_ga",
  "city_light",
  "swift",
];

export var githubstats = ``;
