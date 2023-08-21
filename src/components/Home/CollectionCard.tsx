import { ArtImage } from "@/data/types";
import Link from "next/link";

const CollectionCard = ({
  objectNumber,
  title,
  principalOrFirstMaker,
  webImage,
}: {
  objectNumber: string;
  title: string;
  principalOrFirstMaker: string;
  webImage: ArtImage;
}) => {
  return (
    <Link
      href={`/single/${objectNumber}`}
      className="relative bg-cover flex w-full aspect-[450/364] rounded-[8px] shadow-[0px_16px_16px_4px_rgba(0, 0, 0, 0.01)]"
      style={{
        backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.72)),url(${webImage?.url})`,
      }}
    >
      <p className="absolute top-0 right-0 bg-[#1D1D1D80] rounded-tr-lg rounded-bl-lg py-1 px-2 gap-[10px] text-[#0FEFFD] leading-4 text-sm">
        {principalOrFirstMaker}
      </p>
        <h3 className="absolute bottom-[10%] left-[7%] w-[75%]  text-[32px] leading-[40px] text-secondary">
          {title}
        </h3>
    </Link>
  );
};

export default CollectionCard;
