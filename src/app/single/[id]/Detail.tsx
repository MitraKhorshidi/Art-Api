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
    <div className="flex flex-col justify-center">
      {webImage && <div
        className="w-full rounded-lg mt-14 bg-cover aspect-[1408/850]"
        style={{ backgroundImage: `url(${webImage.url})` }}
      >
        <h2>{longTitle}</h2>
      </div>}
      <div className="flex flex-col justify-start">
        {longTitle && (
          <>
            <p>Title</p>
            <h3>{longTitle}</h3>
            <hr />
          </>
        )}

        {principalMaker && (
          <>
            <p>Artist</p>
            <h3>{principalMaker}</h3>
            <hr />
          </>
        )}

        {objectTypes && (
          <>
            <p>Object Type</p>
            <h3>{objectTypes}</h3>
            <hr />
          </>
        )}

        {dimensions && (
          <>
            <p>Measurments</p>
            <h3>
              {dimensions.map((obj) => (
                <span>
                  {" "}
                  {obj.type} {obj.value} {obj.unit}
                </span>
              ))}
            </h3>
            <hr />
          </>
        )}

        {description && (
          <>
            <p>Description</p>
            <h3>{description}</h3>
          </>
        )}
      </div>
    </div>
  );
};
