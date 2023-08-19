import { ArtImage } from "@/data/types";
import Link from "next/link";

const CollectionCard = ({
  objectNumber,
  title,
  principalOrFirstMaker,
  webImage,
}: {
  objectNumber: string,
  title: string,
  principalOrFirstMaker: string,
  webImage : ArtImage,
}) => {
  return (
    <Link href={`/single/${objectNumber}`} className="bg-cover flex flex-col aspect-[450/364] w-full p-5 bg-white rounded-md text-black" style={{backgroundImage:`url(${webImage.url})`}}>
      <p>{principalOrFirstMaker}</p>
      <h3>{title}</h3>
    </Link>
  );
};

export default CollectionCard;
