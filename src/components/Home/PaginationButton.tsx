const PaginationButton = ({
  content,
  onClick,
  isActive,
}: {
  content: string | number;
  onClick?: () => void;
  isActive?: boolean;
}) => {
  const classes = !isActive
    ? "flex p-5 rounded-full border border-1 border-white"
    : "flex p-5 rounded-full border border-1 border-red-700";

  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className={classes}
    >{content}</button>
  );
};

export default PaginationButton;
