import Link from "next/link";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { FilterProps } from "@/data/types";

const NavBar = ({ searchParams }: { searchParams?: FilterProps }) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row justify-between sm:gap-0 w-full p-8 bg-[#1F1F1F66] outline outline-[#CA35F7] outline-1 rounded-[53px] drop-shadow-[0_40px_40px_rgba(0,0,0,0.03)]">
      <Link
        href="/"
        className="flex flex-row items-center gap-4 w-full leading-10 text-[32px] text-[#AEAEB2]"
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
      <SearchBar searchParams={searchParams} />
    </div>
  );
};

export default NavBar;
