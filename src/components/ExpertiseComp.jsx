const ExpertiseComp = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap my-[50px]">
      <div className="basis-1/1 lg:basis-1/2">
        <div className="flex flex-row flex-wrap min-h-[300px]">
          <div className="basis-2/5 text-center md:basis-3/5 md:text-right">
            <img
              src="../../facebook_1.jpg"
              alt="facebook_1"
              className="w-[125px] h-[150px] inline my-[5px]"
            ></img>
            <img
              src="../../google_1.jpg"
              alt="google_1"
              className="w-[125px] h-[150px] inline my-[5px]"
            ></img>
            <img
              src="../../gearshop.jpg"
              alt="gearshop"
              className="w-[125px] h-[150px] inline mx-[5px]"
            ></img>
          </div>
          <div className="basis-3/5 text-center md:basis-2/5">
            <img
              src="../../phone_1.jpg"
              alt="phone_1"
              className="w-[150px] h-[350px] inline my-[10px]"
            ></img>
            <div className="basis-5/5 mx-[10px] text-center my-[10px]">
              <img
                src="../../youtube_1.jpg"
                alt="youtube_1"
                className="w-[100px] h-[100px] inline mx-[5px]"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/1 lg:basis-1/2">
        <h1 className="text-center font-poppins font-extrabold text-3xl px-[30px]">
          Agency Expertise
        </h1>
        <p className="font-poppins font-semibold text-sm px-[20px] pt-[10px]">
          The strength of our digital agency lies in an ever-evolving set of
          core competencies nimbly combined and refined into a custom solution
          for our clients and their brands.
        </p>
        <p className="px-[20px] pt-[10px]">
          <ul className="font-poppins font-bold text-xl">
            <li className="my-[10px]">
              <a href="">Digital Strategy</a>
            </li>
            <li className="my-[10px]">
              <a href="">Social Media</a>
            </li>
            <li className="my-[10px]">
              <a href="">Digital Marketing</a>
            </li>
            <li className="my-[10px]">
              <a href="">UX/Web Design</a>
            </li>
            <li className="my-[10px]">
              <a href="">Paid Media</a>
            </li>
            <li className="my-[10px]">
              <a href="">Search</a>
            </li>
            <li className="my-[10px]">
              <a href="">Email</a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default ExpertiseComp;
