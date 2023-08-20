import { HomeProps ,FilterProps } from "@/data/types";
import { getArtcraftsList } from "@/data/api";
import CollectionList from "@/components/Home/CollectionList";
import Pagination from "@/components/Home/Pagination";

export default async function Home({ searchParams }: HomeProps) {
  const { objects: artCraftsList, pageCount: lastPage } =
    await getArtcraftsList(searchParams);
  return (
    <main className="flex flex-col items-centr text-white">
      {artCraftsList && (
        <CollectionList list={artCraftsList} title={"All artworks"} />
      )}
      <Pagination searchParams={searchParams} lastPage={lastPage} />
    </main>
  );
}



