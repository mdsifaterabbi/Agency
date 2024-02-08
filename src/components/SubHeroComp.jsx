const SubHeroComp = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap bg-[#f5f5f5] md:hidden">
        <div className="basis-1/1">
          <h1 className="font-poppins font-bold text-3xl text-center px-[10px] py-[20px]">
            We’re a digital marketing agency based in New York City
          </h1>
        </div>
        <div className="basis-1/1">
          <p className="font-poppins font-normal text-xl text-center px-[10px] py-[30px]">
            Flightpath helps B2B & B2C organizations of all sizes navigate the
            complexity of today’s digital world to achieve results.
          </p>
        </div>
        <div className="basis-1/1 sm:mb-[30px]">
          <div className="w-[100%]">
            <figure className="sm:w-[80%] sm:mx-auto">
              <video
                autoplay="true"
                loop="true"
                muted=""
                poster="https://www.flightpath.com/wp-content/uploads/2020/06/home-device1.jpg"
                src="https://www.flightpath.com/wp-content/uploads/2020/06/home-image1-600kps30fps.mp4"
                playsinline=""
              ></video>
            </figure>
          </div>
        </div>
        <div className="basis-1/1">
          <h1 className="font-poppins font-bold text-3xl text-left px-[10px] pt-[50px]">
            Our <br></br>Approachss
          </h1>
        </div>
        <div className="basis-1/1">
          <p className="font-poppins font-semiboldbold font-normal text-left px-[10px] py-[30px]">
            Competition is as fierce in the digital world as it is across
            virtually every business segment. Brands, businesses and nonprofits
            that anchor their digital experiences with smart integrated
            planning, emotional understanding, artful design and insightful
            analysis create sustainable engagement.
          </p>
        </div>
        <div className="basis-1/1">
          <a className="btn btn-outline btn-sm rounded-none text-blue-500 ml-[10px] mb-[20px] hover:bg-blue-500 hover:text-white hover:border-none transition duration-300">
            About Us
          </a>
        </div>
      </div>

      {/* ===========================for md devices============================== */}
      <div className="hidden md:block">
        <h1 className="font-poppins font-bold text-3xl text-center px-[100px] py-[20px]">
          We’re a digital marketing agency based in New York City
        </h1>
        <p className="font-poppins font-normal text-xl text-center px-[100px] py-[30px]">
          Flightpath helps B2B & B2C organizations of all sizes navigate the
          complexity of today’s digital world to achieve results.
        </p>
      </div>
      <div className="flex flex-row flex-wrap md:bg-[#f5f5f5] ">
        <div className="basis-1/2 hidden md:block">
          <div className="flex flex-col flex-wrap">
            <div className="basis-1/1 lg:mx-auto">
              <figure className="md:block">
                <video
                  autoplay="true"
                  loop="true"
                  muted=""
                  poster="https://www.flightpath.com/wp-content/uploads/2020/06/home-device1.jpg"
                  src="https://www.flightpath.com/wp-content/uploads/2020/06/home-image1-600kps30fps.mp4"
                  playsinline=""
                ></video>
              </figure>
            </div>
            <div className="basis-1/1">
              <h1 className="font-poppins font-bold text-3xl text-left px-[10px] py-[20px] mt-[50px] lg:px-[150px]">
                Our <br></br>Approach
              </h1>
              <p className="font-poppins font-semiboldbold font-normal text-left px-[10px] py-[30px] lg:px-[150px]">
                Competition is as fierce in the digital world as it is across
                virtually every business segment. Brands, businesses and
                nonprofits that anchor their digital experiences with smart
                integrated planning, emotional understanding, artful design and
                insightful analysis create sustainable engagement.
              </p>
              <a className="btn btn-outline btn-sm rounded-none text-blue-500 ml-[10px] mb-[20px] hover:bg-blue-500 hover:text-white hover:border-none transition duration-300 lg:ml-[150px]">
                About Us
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/2 hidden md:block lg:mx-auto">
          <figure className="md:block md:ml-[5px]">
            <video
              autoplay="true"
              loop="true"
              muted=""
              poster="https://www.flightpath.com/wp-content/uploads/2020/06/home-flightiron2.jpg"
              src="https://www.flightpath.com/wp-content/uploads/2020/05/home-image2-600kps30fps.mp4"
              playsinline=""
            ></video>
          </figure>
        </div>
      </div>
    </>
  );
};

export default SubHeroComp;
