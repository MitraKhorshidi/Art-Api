import Link from "next/link";
import { Detail } from "./Detail";
import { getArtcraftsDetail } from "@/data/api";
import { FaChevronLeft } from "react-icons/fa";

const Single = async ({ params }: { params: { id: string }}) => {
  const artcraftDetails = await getArtcraftsDetail(params.id);

  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex flex-row items-center gap-2 text-btn-primary text-lg leading-6">
      <Link href='/' className="pl-3 text-base"><FaChevronLeft/></Link>
      <Link href="/">Back to the List</Link>

      </div>
      {artcraftDetails && <Detail details={artcraftDetails} />}
    </div>
  );
};

export default Single;
