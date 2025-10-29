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
import { MobileShark } from "./MobileShark.jsx";



gsap.registerPlugin(ScrollTrigger, useGSAP);


export default function MobileCanvas() {

  return (
    <>
    
      <div>
       
        <Canvas camera={{ position: [0, 2, 20], fov: 50 }} className="w-[100vw]" >
            <ambientLight intensity={1} />
            <directionalLight position={[3, 3, 3]} intensity={0.5} />
            {/* 渲染第一只鲨鱼 */}
            <MobileShark />
           
        </Canvas>
      </div>
     
    </>
  );
}
