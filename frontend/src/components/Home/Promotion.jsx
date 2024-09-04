const Promotion = () => {
  return (
    <>
      {/* Promotions */}
      {/* mobile View */}
      <div className="hidden max-sm:flex gap-10">
        <div className="bg-red-500 text-white p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">UP TO 60% OFF</h2>
          <p>On First Time Use</p>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">billia discounts</h2>
          <p>now on your favourite Mesuem</p>
        </div>
      </div>

      {/* Desktop Only Promotions */}
      <div className="hidden sm:flex min-h-[70vh]  justify-center p-3 gap-3">
        <div className="w-[40%] min-w-80 flex flex-col justify-around items-center  gap-3">
          {/* hanumaan */}
          <div className=" w-11/12 min-h-1/2 bg-gradient-to-t from-[#269aed11] to-[#03a1f634] to-50% p-3 rounded-lg flex justify-evenly  flex-wrap items-center relative">
            <div className="bg-[#FCDF5B] w-fit px-2 h-6 text-[#6F6F6F] text-center absolute top-3 left-3">
              {" "}
              50% Discount
            </div>
            <div className="mt-7 w-[60%]">
              <h2 className="text-3xl font-bold mb-2 text-wrap ">
                National Museum
              </h2>
              <p className="text-base text-[#6f6f6f] text-wrap m-2">
                Available on Weekends
              </p>
              <div className="flex text-sm text-[#6f6f6f] gap-1 m-2">
                <p className="line-through">₹500</p>
                <p className="font-bold text-black text-base">₹250*</p>
              </div>
              <button className="bg-[#198ADA]  text-white px-4 py-1 rounded-full mt-2 ">
                Book Now
              </button>
            </div>
            <div className="bg-center h-full max-w-full min-w-[10vw]"
            style={{
              backgroundImage: `url('/hanumaan.png')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}>
              {/* <img
                src="/api/placeholder/150/150"
                alt="National Museum"
                className="ml-4"
              /> */}
            </div>
          </div>
          {/* same to same */}
          <div className="w-11/12 h-1/2 bg-gradient-to-r from-[rgba(255,0,0,0.85)]  to-[rgba(255,123,0,0.61)] p-4 rounded-lg flex items-center justify-evenly text-white">
            <div className="pl-5 flex-grow">
              <h2 className="text-xl font-bold mb-2">Upto</h2>
              <p>69% off</p>
              <p className="border-b-2 border-solid border-white  w-full " />
              <p className="">One Time</p>
              <p className="font-bold">Use</p>
            </div>
            <div className="bg-contain bg-no-repeat bg-[url('girl.svg')] bg-center w-10 h-full flex-grow"></div>
          </div>
        </div>
        {/* Dino ka kankaal */}
        <div className="w-[60%] bg-gradient-to-r from-[#C58321] to-[#A85F09] p-4 rounded-xl flex flex-col text-wrap ">
          <h2 className="text-4xl font-black mb-2 ml-5">
            Let's meet the most ancient being on our Planet
          </h2>
          <p className="text-base text-[rgb(200,200,200)] drop-shadow-sm text-wrap mb-8 mt-5 ml-5">
            Dinasaur Mesuem in New Delhi
          </p>
          <div className="flex flex-wrap flex-row-reverse max-md:flex-col w-full h-9/12 items-center justify-center flex-grow">
            <div className=" bg-contain bg-no-repeat bg-[url('/SkeleDino.png')] bg-center min-w-96 md:h-full flex-grow">
              {/* <div className="w-80 h-80 rounded-full bg-[#C58321] absolute top-5 right-1/3 z-[1]"></div>
              <div className="w-40 h-36 rounded-full bg-[#C58321] absolute bottom-20 left-1/3 z-[1]"></div> */}
              {/* <img
                src=" /SkeleDino.png"
                alt="Image"
                width="100%"
                className="z-[99]"
              /> */}
            </div>
            <div className="min-w-36 flex flex-col items-end">
              <div className="flex text-base text-[#6f6f6f] gap-1 m-2">
                <p className="">From</p> {/*line-through*/}
                <p className="font-bold text-black text-xl">₹250*</p>
              </div>
              <button className="bg-red-500 text-white px-4 py-1 rounded-full mt-2">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Promotion;
