import Button from "../Button"

const SearchBar = () => {
  return (
    <div className="flex flex-row justify-center gap-4">
        <input className="bg-[#1F1F1F66] w-[460] h-12 text-[#FFFFFF26] border border-1 border-[#FFFFFF26] rounded-[80px] py-2 px-6 gap-6"/>
        <Button/>
    </div>
  )
}

export default SearchBar