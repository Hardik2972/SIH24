import { useState } from "react";
import { CartSVG, LocationSVG } from "./svg";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onClickHandler = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      {/* Mobile Header */}
      <header className="p-4 flex justify-between items-center md:hidden">
        <div className="text-2xl font-bold">9:27</div>
      </header>

      {/* Desktop Header */}
      <header className=" hidden md:flex justify-center border-b bg-white">
        <div className=" flex justify-between items-center p-4 w-4/5 ">
          <div className="flex gap-10">
            <div>LOGO</div>
            {/* <div className="flex items-center gap-7"> */}
            <span className="font-bold">☰ Menu</span>
          </div>

          {/* searchbar */}
          <div className=" flex border-[#C4C4C4] border-solid border-2 rounded-lg box-border min-w-[40vw] max-w-[600px] relative">
            <select className="border-none rounded-l-lg text-xs font-bold focus:">
              <option>All Categories</option>
            </select>

            <input
              type="text"
              placeholder="Search Museum"
              className="border-l rounded-r-lg p-1 pl-8 flex-grow"
            />
            <button className=" absolute right-1 top-1 border-none ">🔍</button>
            {/* </div> */}
          </div>
          {/* </div> */}
          <div className="flex items-center space-x-4 divide-x-2">
            <div className="flex items-center">
              <div className=" w-10 h-10 text-[#DA8D19] relative">
                <CartSVG />{" "}
                <div
                  className="text-white bg-[#da8d19] rounded-full p-0 text-center absolute top-0 right-0 px-1 text-xs font-bold
                "
                >
                  1
                </div>
              </div>
              <div className="pl-2 pt-0">
                <div className="text-sm text-left text-[#6f6f6f]">Cart</div>
                <div className="text-sm text-left text-black">₹7714</div>
              </div>
            </div>
            <div className="pl-1 flex items-center">
              <span>👤 Account</span>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar (Mobile) */}
      <div className="p-4 md:hidden">
        <div className="flex gap-4 w-full">
          <div className="relative rounded-lg border-2 border-solid border-[#c4c4c4] flex box-border flex-grow bg-white pr-3 mb-3">
            <span className="bg-white p-2 rounded-l-lg">🔍</span>
            <input
              type="text"
              placeholder="Search Mesuem"
              className="border-none outline-none focus:outline-none rounded-lg flex-grow bg-white"
            />
            <button onClick={onClickHandler}>^</button>
          </div>
          <div className="font-bold text-black text-3xl">☰</div>
        </div>
        <div className={`${isVisible ? "flex" : "hidden"} `}>
          <LocationSVG />
          <div className="flex-grow border-b-2 border-dashed border-black" />
          <div className="rounded-lg border-[#E5E5E5] border-[1px] border-solid p-0 ml-2">
            <button className="border-none outline-none text-sm py-2 px-3 m-0">
              Rating
            </button>
            <button className="text-sm py-2 px-3 m-0 rounded-lg border-[#E5E5E5] border-[1px] border-solid shadow-sm">
              Popular
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
