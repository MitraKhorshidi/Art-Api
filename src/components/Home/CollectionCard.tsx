import Link from "next/link";

const CollectionCard = ({
  objectNumber,
  title,
  principalOrFirstMaker,
}: {
  objectNumber: string;
  title: string;
  principalOrFirstMaker: string;
}) => {
  return (
    <Link href={`/single/${objectNumber}`} className="flex flex-col w-40 p-5 bg-white rounded-md text-black">
      <p>{principalOrFirstMaker}</p>
      <h3>{title}</h3>
    </Link>
  );
};

export default CollectionCard;
