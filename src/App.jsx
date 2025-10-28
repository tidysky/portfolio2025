import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Page from './components/page.jsx';
import { useMediaQuery } from 'react-responsive'



gsap.registerPlugin(ScrollTrigger);


export default function App() {
  

   const isDesktop = useMediaQuery({ minWidth: 1024 })

  return (
    <>
     {isDesktop ? (
        <Page />
      ) : (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: '#f5f5f5',
            color: '#333',
            padding: '2rem',
          }}
        >
          <h2>For the best visual and interactive experience, please access this website from your computer😊.</h2><br />
          <p >👉 https://norazhengportfolio2025.vercel.app/</p>
        </div>
      )}
    </>
  );
}
