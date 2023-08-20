"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { generateLink } from "@/utils/links";

const SearchBar = () => {
  // router.push(newPathName ,{scroll:false});
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  function searchHandler(){
    const link = generateLink({page:1 , query:searchInput});
    router.push(link);
  }
  return (
    <div className="flex flex-row justify-center gap-4">
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Please type in your search"
        className="bg-[#1F1F1F66]  text-[#FFFFFF26] border border-1 border-[#FFFFFF26] rounded-[80px] py-2 px-6 gap-6"
      />
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default SearchBar;
