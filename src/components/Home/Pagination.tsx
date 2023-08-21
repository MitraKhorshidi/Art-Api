import { FilterProps } from "@/data/types";
import PaginationButton from "./PaginationButton";
import Image from "next/image";

const Pagination = ({
  lastPage,
  searchParams,
}: {
  lastPage: number;
  searchParams: FilterProps;
}) => {

  const currentPage = Number(searchParams.page || 1);
  if (currentPage === 1) {
    return (
      <div className="flex flex-row justify-center sm:justify-end p-[10px] gap-4">
        <PaginationButton >{<Image src='/chevronLeft.svg' alt="chevron-left" width={15} height={15}/>}</PaginationButton>
        <PaginationButton isActive={true} >{currentPage}</PaginationButton>
        <PaginationButton searchParams={{...searchParams,page:2}} >2</PaginationButton>
        <PaginationButton className={'hidden mini:inline'}>...</PaginationButton>
        <PaginationButton searchParams={{...searchParams,page:lastPage}} >{lastPage}</PaginationButton>
        <PaginationButton searchParams={{...searchParams,page:currentPage+1}}>{<Image src="/chevronRight.svg" alt="chevron-right" width={15} height={15}/>}</PaginationButton>
      </div>
    );
  } 

  if (currentPage === lastPage) {
    return (
      <div className="flex flex-row justify-center sm:justify-end p-[10px] gap-4 ">
        <PaginationButton  searchParams={{...searchParams,page:currentPage-1}}>{<Image src='/chevronLeft.svg' alt="chevron-left" width={15} height={15}/>}</PaginationButton>
        <PaginationButton searchParams={{...searchParams,page:1}}>1</PaginationButton>
        <PaginationButton className={'hidden mini:inline'}>...</PaginationButton>
        <PaginationButton >{currentPage}</PaginationButton>
        <PaginationButton >{<Image src="/chevronRight.svg" alt="chevron-right" width={15} height={15}/>}</PaginationButton>
      </div>
    );
  }

  return(
    <div className="flex flex-row justify-center sm:justify-end p-[10px] gap-4 ">
        <PaginationButton searchParams={{...searchParams,page:currentPage-1}} >{<Image src='/chevronLeft.svg' alt="chevron-left" width={15} height={15}/>}</PaginationButton>
        <PaginationButton searchParams={{...searchParams,page:1}}>1</PaginationButton>
        <PaginationButton className={'hidden mini:inline'}>...</PaginationButton>
        <PaginationButton isActive={true} >{currentPage}</PaginationButton>
        <PaginationButton className={'hidden mini:inline'}>...</PaginationButton> 
        <PaginationButton searchParams={{...searchParams,page:lastPage}} >{lastPage}</PaginationButton>
        <PaginationButton searchParams={{...searchParams,page:currentPage+1}}>{<Image src="/chevronRight.svg" alt="chevron-right" width={15} height={15}/>}</PaginationButton>
      </div>
  );


};

export default Pagination;
