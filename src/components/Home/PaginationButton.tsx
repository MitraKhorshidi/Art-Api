import { FilterProps } from "@/data/types";
import Link from "next/link";
import { generateLink } from "@/app/page";

const PaginationButton = ({
  searchParams,
  content,
  isActive,
}: {
  searchParams?: FilterProps;
  content: string | number;
  isActive?: boolean;
}) => {
  const classes = !isActive
    ? "flex p-5 rounded-full border border-1 border-white"
    : "flex p-5 rounded-full border border-1 border-red-700";

  if (!searchParams) {
    return <div className={classes}>{content}</div>;
  }

  return (
    <Link href={generateLink(searchParams)} className={classes}>
      {content}
    </Link>
  );
};

export default PaginationButton;

