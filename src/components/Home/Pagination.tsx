import { FilterProps } from "@/data/types";
import PaginationButton from "./PaginationButton";

const Pagination = ({
  lastPage,
  searchParams,
}: {
  lastPage: number;
  searchParams: FilterProps;
}) => {

  const currentPage = searchParams.page || 1;
  if (currentPage === 1) {
    return (
      <div className="flex flex-row justify-end gap-3 my-5">
        <PaginationButton  content={"<"} />
        <PaginationButton  content={currentPage} isActive={true} />
        <PaginationButton searchParams={{...searchParams,page:2}} content={2} />
        <PaginationButton  content={"..."}  />
        <PaginationButton searchParams={{...searchParams,page:lastPage}} content={lastPage} />
        <PaginationButton searchParams={{...searchParams,page:currentPage+1}} content={">"}  />
      </div>
    );
  } 

  if (currentPage === lastPage) {
    return (
      <div className="flex flex-row justify-end gap-3 ">
        <PaginationButton searchParams={{...searchParams,page:currentPage-1}} content={"<"} />
        <PaginationButton searchParams={{...searchParams,page:1}} content={1}  />
        <PaginationButton content={"..."} />
        <PaginationButton  content={currentPage}  />
        <PaginationButton  content={">"}/>
      </div>
    );
  }

  return(
    <div className="flex flex-row justify-end gap-3 ">
        <PaginationButton searchParams={{...searchParams,page:currentPage-1}} content={"<"}  />
        <PaginationButton searchParams={{...searchParams,page:1}} content={1} />
        <PaginationButton  content={"..."}  />
        <PaginationButton content={currentPage} isActive={true} />
        <PaginationButton  content={"..."}  />
        <PaginationButton searchParams={{...searchParams,page:lastPage}} content={lastPage}  />
        <PaginationButton searchParams={{...searchParams,page:currentPage+1}} content={">"}  />
      </div>
  );


};

export default Pagination;
