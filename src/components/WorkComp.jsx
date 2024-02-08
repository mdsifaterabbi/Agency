const WorkComp = () => {
  return ( 
    <div className="my-[50px] bg-[#f5f5f5] pb-[50px]">
      <div>
        <h1 className="text-center font-poppins font-extrabold text-3xl px-[30px] pt-[50px]">
          Discover Our Work
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap sm:justify-center sm:items-center">
        <div className="basis-1/1 sm:basis-1/3 border-[2px] h-[220px] lg:h-[300px] mx-[20px] mt-[20px] text-black">
          <div className="relative w-full h-full bg-orange-400 overflow-hidden">
            <div className="absolute w-full h-full bg-purple-500 text-white text-center top-[0px] left-[0px]">
              <a href="">
                <img
                  src="../../work_1_sm.jpg"
                  alt="work_1_sm"
                  className="w-full h-full hover:scale-110 transition duration-300"
                ></img>
              </a>
              <div className="absolute w-full h-full bg-slate-900 top-0 left-0 opacity-50 pointer-events-none"></div>
            </div>
            <div className="absolute w-full bottom-[50px] text-white z-20 pointer-events-none">
              <h1 className="text-left text-xl font-bold pl-[20px]">Zoetis</h1>
              <h3 className="text-left text-xs font-bold pl-[20px] pr-[20px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                adipisci dolorem excepturi.
              </h3>
            </div>
          </div>
        </div>
        <div className="basis-1/1 sm:basis-1/3 border-[2px] h-[220px] lg:h-[300px] mx-[20px] mt-[20px] text-black">
          <div className="relative w-full h-full bg-orange-400 overflow-hidden">
            <div className="absolute w-full h-full bg-purple-500 text-white text-center top-[0px] left-[0px]">
              <a href="">
                <img
                  src="../../work_2.jpg"
                  alt="work_2"
                  className="w-full h-full hover:scale-110 transition duration-300"
                ></img>
              </a>
              <div className="absolute w-full h-full bg-slate-900 top-0 left-0 opacity-50 pointer-events-none"></div>
            </div>
            <div className="absolute w-full bottom-[50px] text-white z-20 pointer-events-none">
              <h1 className="text-left text-xl font-bold pl-[20px]">
                Goya Foods
              </h1>
              <h3 className="text-left text-xs font-bold pl-[20px] pr-[20px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                adipisci dolorem excepturi.
              </h3>
            </div>
          </div>
        </div>
        <div className="basis-1/1 sm:basis-1/3 border-[2px] h-[220px] lg:h-[300px] mx-[20px] mt-[20px] text-black">
          <div className="relative w-full h-full bg-orange-400 overflow-hidden">
            <div className="absolute w-full h-full bg-purple-500 text-white text-center top-[0px] left-[0px]">
              <a href="">
                <img
                  src="../../work_3.jpg"
                  alt="work_3"
                  className="w-full h-full hover:scale-110 transition duration-300"
                ></img>
              </a>
              <div className="absolute w-full h-full bg-slate-900 top-0 left-0 opacity-50 pointer-events-none"></div>
            </div>
            <div className="absolute w-full bottom-[50px] text-white z-20 pointer-events-none">
              <h1 className="text-left text-xl font-bold pl-[20px]">
                AkzoNobel
              </h1>
              <h3 className="text-left text-xs font-bold pl-[20px] pr-[20px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                adipisci dolorem excepturi.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[50px] flex justify-center">
        <a className="btn btn-outline btn-sm rounded-none text-blue-500 hover:bg-blue-500 hover:text-white hover:border-none transition duration-300">
          More of Our Work
        </a>
      </div>
    </div>
  );
};

export default WorkComp;
