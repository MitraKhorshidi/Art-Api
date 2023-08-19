import { ArtObject } from "@/data/ArtObject";
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
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {list.map((item) => (
          <CollectionCard
            key={item.id}
            objectNumber={item.objectNumber}
            title={item.title}
            principalOrFirstMaker={item.principalOrFirstMaker}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionList;
