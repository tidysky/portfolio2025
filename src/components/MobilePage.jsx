// Page.jsx
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import Mycanvas from "./Mycanvas.jsx";
import MarqueeDivLeft from "./scrollineLeft";
import MarqueeDivRight from "./scrollineRight";
import CircularSlider from './slider.jsx';
import LetterGlitch from './LetterGlitch';
import StalkWorks from './StalkWorks.jsx';
import { useGSAP } from '@gsap/react';
import MobileCanvas from "./MobileCanvas.jsx"

export default function MobilePage(){


  // Initialize ScrollSmoother and ScrollTrigger after the page has loaded and DOM is ready.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = null;

    const init = () => {
      // Ensure wrapper/content exist before creating smoother
      if (!document.getElementById('smooth-wrapper') || !document.getElementById('smooth-content')) return;

      // create smoother
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
      });

      // sometimes initial measurements are off on mobile; refresh triggers after next frame
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        // trigger a resize in case components rely on window size
        window.dispatchEvent(new Event('resize'));
      });
    };

    if (document.readyState === 'complete') {
      init();
    } else {
      window.addEventListener('load', init, { once: true });
      // also try DOMContentLoaded as fallback
      document.addEventListener('DOMContentLoaded', init, { once: true });
    }

    return () => {
      try {
        if (smoother) smoother.kill();
      } catch (e) {
        // ignore
      }
      ScrollTrigger.getAll().forEach(t => t.kill());
      window.removeEventListener('load', init);
      document.removeEventListener('DOMContentLoaded', init);
    };
  }, []);
        
     const [copied, setCopied] = useState(false);
    
      const handleCopy = () => {
        navigator.clipboard.writeText("norazhengpro@outlook.com").then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500); // 1.5 秒后隐藏提示
        });
      };
    

    return(
        <>

        <div id="smooth-wrapper">
            {/* 2. 必须有 content */}
            <div id="smooth-content">

           
        <div className="firstScreen h-screen w-full flex flex-col relative">

       
        {/* 第一屏 */}
        <div className="z-[50]"><MarqueeDivLeft /></div>
        <div className="screen1 bg-[#5862ec] flex-[1] relative">
            
            <div className="w-full h-full mx-auto flex flex-col ">    

                <div className="flex items-center justify-center mt-10" >
                  <img src="title.png" className="title z-10" alt="title"  />
                </div>
                <div className='flex flex-1 w-[100vw] h-full justify-center z-[50]' data-speed='1.5' data-log="0.3"  >
                    <MobileCanvas />
                </div>
               
            </div>

            <div className='opacity-60 absolute inset-0 z-0 '> <LetterGlitch
              glitchSpeed={50}
              centerVignette={false}
              outerVignette={false}
              smooth={true}/>
              </div>
        </div>
        </div>

       
         {/* 第二屏 */}
          <div className="secondScreen h-screen w-full flex flex-col">
            <MarqueeDivRight />
            <div className="bg-[#5862ec] box-content border-[#000037] border-[5px] flex-[1] grid grid-cols-1 grid-rows-1 pt-[6%] relative">
              <div className="flex flex-col font-mono p-10 " data-speed="1.5" data-lag="0.3" >
                <div className='flex flex-row w-full h-full'>
                    {/* 文字 */}
                    <div className=''>
                        <h1 className="text-4xl font-sans text-[#b0e86f] Screen2title bold" >HELLO!</h1> 
                        <h1 className="text-6xl font-sans text-[#b0e86f]" >I AM NORA</h1>
                        <span className="text-base text-[#b0e86f] py-6 block" >
                        UX/UI DESIGNER <br />FRONT-END DEVELOPER
                        </span>
                    </div>
                    {/* 图片 */}
                     <div className="justify-center px-6 h-full " >
                        <img src="selfie.png"  alt="selfie" />
                    </div>
                </div>
                <p className="text-lg py-5 text-[#eff4ff]" >
                    A design engineer with experience in UI/UX design and front-end development.  <br /><br />Skilled in mobile first web development and user-centered interactive design.  <br /><br />I learn fast, stay curious, and work well with people. Looking for opportunities right now.
</p>
                {/* <>左边放个小鲨鱼</> */}
              </div>
              
               
              
            </div>
          </div>
         

           {/* 第三、四屏 */}
         <div className='thridAndFourthScreens'>

          <div className="thirdScreen h-full w-full flex flex-col relative font-sans">
            <MarqueeDivLeft />
            <div className="bg-[#6074f4] box-content flex-1 flex flex-col relative mx-auto overflow-hidden ">
              <div className='text-8xl text-[#b0e86f flex justify-center text-center w-[100vw] text-[#b0e86f] pt-[5%] pb-[2%] bebas-neue-regular'>CASES</div>
             <div className="flex flex-col mx-auto stalkimgs gap-6 pb-10">
                 <a href='https://zs-fabulous-site-fc762b.webflow.io/' className='cursor-pointer' target='_blank'><img src="works0.png" className="stack-image" alt="AItool app" /></a>
                <a href='https://myweatherapp-flame.vercel.app/' className='cursor-pointer' target='_blank'><img src="weatherapp.png" className="stack-image"  /></a>
                <a href='https://sharingcountry.vercel.app/' className='cursor-pointer' target='_blank'><img src="works1.png" className="stack-image" /></a>
                <a href='https://www.behance.net/zhengnora' className='cursor-pointer' target='_blank'><img src="works2.png" className="stack-image " /></a>
                <a href='https://3dpracticedemo.vercel.app/' className='cursor-pointer' target='_blank'><img src="works3.png" className="stack-image " /></a>
             </div>

            </div>
          </div>
          </div>



         {/* 第四屏 */}
          <div className="fourthScreen h-[40vh] w-full flex flex-col relative block">
            <MarqueeDivRight />
      <div className="bg-[#5862ec] box-content flex-1 flex flex-col justify-center items-center text-center font-mono">
        
            <div className='flex justify-center items-center '>
              <a href='https://www.linkedin.com/in/nora-zheng-459546312/' target='_blank' style={{ cursor: 'pointer' }} className='flex justify-center items-center  mr-[1vw] !cursor-pointer' ><img src='linkin.png' alt='linkin' className='w-[5vh] mx-auto !cursor-pointer'/></a>
              <div
                onClick={handleCopy}
                className="text-[#b0e86f] border-[1px] border-[#b0e86f] w-[45vh] h-[7vh] flex justify-center items-center my-[4vh] cursor-pointer hover:bg-[#4e54d1] transition-colors"
              >
                <img src="/icon.png" alt="email icon" className="mr-2" />
                <span className="text-lg">norazhengpro@outlook.com</span>
              </div>
            </div>

                {copied && (
                  <div className="absolute top-[20%] bg-black text-white px-4 py-2 rounded-md text-sm">
                    Copied!
                  </div>
                )}

              <div className="text-sm mb-[4vh]">
                copyright © 2025 Nora Zheng <br />
                Design by Nora Zheng <br />
                Front-end developed by Nora Zheng <br />
              </div>
            </div>
         </div>

        </div>
        </div>
     

        </>
    )
}