import Link from "next/link";
import { Detail } from "./Detail";
import { getArtcraftsDetail } from "@/data/api";

const Single = async ({ params }: { params: { id: string }}) => {
  const artcraftDetails = await getArtcraftsDetail(params.id);

  return (
    <div>
      <Link href="/">Back to the List</Link>
      {artcraftDetails && <Detail details={artcraftDetails} />}
    </div>
  );
};

export default Single;
