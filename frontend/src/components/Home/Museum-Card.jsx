const MuseumCard = () => {
  return (
    <div className="bg-white shadow rounded-lg  sm:mb-4 mx-2 w-[400px] max-sm:w-full max-sm:m-4">
      {/* <img
        src="/api/placeholder/300/150"
        alt="Museum Of Illusions"
        className="w-full rounded-t-lg mb-2"
      /> */}
      <div className="w-full bg-cover bg-no-repeat bg-[url('https://www.india.com/wp-content/uploads/2022/08/Collage-Maker-30-Aug-2022-01.22-PM.jpg')] bg-center h-[200px] mb-3 rounded-t-lg" />

      {/* //!content */}
      <div className="flex justify-between">
        <div className="w-3/5 ml-3">
          <h3 className="font-bold text-xl leading-none">
            Museum Of Illusions
          </h3>
          <p className="text-sm text-gray-500 mb-2">New Delhi</p>
          <p className="text-sm text-gray-500">Good for all age group</p>
        </div>

        <div className="flex flex-col items-end  px-3 pb-3">
          <div className="bg-[#2B7D0F] w-fit px-2 h-fit text-white rounded">
            <span className="text-sm">4.3</span>
            <span className=" ml-1">★</span>
          </div>
          <span className="text-xs text-gray-500 ml-2">300+ Reviews</span>
          <div className=" rounded border-[#E41515] border-[0.5px] border-solid  bg-[#ffa9a982] text-[#E41515] p-1 text-xs w-fit mt-2">
            Trending
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuseumCard;
