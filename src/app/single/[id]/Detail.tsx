import { ArtObjectDetails } from "@/data/types";

export const Detail = ({ details }: { details: ArtObjectDetails }) => {
  const { longTitle, principalMaker, description, objectTypes, dimensions } =
    details;

  return (
    <div className="flex flex-col justify-center">
      <div>
        <img />
        <h2>{longTitle}</h2>
      </div>
      <div className="flex flex-col justify-start">
        <p>Title</p>
        <h3>{longTitle}</h3>
        <hr />

        <p>Artist</p>
        <h3>{principalMaker}</h3>
        <hr />

        <p>Object Type</p>
        <h3>{objectTypes}</h3>
        <hr />

        <p>Measurments</p>
        <h3>
          {dimensions.map((obj) => (
            <span>
              {" "}{obj.type} {obj.value} {obj.unit}
            </span>
          ))}
        </h3>
        <hr />

        <p>Description</p>
        <h3>{description}</h3>
      </div>
    </div>
  );
};
