import { useRecoilState } from "recoil";
import { themeStateAtom } from "../atoms/themeState";
import IconMoon from "../icons/IconMoon";
import IconSun from "../icons/IconSun";

function Header() {
  const [themeState, setThemeState] = useRecoilState(themeStateAtom);

  function toggleThemeChange() {
    themeState === "light" ? setThemeState("dark") : setThemeState("light");
  }

  return (
    <header className="w-full flex justify-between items-center ">
      <h1 className="text-[#222731] dark:text-pureWhite">devfinder</h1>
      <button
        className="flex gap-2 items-center"
        onClick={toggleThemeChange}
        aria-label="Theme toggle"
      >
        <span className="uppercase font-bold text-[13px] tracking-[2.5px] text-darkGrey dark:text-pureWhite">
          {themeState === "light" ? "dark" : "light"}
        </span>
        {themeState === "light" ? <IconMoon /> : <IconSun />}
      </button>
    </header>
  );
}

export default Header;
