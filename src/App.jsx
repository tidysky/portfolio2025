import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Page from './components/page.jsx';




gsap.registerPlugin(ScrollTrigger);


export default function App() {
  
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

  return (
    <>
      <Page />
    </>
  );
}
