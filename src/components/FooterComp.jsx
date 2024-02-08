import { ImEarth } from "react-icons/im";
import { VscTwitter } from "react-icons/vsc";
import { ImFacebook2 } from "react-icons/im";
import { TiSocialYoutube } from "react-icons/ti";
import { ImInstagram } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
const FooterComp = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap bg-[#333333] text-white md:hidden">
        <div className="basis-1/1 pt-[80px] pb-[40px]">
          <ul>
            <li>
              <a href="" className="inline text-4xl font-poppins font-normal">
                <ImEarth className="text-5xl inline mx-[10px]" />
                flightPath
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row flex-wrap bg-[#333333] text-white md:hidden">
        <div className="basis-1/2">
          <ul className="font-poppins font-semibold text-[20px] ml-[10px] mt-[30px]">
            <li className="my-[5px]">
              <a href="#">About</a>
            </li>
            <li className="my-[5px]">
              <a href="#">Expertise</a>
            </li>
            <li className="my-[5px]">
              <a href="#">Work</a>
            </li>
            <li className="my-[5px]">
              <a href="#">Blog</a>
            </li>
            <li className="my-[5px]">
              <a href="#">Contact</a>
            </li>
            <li className="my-[5px]">
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="basis-1/2">
          <ul className="font-poppins font-semibold text-[20px] ml-[10px] mt-[30px]">
            <li>
              <a href="" className="inline">
                <ImFacebook2 className="my-[10px] text-xl inline mr-[10px]" />
                Facebook
              </a>
            </li>
            <li>
              <a href="" className="inline">
                <VscTwitter className="my-[10px] text-xl inline mr-[10px]" />
                Twitter
              </a>
            </li>
            <li>
              <a href="" className="inline">
                <TiSocialYoutube className="my-[10px] text-xl inline mr-[10px]" />
                Youtube
              </a>
            </li>
            <li>
              <a href="" className="inline">
                <ImInstagram className="my-[10px] text-xl inline mr-[10px]" />
                Instagram
              </a>
            </li>
            <li>
              <a href="" className="inline">
                <ImLinkedin className="my-[10px] text-xl inline mr-[10px]" />
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*======================================Meduim devices start here=============================================*/}
      <div className="flex flex-row flex-wrap bg-[#333333] text-white">
        <div className="basis-1/3 hidden md:block pt-[80px] pb-[40px]">
          <ul>
            <li>
              <a href="" className="inline text-4xl font-poppins font-normal">
                <ImEarth className="text-5xl inline mx-[10px]" />
                flightPath
              </a>
            </li>
          </ul>
        </div>
        <div className="basis-1/3 hidden md:block">
          <ul className="font-poppins font-semibold text-[20px] ml-[10px] mt-[30px]">
            <li className="my-[5px]">
              <a href="#">About</a>
            </li>
            <li className="my-[5px]">
              <a href="#">Expertise</a>
            </li>
            <li className="my-[5px]">
              <a href="#">Work</a>
            </li>
            <li className="my-[5px]">
              <a href="#">Blog</a>
            </li>
            <li className="my-[5px]">
              <a href="#">Contact</a>
            </li>
            <li className="my-[5px]">
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="basis-1/3 hidden md:block">
          <ul className="font-poppins font-semibold text-[20px] ml-[10px] mt-[30px]">
            <li>
              <a href="" className="inline">
                <ImFacebook2 className="my-[10px] text-xl inline mr-[10px]" />
                Facebook
              </a>
            </li>
            <li>
              <a href="" className="inline">
                <VscTwitter className="my-[10px] text-xl inline mr-[10px]" />
                Twitter
              </a>
            </li>
            <li>
              <a href="" className="inline">
                <TiSocialYoutube className="my-[10px] text-xl inline mr-[10px]" />
                Youtube
              </a>
            </li>
            <li>
              <a href="" className="inline">
                <ImInstagram className="my-[10px] text-xl inline mr-[10px]" />
                Instagram
              </a>
            </li>
            <li>
              <a href="" className="inline">
                <ImLinkedin className="my-[10px] text-xl inline mr-[10px]" />
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterComp;
