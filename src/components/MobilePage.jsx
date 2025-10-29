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

    return(
        <>
        <div className="firstScreen h-screen w-full flex flex-col relative">
         <div className="z-[50]"><MarqueeDivLeft /></div>
        <div className="bg-[#5862ec] border-[#000037] border-[5px] flex-[1] relative">
            
            <div className="w-full h-full mx-auto flex flex-col ">    

                <div className="flex items-center pt-[2vh]">
                  <img src="title.png" className="title z-10" alt="title" data-speed='2' data-log="0.3" />
                </div>
                <div className='justify-center text-center text-white z-[100] pt-[2vh]'>
                    {/* <MobileCanvas /> */}
                     <h2>For the best visual and interactive experience, please access this website from your computer😊.</h2><br />
                     <p >👉https://norazhengportfolio2025.vercel.app/</p>
                </div>
                <div className='flex flex-1 w-[100vw] h-full justify-center z-[50]'>
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
        </>
    )
}