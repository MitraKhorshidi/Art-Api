import { HomeProps ,FilterProps } from "@/data/types";
import { getArtcraftsList } from "@/data/api";
import CollectionList from "@/components/Home/CollectionList";
import Pagination from "@/components/Home/Pagination";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export default async function Home({ searchParams }: HomeProps) {
  const { objects: artCraftsList, pageCount: lastPage ,totlaCount:totlaCount} =
    await getArtcraftsList(searchParams);
  return (<>
    <NavBar  searchParams={searchParams}/>
    <main className="flex flex-col items-centr justify-center gap-8 flex-1">
      {artCraftsList && (
        <CollectionList list={artCraftsList} mainTitle={searchParams.query || "All artworks"  } searchResultTitle={searchParams.query ? `Found ${totlaCount} results for :` : undefined}/>
      )}
      <Pagination searchParams={searchParams} lastPage={lastPage} />
    </main>
    <Footer />
  </>);
}



