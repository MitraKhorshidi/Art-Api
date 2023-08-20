"use client";
import CollectionList from "@/components/Home/CollectionList";
import Pagination from "@/components/Home/Pagination";
import { ArtObject } from "@/data/types";
import { getArtcraftsList } from "@/data/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [artCraftsList, setArtCraftsList] = useState([] as ArtObject[]);
  const [pageNumber, setPageNumber] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  async function loadData() {
    const result = await getArtcraftsList(pageNumber);
    setArtCraftsList(result.objects);
    setLastPage(result.pageCount);
  }

  useEffect(() => {
    loadData();
  }, [pageNumber]);

  return (
    <main className="flex flex-col items-centr text-white">
      {artCraftsList && (
        <CollectionList list={artCraftsList} title={"All artworks"} />
      )}
      <Pagination
        currentPage={pageNumber}
        onSelect={setPageNumber}
        lastPage={lastPage}
      />
    </main>
  );
}
