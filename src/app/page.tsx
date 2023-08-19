import CollectionList from "@/components/Home/CollectionList";
import Pagination from "@/components/Home/Pagination";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-centr">
      <CollectionList/>
      <Pagination/>
    </main>
  );
}
