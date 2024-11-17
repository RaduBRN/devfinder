import IconCompany from "../icons/IconCompany";
import IconLink from "../icons/IconLink";
import IconLocation from "../icons/IconLocation";
import IconTwitter from "../icons/IconTwitter";

import image from "../assets/583231.png";

function Content({ data }) {
  const formattedJoinDate = () => {
    try {
      return new Date(data.created_at).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "1 Jan 2015";
    }
  };

  return (
    <div className="w-full bg-pureWhite dark:bg-midnightBlue shadow-sm rounded-xl flex flex-col lg:flex-row px-7 md:px-10 py-7 md:py-12 gap-9">
      <div className="flex lg:block gap-4 md:gap-10 min-w-fit items-center">
        <img
          src={data.avatar_url || image}
          alt="Placeholder Image"
          className="rounded-full w-[70px] h-[70px] md:w-[117px] md:h-[117px]"
        />
        <div className="flex flex-col gap-2 md:gap-1 lg:hidden">
          <h1
            className={`text-base dark:text-pureWhite md:text-[26px] md:leading-[38px] leading-none ${
              data.name ? "" : "text-slateBlue opacity-50 dark:text-pureWhite"
            } `}
          >
            {data.name || "Not Available"}
          </h1>
          <h3 className="text-skyBlue md:text-[16px] md:leading-6 text-[13px] leading-none mb-2 md:mb-0">
            {`@${data.login}` || "N/A"}
          </h3>
          <p className="text-darkGrey dark:text-pureWhite md:text-[15px] md:leading-[25px] text-[13px] leading-none">{`Joined ${formattedJoinDate()}`}</p>
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <div className="hidden lg:flex flex-col gap-1">
          <div className="flex dark:text-pureWhite justify-between items-center">
            <h1
              className={`${
                data.name ? "" : "opacity-50 text-slateBlue dark:text-pureWhite"
              }`}
            >
              {data.name || "Not Available"}
            </h1>
            <p className="text-darkGrey dark:text-pureWhite">{`Joined ${formattedJoinDate()}`}</p>
          </div>
          <h3 className="text-skyBlue">{`@${data.login}` || "N/A"}</h3>
        </div>
        <p
          className={`text-slateBlue dark:text-pureWhite text-[13px] md:text-[15px] ${
            data.bio ? "" : "opacity-75"
          }`}
        >
          {data.bio || "This profile has no bio. "}
        </p>
        <div className="grid grid-cols-3 px-5 md:px-10 bg-lightBlue dark:bg-deepNavy dark:text-pureWhite rounded-lg py-3 ">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-slateBlue dark:text-pureWhite text-[11px] md:text-[13px]">
              Repos
            </h4>
            <h2 className="text-[16px] md:text-[22px]">
              {Number(data.public_repos)}
            </h2>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-slateBlue dark:text-pureWhite text-[11px] md:text-[13px]">
              Followers
            </h4>
            <h2 className="text-[16px] md:text-[22px]">
              {Number(data.followers)}
            </h2>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-slateBlue dark:text-pureWhite text-[11px] md:text-[13px]">
              Following
            </h4>
            <h2 className="text-[16px] md:text-[22px]">
              {Number(data.following)}
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-2 md:gap-10 dark:text-pureWhite">
          <div className="flex flex-col gap-2 md:gap-4">
            <div
              className={`flex gap-3 items-center ${
                data.location ? "" : "opacity-50"
              }`}
            >
              <IconLocation />
              <p>{data.location || "Not Available"}</p>
            </div>
            <div
              className={`flex gap-3 items-center ${
                data.blog ? "" : "opacity-50"
              }`}
            >
              <IconLink />
              {data.blog ? (
                <a
                  href={data.blog}
                  target="_blank"
                  className="hover:underline truncate max-w-[175px]"
                >
                  {data.blog || "Not Available"}
                </a>
              ) : (
                <p>Not Available</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <div
              className={`flex gap-3 items-center ${
                data.twitter_username ? "" : "opacity-50"
              }`}
            >
              <IconTwitter />
              <p>{data.twitter_username || "Not Available"}</p>
            </div>
            <div
              className={`flex gap-3 items-center ${
                data.company ? "" : "opacity-50"
              }`}
            >
              <IconCompany />
              <p>{data.company || "Not Available"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
