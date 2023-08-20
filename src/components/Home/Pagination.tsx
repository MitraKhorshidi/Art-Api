import PaginationButton from "./PaginationButton";

const Pagination = ({
  lastPage,
  currentPage,
  onSelect,
}: {
  lastPage: number;
  currentPage: number;
  onSelect: (pageNumber:number)=>void;
}) => {
  if (currentPage === 1) {
    return (
      <div className="flex flex-row justify-end gap-3 my-5">
        <PaginationButton content={"<"}/>
        <PaginationButton content={currentPage} isActive={true} />
        <PaginationButton content={"..."}  />
        <PaginationButton content={lastPage} onClick={()=>onSelect(lastPage)}/>
        <PaginationButton content={">"} onClick={()=>onSelect(currentPage+1)} />
      </div>
    );
  } 

  if (currentPage === lastPage) {
    return (
      <div className="flex flex-row justify-end gap-3 ">
        <PaginationButton content={"<"} onClick={()=>onSelect(currentPage-1)} />
        <PaginationButton content={1} onClick={()=>onSelect(1)} />
        <PaginationButton content={"..."} />
        <PaginationButton content={currentPage}  />
        <PaginationButton content={">"}/>
      </div>
    );
  }

  return(
    <div className="flex flex-row justify-end gap-3 ">
        <PaginationButton content={"<"} onClick={()=>onSelect(currentPage-1)} />
        <PaginationButton content={1} onClick={()=>onSelect(1)} />
        <PaginationButton content={"..."}  />
        <PaginationButton content={currentPage} isActive={true} />
        <PaginationButton content={"..."}  />
        <PaginationButton content={lastPage} onClick={()=>onSelect(lastPage)} />
        <PaginationButton content={">"} onClick={()=>onSelect(currentPage+1)} />
      </div>
  );


};

export default Pagination;
