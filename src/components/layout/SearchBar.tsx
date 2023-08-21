"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { generateLink } from "@/utils/links";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  function searchHandler() {
    const link = generateLink({ page: 1, query: searchInput });
    router.push(link);
  }
  return (
    <div className="flex flex-row items-center gap-4 ">
        <div className=" aspect-[460/48] border border-1 border-[#FFFFFF26] rounded-[80px]  "><input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Please type in your search"
          className=" bg-[#1F1F1F66] font-medium text-xl leading-8 text-[#FFFFFF33] gap-6 py-2 px-6 aspect-[412/32]"
        /></div>

      <button
        onClick={searchHandler}
        className=" aspect-[150/48] bg-btn-primary gap-[10px] rounded-[40px] p-4 shadow-[0px_16px_16px_4px_rgba(0, 0, 0, 0.01)"
      >
        <h4 className="font-medium text-[18px] leading-6 text-center text-primary shadow-[0px_40px_40px_8px_rgba(0, 0, 0, 0.01)]">
          Search
        </h4>
      </button>
    </div>
  );
};

export default SearchBar;
