import { ArtObject } from "@/data/types";
import CollectionCard from "./CollectionCard";

const CollectionList = ({
  list,
}: {
  list: ArtObject[],
}) => {

  return (
    <div className="flex flex-col  flex-1">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
