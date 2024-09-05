import himage1 from "./assets/himage1.jpg";
import himage2 from "./assets/himage2.jpg";
import himage3 from "./assets/himage3.jpg";
import himage4 from "./assets/himage4.jpg";
const Category = () => {
  return (
    <>
      {/* Visit What You Like */}
      <section className="hidden sm:block p-3">
        <h2 className="text-4xl font-black mb-3">Visit What you like</h2>

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <img
                  src="/api/placeholder/100/100"
                  alt="Dinosaur"
                  className="rounded-full mx-auto"
                />
                <p>Dinosaur</p>
              </div>
            ))}
          </div> */}
        <div className="flex max-[500px]:hidden min-h-[40vh] gap-5 max-md:flex-wrap">
          <div className="bg-[#C4C4C4] min-w-[32%]  p-3 rounded-xl flex flex-col relative hover:shadow-lg ">
            <div className="bg-white w-fit px-2 h-6 text-xl font-bold text-[#ff0000] text-center m-3">
              {" "}
              Indian History
            </div>
            <p className="text-white text-3xl text-wrap font-bold">
              Know about ancient <span className="bg-[#198ADA]">history</span>{" "}
              of India
            </p>
            <div className="bg-contain bg-no-repeat bg-[url('/hanumaan.png')] bg-center h-72 w-full box-border " />
            <div className="text-white w-fit px-2  text-5xl font-bold bg-[#ff0000] text-center  absolute right-0 bottom-5">
              {" "}
              From ₹250
            </div>
          </div>
          {/******  GRID  ******/}
          <div className="max-md:flex max-md:flex-wrap grid grid-flow-row grid-cols-3 grid-rows-2 min-w-[65%] gap-5 ">
            {/* <GridComponent color="#DBF6FF" /> */}

            <div className="bg-[#FCF8CC] flex-shirk h-1/2 min-h-60 max-w-[250px] flex flex-col items-center justify-center rounded-lg hover:shadow-md">
              <div
                className="bg-cover bg-no-repeat bg-center rounded-full w-40 h-40"
                style={{ backgroundImage:`url(${himage1})` }}
              ></div>
              <p>Hanuman</p>
            </div>


            <div className="bg-[#FCF8CC] flex-shirk h-1/2 min-h-60 max-w-[250px] flex flex-col items-center justify-center rounded-lg hover:shadow-md">
              <div
                className="bg-cover bg-no-repeat bg-center rounded-full w-40 h-40"
                style={{ backgroundImage: `url(${himage2})` }}
              ></div>
              <p>Hanuman</p>
            </div>

            <div className="bg-[#FCF8CC] flex-shirk h-1/2 min-h-60 max-w-[250px] flex flex-col items-center justify-center rounded-lg hover:shadow-md">
              <div
                className="bg-cover bg-no-repeat bg-center rounded-full w-40 h-40"
                style={{ backgroundImage: `url(${himage3})` }}
              ></div>
              <p>Hanuman</p>
            </div>

            <div className="bg-[#FCF8CC] flex-shirk h-1/2 min-h-60 max-w-[250px] flex flex-col items-center justify-center rounded-lg hover:shadow-md">
              <div
                className="bg-cover bg-no-repeat bg-center rounded-full w-40 h-40"
                style={{ backgroundImage: `url(${himage4})` }}
              ></div>
              <p>Hanuman</p>
            </div>

            {/* Indus Valley Civilisation */}
            <div className="col-span-2 flex-shirk bg-[#DDEBFF] h-1/2 min-h-60  flex items-center justify-between p-2 rounded-lg hover:shadow-md ">
              <div className="w-2/3 pl-6">
                <p className="text-lg">Indus Valley Civilisation</p>
                <p className="text-[#6f6f6f] text-sm text-wrap">
                  Lorem ipsum, dolor sit amet consectetur adipisicing.
                </p>
                <p className="bg-[#474748] px-4 font-bold text-white w-fit rounded-full text-center mt-6 ">
                  History
                </p>
              </div>
              <div className="bg-contain bg-no-repeat bg-[url('/hanumaan.png')] bg-center flex-grow h-full"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-4 flex flex-col items-center sm:hidden">
        <h2 className="text-4xl font-black mb-3">Visit What you like</h2>
        <div className="grid grid-cols-2 grid-rows-2 w-full h-96 gap-5">
          <div className="flex flex-col justify-center items-center">
            <div className="w-32 h-32 bg-slate-800 rounded-full"></div>
            <p className="text-sm text-black ">Dinasaur</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="w-32 h-32 bg-slate-800 rounded-full"></div>
            <p className="text-sm text-black ">Dinasaur</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="w-32 h-32 bg-slate-800 rounded-full"></div>
            <p className="text-sm text-black ">Dinasaur</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="w-32 h-32 bg-slate-800 rounded-full"></div>
            <p className="text-sm text-black ">Dinasaur</p>
          </div>
        </div>
      </section>
    </>
  );
};

function GridComponent({ classname }) {
  return (
    <>
      <div
        className={
          classname +
          "flex-shirk h-1/2 min-h-60 max-w-[250px] flex flex-col items-center justify-center rounded-lg hover:shadow-md "
        }
      >
        {" "}
        <div className=" bg-red-500 bg-center rounded-full w-40 h-40"></div>
        {/* bg-cover bg-no-repeat bg-[url('/hanumaan.png')] */}
        <p>Hanuman</p>
      </div>
    </>
  );
}
export default Category;
