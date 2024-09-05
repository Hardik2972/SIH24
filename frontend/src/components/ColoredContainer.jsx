import { useState } from "react";

export function ColoredContainer({ inside }) {
  const [bgChange, setBgChange] = useState("bg-none");
  function OnClickHandler() {
    if (inside.seats > 0) {
      if (bgChange === "bg-none") setBgChange("bg-[#72cb5380]");
      else setBgChange("bg-none");
    }
  }
  
  if (typeof inside == "string")
    return (
      <>
        <div className=" rounded border-[#E41515] border-[0.5px] border-solid  bg-[#ffa9a982] text-[#E41515] p-1 text-[8px] w-fit">
          {inside}
        </div>
      </>
    );
  else {
    const available = " border-[#72CB53]  ";
    const seatFull = " border-[#E41515] bg-[#ffa9a982] cursor-default";

    return (
      <>
        <button
          onClick={OnClickHandler}
          className={`m-1 flex items-center rounded border-[1px] border-solid text-black p-1 w-[90%]  ${
            inside.seats > 0 ? available + bgChange : seatFull
          }`}
        >
          <div className="w-1/2 pl-2 text-base text-left">{inside.time} </div>
          <div className="w-1/5 text-center text-xs">
            {inside.seats} {inside.seats > 1 ? "Seats" : "Seat"}
          </div>
          <div className=" w-[30%] text-center text-base">₹ {inside.prize}</div>
        </button>
      </>
    );
  }
}