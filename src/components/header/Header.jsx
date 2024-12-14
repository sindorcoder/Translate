import logo from "../../../public/logo.jpg"
const Header = () => {
  return (
    <header className="bg-[#22333b] py-4">
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              loading="lazy"
              width={40}
              height={40}
              className="w-[40px] rounded-full"
            />
            <h1 className="text-[32px] tracking-normal leading-9 font-bold capitalize text-white">
              Translate
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
