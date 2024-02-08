import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const ContactComp = () => {
  const currentDateTime = new Date();
  const formattedDateTime = currentDateTime.toLocaleString(); // Customize formatting if needed
  return (
    <>
      <div className="text-center pb-[50px] bg-[#f5f5f5]">
        <h1 className="text-center font-poppins font-extrabold text-3xl px-[30px] pt-[30px]">
          Follow Us
        </h1>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row flex-wrap bg-[#f5f5f5]">
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2">
          <div
            className="text-center md:text-end md:relative md:top-[40%] md:left-[0px] transform
           -translate-x-[0px] -translate-y-[40%]"
          >
            <h5 className="text-center md:text-end bg-[#f5f5f5] uppercase font-poppins font-semibold">
              Our Social Channels
            </h5>
            <a href="">
              <FaFacebookF className="text-blue-600 text-[20px] md:text-[60px] inline mx-[10px] my-[10px] hover:scale-110 transition duration-300" />
            </a>
            <a href="">
              <FaTwitter className="text-red-600 text-[20px] md:text-[60px] inline mx-[10px] my-[10px] hover:scale-110 transition duration-300" />
            </a>
            <a href="">
              <FaInstagram className="text-orange-600 text-[20px] md:text-[60px] inline mx-[10px] my-[10px] hover:scale-110 transition duration-300" />
            </a>
            <a href="">
              <FaYoutube className="text-red-600 text-[20px] md:text-[60px] inline mx-[10px] my-[10px] hover:scale-110 transition duration-300" />
            </a>
            <a href="">
              <FaLinkedin className="text-blue-600 text-[20px] md:text-[60px] inline mx-[10px] my-[10px] hover:scale-110 transition duration-300" />
            </a>
          </div>
        </div>
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 px-[10px] pb-[50px]">
          <h5 className="text-center lg:text-left md:text-start bg-[#f5f5f5] uppercase font-poppins font-semibold">
            Latest From Our Blog
          </h5>
          <div className="relative w-full top-[0px] left-[0px] mb-[25px] overflow-hidden">
            <div className="min-h-[300px]">
              <div className="absolute w-full bg-orange-300 top-[0px] left-[0px]">
                <img
                  src="../../blog.jpg"
                  alt="blog image"
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="absolute w-full pb-[10px] bottom-[0px] left-[0px] pointer-events-none bg-[#52311a] bg-opacity-50">
                <h3 className="text-sm text-white px-[10px] pb-[10px]">
                  5 Steps To Crafting a Winning LinkedIn B2B Marketing Strategy
                </h3>
                <span className="text-white px-[10px]">
                  {formattedDateTime}
                </span>
              </div>
            </div>
          </div>
          <a className="btn btn-outline btn-sm rounded-none text-blue-500 hover:bg-blue-500 hover:text-white hover:border-none transition duration-300">
            More from the Blog
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-col flex-wrap">
        <div className="basis-1/1 md:1/1 py-[50px] bg-[#00568b] text-white text-center">
          <h1>Let's Work Together</h1>
          <a className="btn btn-outline btn-sm rounded-none text-white hover:bg-blue-500 hover:text-white mt-[20px] hover:border-none transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactComp;
