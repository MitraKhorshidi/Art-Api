import { ArtObjectDetails } from "@/data/types";

export const Detail = ({ details }: { details: ArtObjectDetails }) => {
  const {
    longTitle,
    principalMaker,
    description,
    objectTypes,
    dimensions,
    webImage,
  } = details;

  return (
    <div className="flex flex-col justify-center gap-8">
      {webImage && (
        <div
          className="relative w-full rounded-lg bg-cover aspect-[1408/850]"
          style={{ backgroundImage: `url(${webImage.url})` }}
        >
          <h1 className="absolute left-[2.35%] bottom-[4%] w-[1043px] aspect-[1043/64] text-[56px] leading-[64px] text-primary shadow-[0px_4px_4px_0px_rgba(0, 0, 0, 0.06)]">
            {longTitle}
          </h1>
        </div>
      )}
      <div className="flex flex-col justify-start p-[10px] gap-[10px]">
        {longTitle && (
          <div className="gap-1 pt-2 pb-4 text-secondary border-b-[1px] border-b-secondary">
            <p className="text-base leading-6">Title</p>
            <h3 className="text-2xl text-primary leading-8 ">{longTitle}</h3>
          </div>
        )}

        {principalMaker && (
          <div className="gap-1 pt-2 pb-4 text-secondary border-b-[1px] border-b-secondary">
            <p className="text-base leading-6">Artist</p>
            <h3 className="text-2xl text-primary leading-8 ">{principalMaker}</h3>
          </div>
        )}

        {objectTypes && (
          <div className="gap-1 pt-2 pb-4 text-secondary border-b-[1px] border-b-secondary">
            <p className="text-base leading-6">Object Type</p>
            <h3 className="text-2xl text-primary leading-8 ">{objectTypes}</h3>
          </div>
        )}

        {dimensions.length > 0 && (
          <div className="gap-1 pt-2 pb-4 text-secondary border-b-[1px] border-b-secondary">
            <p className="text-base leading-6">Measurments</p>
            <h3 className="text-2xl text-primary leading-8 ">
              {dimensions.map((obj) => (
                <span key={obj.type}>
                  {" "}
                  {obj.type} {obj.value} {obj.unit}
                </span>
              ))}
            </h3>
          </div>
        )}

        {description && (
          <div className="gap-1 pt-2 pb-4 text-secondary border-b-[1px] border-b-secondary">
            <p className="text-base leading-6">Description</p>
            <h3 className="text-2xl text-primary leading-8 ">{description}</h3>
          </div>
        )}
      </div>
    </div>
  );
};
