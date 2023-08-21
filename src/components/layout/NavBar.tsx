import Link from "next/link";
import SearchBar from "./SearchBar";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between w-full aspect-[1408/112] p-8 bg-[#1F1F1F66] outline outline-[#CA35F7] outline-1 rounded-[53px] drop-shadow-[0_40px_40px_rgba(0,0,0,0.03)]">
      <Link
        href="/"
        className="flex flex-row items-center gap-4 w-full font-medium leading-10 text-[32px] text-[#AEAEB2]"
      >
        <Image
          src="/logo.svg"
          alt="logo"
          width={53.33}
          height={48}
          className="aspect-[53.33/48]"
        />
        <p>Art Api</p>
      </Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;
