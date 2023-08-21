import { HomeProps, FilterProps } from "@/data/types";
import { getArtcraftsList } from "@/data/api";
import CollectionList from "@/components/Home/CollectionList";
import Pagination from "@/components/Home/Pagination";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export default async function Home({ searchParams }: HomeProps) {
  const {
    objects: artCraftsList,
    pageCount: lastPage,
    totlaCount: totlaCount,
  } = await getArtcraftsList(searchParams);

  const isInSearch = searchParams && searchParams.query;

  return (
    <>
      <NavBar searchParams={searchParams} />

      <main className="flex flex-col items-centr justify-center gap-8 flex-1">
          <h1 className="text-[56px] leading-[64px]">
            {!isInSearch ? (
              <span className="text-secondary">All artworks</span>
            ) : (
              <>
                <span className="text-secondary">{`Found ${totlaCount} results for:`}</span>
                <span className="text-primary"> {`${searchParams.query}`}</span>
              </>
            )}
          </h1>

        <CollectionList  list={artCraftsList} />

        <Pagination searchParams={searchParams} lastPage={lastPage} />
      </main>

      <Footer />
    </>
  );
}
