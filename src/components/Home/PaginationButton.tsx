import { FilterProps } from "@/data/types";
import Link from "next/link";
import { generateLink } from "@/utils/links";

const PaginationButton = ({
  searchParams,
  children,
  isActive,
  className,
}: {
  searchParams?: FilterProps;
  children?: string | number | JSX.Element | JSX.Element[];
  isActive?: boolean;
  className?: string;
}) => {
  let classes = !isActive
    ? " flex items-center justify-center bg-bg-primary text-secondary text-center text-[18px] leading-6 bg-parimary rounded-full   w-[56px] h-[56px]  gap-[10px] border border-1 border-[#333333] shadow-[0px_16px_16px_4px_rgba(0, 0, 0, 0.01)] "
    : " flex items-center justify-center bg-bg-primary text-secondary text-center text-[18px] leading-6 bg-parimary rounded-full  w-[56px] h-[56px]  gap-[10px] border border-1 border-btn-primary shadow-[0px_16px_16px_4px_rgba(0, 0, 0, 0.01)] ";

  if (className) classes = classes + className;
  if (!searchParams) {
    return <div className={classes}>{children}</div>;
  }

  return (
    <Link href={generateLink(searchParams)} className={classes}>
      {children}
    </Link>
  );
};

export default PaginationButton;
