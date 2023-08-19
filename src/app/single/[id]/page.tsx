import Link from "next/link";
import { Detail } from "./Detail";
import { getArtcraftsDetail } from "@/data/api";

const Single = async () => {
  const artcraftDetails = await getArtcraftsDetail("SK-C-5");

  return (
    <div>
      <Link href="/">Back to the List</Link>
      {artcraftDetails && <Detail details={artcraftDetails} />}
    </div>
  );
};

export default Single;
