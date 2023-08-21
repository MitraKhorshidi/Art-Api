"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { generateLink } from "@/utils/links";
import { FilterProps } from "@/data/types";

const SearchBar = ({ searchParams }: { searchParams?: FilterProps }) => {
  const [searchInput, setSearchInput] = useState(searchParams?.query || "");
  const router = useRouter();

  function searchHandler(e: FormEvent) {
    e.preventDefault();
    const link = generateLink({ page: 1, query: searchInput });
    router.push(link);
  }

  return (
    <form
      onSubmit={searchHandler}
      className="w-full sm:w-[626px] flex flex-col sm:flex-row items-center gap-4 "
    >
      <div className="w-full border border-1 border-[#FFFFFF26] rounded-[80px]  ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Please type in your search"
          className="w-full bg-[#1F1F1F66] text-[24px] leading-8 text-[#FFFFFF] placeholder-opacity-20 px-1 py-1 overflow-hidden"
        />
      </div>

      <button
        type="submit"
        className="w-[150px] h-[48px] bg-btn-primary overflow-hidden rounded-[40px] shadow-[0px_16px_16px_4px_rgba(0, 0, 0, 0.01)"
      >
        <h4 className="w-full text-[18px] leading-6 text-center text-primary shadow-[0px_40px_40px_8px_rgba(0, 0, 0, 0.01)]">
          Search
        </h4>
      </button>
    </form>
  );
};

export default SearchBar;
