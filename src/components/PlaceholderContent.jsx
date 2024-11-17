import IconCompany from "../icons/IconCompany";
import IconLink from "../icons/IconLink";
import IconLocation from "../icons/IconLocation";
import IconTwitter from "../icons/IconTwitter";

import avatarImg from "../assets/583231.png";

function PlaceholderContent() {
  return (
    <div className="w-full bg-pureWhite dark:bg-midnightBlue shadow-sm rounded-xl flex flex-col lg:flex-row px-7 md:px-10 py-7 md:py-12 gap-9">
      <div className="flex lg:block gap-4 md:gap-10 min-w-fit items-center">
        <img
          src={avatarImg}
          alt="Placeholder Image"
          className="rounded-full w-[70px] h-[70px] md:w-[117px] md:h-[117px]"
        />
        <div className="flex flex-col gap-2 md:gap-1 lg:hidden">
          <h1 className="text-base md:text-[26px] md:leading-[38px] leading-none dark:text-pureWhite">
            The Octocat
          </h1>
          <h3 className="text-skyBlue md:text-[16px] md:leading-6 text-[13px] leading-none mb-2 md:mb-0">
            @octocat
          </h3>
          <p className="text-darkGrey md:text-[15px] md:leading-[25px] text-[13px] leading-none">
            Joined 1 Jan 2015
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <div className="hidden lg:flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <h1 className="text-[22px] dark:text-pureWhite">The Octocat</h1>
            <p className="text-darkGrey dark:text-pureWhite text-[13px] md:text-[15px]">
              Joined 1 Jan 2015
            </p>
          </div>
          <h3 className="text-skyBlue">@octocat</h3>
        </div>
        <p className="text-slateBlue text-[13px] md:text-[15px] dark:text-pureWhite">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <div className="grid grid-cols-3 px-5 md:px-10 bg-lightBlue dark:bg-deepNavy dark:text-pureWhite rounded-lg py-3 ">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-slateBlue dark:text-pureWhite text-[11px] md:text-[13px]">
              Repos
            </h4>
            <h2 className="text-[16px] md:text-[22px]">8</h2>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-slateBlue dark:text-pureWhite text-[11px] md:text-[13px]">
              Followers
            </h4>
            <h2 className="text-[16px] md:text-[22px]">3938</h2>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-slateBlue dark:text-pureWhite text-[11px] md:text-[13px]">
              Following
            </h4>
            <h2 className="text-[16px] md:text-[22px]">9</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-2 md:gap-10 dark:text-pureWhite">
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex gap-3 items-center">
              <IconLocation />
              <p>San Francisco</p>
            </div>
            <div className="flex gap-3 items-center">
              <IconLink />
              <a
                href="https://github.blog"
                target="_blank"
                className="hover:underline truncate max-w-[175px]"
              >
                https://github.blog
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex gap-3 items-center opacity-50">
              <IconTwitter />
              <p>Not Available</p>
            </div>
            <div className="flex gap-3 items-center">
              <IconCompany />
              <p>@github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceholderContent;
