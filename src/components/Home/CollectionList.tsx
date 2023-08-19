import { ArtObject } from "@/data/types";
import CollectionCard from "./CollectionCard";

const CollectionList = ({
  list,
  title,
}: {
  list: ArtObject[];
  title: string;
}) => {
  return (
    <div className="flex flex-col">
      <h1>{title}</h1>
      <div className="w-full grid grid-cols-3 gap-10">
        {list.map((item) => (
          <CollectionCard
            key={item.id}
            objectNumber={item.objectNumber}
            title={item.title}
            principalOrFirstMaker={item.principalOrFirstMaker}
            webImage={item.webImage}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionList;
