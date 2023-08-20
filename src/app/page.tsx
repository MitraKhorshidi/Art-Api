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



export function generateLink(searchParams:FilterProps){
  const params = new URLSearchParams();
  if(searchParams.page)params.set('page', String(searchParams.page))
  if(searchParams.query)params.set('query', String(searchParams.query))
  return `/?${params.toString()}`
}