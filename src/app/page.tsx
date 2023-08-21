import { HomeProps ,FilterProps } from "@/data/types";
import { getArtcraftsList } from "@/data/api";
import CollectionList from "@/components/Home/CollectionList";
import Pagination from "@/components/Home/Pagination";

export default async function Home({ searchParams }: HomeProps) {
  const { objects: artCraftsList, pageCount: lastPage } =
    await getArtcraftsList(searchParams);
  return (
    <main className="flex flex-col items-centr justify-center gap-8 aspect-[1408/1264]">
      {artCraftsList && (
        <CollectionList list={artCraftsList} title={"All artworks"} />
      )}
      <Pagination searchParams={searchParams} lastPage={lastPage} />
    </main>
  );
}



