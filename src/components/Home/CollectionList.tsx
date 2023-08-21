import { ArtObject } from "@/data/types";
import CollectionCard from "./CollectionCard";

const CollectionList = ({
  list,
  mainTitle,
  searchResultTitle,
}: {
  list: ArtObject[],
  mainTitle: string,
  searchResultTitle? : string,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row text-[56px] leading-[64px] mb-8">
        <h1 className="text-secondary">{searchResultTitle}</h1>
        <h1 className={searchResultTitle ? 'text-primary' : 'text-secondary'}>{mainTitle}</h1>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-10">
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
