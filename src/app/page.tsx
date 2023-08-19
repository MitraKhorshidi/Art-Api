import CollectionList from "@/components/Home/CollectionList";
import Pagination from "@/components/Home/Pagination";
import { getArtcraftList } from "@/data/api";

export default async function Home() {

  const artCraftsList = await getArtcraftList(1);


  return (
    <main className="flex min-h-screen flex-col items-centr text-white">
      <CollectionList list={artCraftsList} title={'All artworks'}/>
      <Pagination/>
    </main>
  );
}
