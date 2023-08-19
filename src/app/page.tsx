"use client";
import CollectionList from "@/components/Home/CollectionList";
import Pagination from "@/components/Home/Pagination";
import { ArtObject } from "@/data/types";
import { getArtcraftsList } from "@/data/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [artCraftsList, setArtCraftsList] = useState([] as ArtObject[]);

  async function loadData() {
    const list = await getArtcraftsList(1);
    setArtCraftsList(list);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <main className="flex flex-col items-centr text-white">
      {artCraftsList && (
        <CollectionList list={artCraftsList} title={"All artworks"} />
      )}
      <Pagination />
    </main>
  );
}
