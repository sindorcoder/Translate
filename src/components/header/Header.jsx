import { BiHistory } from "react-icons/bi"; 
const Header = () => {
  return (
    <header className="bg-[#22333b] py-4">
      <div className="max-w-[1240px] mx-auto">
       <div className="flex items-center justify-between">
       <div>
          <h1 className="text-[32px] tracking-normal leading-9 font-bold capitalize text-white">Translate</h1>
        </div>
        <div>
          <span className="text-[24px] cursor-pointer flex items-center gap-2 font-semibold text-white">
              <BiHistory size={30} />
              History
          </span>
        </div>
       </div>
      </div>
    </header>
  );
};
export default Header;
