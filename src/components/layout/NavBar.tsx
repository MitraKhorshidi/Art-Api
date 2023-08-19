import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between w-full xl:w-1408 h-[112] p-8 bg-[#1F1F1F66] outline outline-[#CA35F7] outline-1 rounded-[53px] drop-shadow-[0_40px_40px_0px_rgba(0,0,0,0.03)]">
      <div className="gap-4">
        <h3 className="font-medium leading-10 text-[32px] text-[#AEAEB2]">
          Art Api
        </h3>
      </div>
      <SearchBar />
    </div>
  );
};

export default NavBar;
