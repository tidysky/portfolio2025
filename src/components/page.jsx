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

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function Page() {

 const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("Norazheng1010@hotmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // 1.5 秒后隐藏提示
    });
  };


  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });



    gsap.to("#smooth-content", {
      scrollTrigger: {
        trigger: "#smooth-content",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          setIsScrolling(true);
          timeoutRef.current = setTimeout(() => setIsScrolling(false), 150);
        },
      },
    });

 
 

    // 页面按钮滚动控制
    const buttons = document.querySelectorAll(".nav li");
    const targets = [".firstScreen", ".secondScreen", ".thirdScreen", ".fourthScreen"];
    buttons.forEach((btn, i) => {
      const handler = () => smoother.scrollTo(targets[i], true, "top top");
      btn.addEventListener("click", handler);
      btn._handler = handler; // 保存用于卸载
    });

    
    const screenheight = window.innerHeight;
    const imgs = gsap.utils.toArray(".stalkimgs img");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".thirdScreen",
        start: "top top",
        // endTrigger: ".finalimg",
        end: "+=" + 1.55 * screenheight,
        scrub: true,
        pin: true,
        // anticipatePin: 1,
       
      pinSpacer: false
      }
    });

   
    gsap.set([imgs[1], imgs[2]], { scale: 1.1,opacity:0 });
    // 动画部分
    tl.to(imgs[1], { 
                      y: -0.5*screenheight,
                      opacity:1,
                      delay:1,
                    })
      .to(imgs[1], { 
                      y: -0.55*screenheight,
                      scale: 1,
                    })          
      .to(imgs[2], { 
                      y: -1*screenheight,
                      opacity:1,
                      delay:1,
                    })
      .to(imgs[2], { 
                      y: -1.1*screenheight,
                      scale: 1,
                    })

 



    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      smoother.kill();
      buttons.forEach(btn => btn.removeEventListener("click", btn._handler));
    };
  }, []);

  return (
    <>
      {/* 3D Canvas */}
      <Mycanvas />

      {/* 滚动内容 */}
      <div id="smooth-wrapper" className="z-40">
        <div id="smooth-content">
          
          {/* 第一屏 */}
          <div className="firstScreen h-screen w-full flex flex-col relative">
            <div className="z-[50]"><MarqueeDivLeft /></div>
           
            <div className="bg-[#5862ec] box-content border-[#000037] border-[5px] flex-[1] relative">
            
              <div className="w-full h-full mx-auto grid grid-cols-3 grid-rows-1 z-50">         
                <div className="flex items-center col-span-3 row-span-2">
                  <img src="title.png" className="title z-10" alt="title" data-speed='2' data-log="0.3" />
                </div>
              </div>
              <img src="bgornament_lt.png" className="absolute left-0 top-0 z-10" alt="left top ornament" />
              <img src="bgornament_rt.png" className="absolute right-0 top-0 z-10" alt="right top ornament" />
              <img src="bgornament_rb.png" className="absolute right-[1%] bottom-[1%]" alt="right bottom ornament" />
              
               <div className='opacity-60 absolute inset-0 z-0 '> <LetterGlitch
              glitchSpeed={50}
              centerVignette={false}
              outerVignette={false}
              smooth={true}/></div>
            </div>
          </div>
          

          {/* 第二屏 */}
          <div className="secondScreen h-screen w-full flex flex-col">
            <MarqueeDivRight />
            <div className="bg-[#5862ec] box-content border-[#000037] border-[5px] flex-[1] grid grid-cols-8 grid-rows-1 pt-[6%] relative">
           
              <div className="justify-center col-span-3 col-start-2 selfie">
                <img src="selfie.png" data-speed="1" data-lag="0.3" alt="selfie" />
              </div>
              <div className="col-span-3 font-mono col-start-5 pl-10 " data-speed="2" data-lag="0.3" >
                <h1 className="text-8xl font-sans text-[#b0e86f] Screen2title bold" >Hello</h1>
                <br />
                <h1 className="text-8xl font-sans text-[#b0e86f] " >I AM Nora</h1>
                <span className="text-lg text-[#b0e86f] py-6 block" >
                  UX/UI DESIGNER / FRONT-END DEVELOPER
                </span>
                <p className="text-lg py-1 text-[#eff4ff]" >
                  I’m a Design Engineer who designs UI/UX and brings it to life with code.<br /> I love creating fun, interactive experiences in the digital world that delight users and make websites memorable.
                </p>
              </div>
              
              
            </div>
          </div>

         <div className='thridAndFourthScreens'>

          <div className="thirdScreen h-screen w-full flex flex-col relative font-sans">
            <MarqueeDivLeft />
            <div className="bg-[#6074f4] box-content flex-1 flex flex-col relative mx-auto overflow-hidden ">
              <div className='text-8xl text-[#b0e86f flex justify-center text-center w-[100vw] text-[#b0e86f] pt-[5%] pb-[2%] bebas-neue-regular'>CASES</div>
             <div className="flex flex-col mx-auto stalkimgs">
                <a href='https://sharingcountry.vercel.app/' target='_blank'><img src="works2.png" className="stack-image" alt="work2" /></a>
                <a href='https://www.behance.net/zhengnora' target='_blank'><img src="works3.png" className="stack-image" alt="work3" /></a>
                <a href='https://norazhengportfolio2025.vercel.app/ ' target='_blank'><img src="works1.png" className="stack-image" alt="work1" /></a>
              </div>

            </div>
          </div>

          {/* 第四屏 */}
          <div className="fourthScreen h-[40vh] w-full flex flex-col relative block">
            <MarqueeDivRight />
            <div className="bg-[#5862ec] box-content flex-1 flex flex-col justify-center items-center text-center font-mono">
              <div
                onClick={handleCopy}
                className="text-[#b0e86f] border-[1px] border-[#b0e86f] w-[45vh] h-[7vh] flex justify-center items-center my-[4vh] cursor-pointer hover:bg-[#4e54d1] transition-colors"
              >
                <img src="/icon.png" alt="email icon" className="mr-2" />
                <span className="text-lg">Norazheng1010@hotmail.com</span>
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
      </div>
     
    </>
  );
}
