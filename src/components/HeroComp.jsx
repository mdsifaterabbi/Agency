import React, { useRef, useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import styles from "../modularCSS/Icon.module.css";

const HeroComp = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Set video source depending on browser compatibility
      const canPlayMp4 = video.canPlayType("video/mp4");
      const canPlayWebm = video.canPlayType("video/webm");

      if (canPlayMp4) {
        // video.src =
        //   "https://www.flightpath.com/wp-content/uploads/2020/06/New-Home-Hero-1200Kbps30fps-1920X1080.mp4";
        video.src = "../../New-Home-Hero-1200Kbps30fps-1920X1080.mp4";
      } else if (canPlayWebm) {
        video.src = "path/to/alternative_video.webm"; // Replace with your alternative WebM video URL
      } else {
        // Handle unsupported formats or provide alternate content
        console.error(
          "Your browser does not support MP4 or WebM video formats."
        );
      }

      // Set other video properties
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.style.objectFit = "cover";

      // Optionally handle video load/error events for a better user experience
    }
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div className="basis-1/1 bg-slate-700 h-[100vh] w-[100vw] relative">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 z-20 h-[100vh] w-[100vw]"
          ></video>
          <div className="absolute z-30 h-[100vh] w-[100vw] top-0 left-0 text-white bg-black bg-opacity-50">Overlay</div>
          <div className="absolute z-30 top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-white">
            <h3 className="font-poppins font-bold text-xl text-center">
              DIGITAL INVENTIVENESS
            </h3>
            <h1 className="font-poppins font-bold text-4xl text-center mt-[30px]">
              Creating Real Business Value
            </h1>
            <div className="w-[100vw] text-center">
              <a className="btn btn-outline rounded-none text-white ml-[10px] mt-[50px] mb-[20px] mr-[10px] hover:bg-white hover:text-blue-600 hover:border-none transition duration-300  pt-[15px] pb-[25px] md:mx-[50px]">
                About Us
              </a>
              <a className="btn border-none rounded-none bg-[#00568bcc] text-white font-bold hover:bg-[#00568b] hover:text-white hover:border-none transition duration-300 mt-[50px] pt-[15px] pb-[25px] md:mr-[30px]">
                See Our Work
              </a>
            </div>
          </div>
          <div className="absolute z-30 h-[20%] bottom-[100px] left-[50%] transform -translate-x-[50%] -translate-y-[0%] text-white">
            <AiOutlineDown className={`text-7xl ${styles.bounce_animation}`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroComp;
