import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState, useEffect, use } from 'react';
import * as THREE from 'three';
import { Grid } from '@react-three/drei';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shark1 } from "./Shark1.jsx";
import { useLayoutEffect } from "react";  
import { Shark2 } from "./Shark2.jsx";
import { Shark3 } from "./Shark3.jsx";
import { Leva } from "leva";
import { View } from "@react-three/drei";
import { useGSAP } from "@gsap/react";


import Page from "./page.jsx";



gsap.registerPlugin(ScrollTrigger, useGSAP);


export default function Mycanvas() {

useGSAP(() => {
  gsap.to(".canvasZindex", {
    scrollTrigger: {
      trigger: ".thridAndFourthScreens",
      start: "top center",
      end: "bottom -10000",
      toggleClass: { targets: ".canvasZindex", className: "hidden-canvas" },
    },
  });

   
});

  return (
    <>
    
      <div className="canvasIndex " style={{
        width: "100vw",
        height: "100vh",
        position: 'absolute',
        top: 0,
        left: 0,
       
      }}>
         <Leva collapsed />
        <Canvas className="canvasZindex sharkcanvas"camera={{ position: [0, 2, 10], fov: 50 }}>
          {/* <axesHelper args={[5]} />
          <Grid
            sectionSize={3}
            sectionColor={"purple"} 
            sectionThickness={1}
            cellSize={1}
            cellColor={"#6f6f6f"}
            cellThickness={0.6}
            infiniteGrid
            fadeDistance={50}
            fadeStrength={5}
          /> */}
         
            <ambientLight intensity={1} />
            <directionalLight position={[3, 3, 3]} intensity={0.5} />
            {/* 渲染第一只鲨鱼 */}
            <Shark1  />
            <Shark2  />
         
          
          {/* <Shark2 scale={shark1scale}  />
          <Shark3 /> */}
        </Canvas>
      </div>
     
    </>
  );
}
