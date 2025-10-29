// App.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';
import { useProgress } from '@react-three/drei'; // 👈 来自 drei
import Page from './components/page.jsx';
import MobilePage from './components/MobilePage.jsx';

gsap.registerPlugin(ScrollTrigger);

//
// ✅ GlobalLoader：全局加载动画
//
function GlobalLoader({ onFinish }) {
  const { active, progress } = useProgress();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!active && progress >= 100) {
      // 让加载动画平滑淡出
      const timer = setTimeout(() => {
        setVisible(false);
        onFinish?.();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [active, progress, onFinish]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#f5f7fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        zIndex: 9999,
        transition: 'opacity 0.6s ease',
      }}
    >
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111' }}>
        Loading... {progress.toFixed(0)}%
      </p>
      <div
        style={{
          width: '200px',
          height: '6px',
          background: 'rgba(0,0,0,0.1)',
          borderRadius: '3px',
          overflow: 'hidden',
          marginTop: '1rem',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: '#111',
            transition: 'width 0.3s ease',
          }}
        />
      </div>
    </div>
  );
}

//
// ✅ 主体 App
//
export default function App() {
  const [loadingDone, setLoadingDone] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 960 });

  return (
    <>
      {/* ✅ 加载动画组件 */}
      {!loadingDone && <GlobalLoader onFinish={() => setLoadingDone(true)} />}

      {/* ✅ 页面内容 */}
      {loadingDone && (
        <>
          {isDesktop ? (
            <Page />
          ) : (
            <MobilePage />
            // <div
            //   style={{
            //     height: '100vh',
            //     display: 'flex',
            //     flexDirection: 'column',
            //     justifyContent: 'center',
            //     alignItems: 'center',
            //     textAlign: 'center',
            //     backgroundColor: '#f5f5f5',
            //     color: '#333',
            //     padding: '2rem',
            //   }}
            // >
            //   <h2>For the best visual and interactive experience, please access this website from your computer😊.</h2><br />
            //   <p>👉https://norazhengportfolio2025.vercel.app/</p>
            // </div>
          )}
        </>
      )}
    </>
  );
}
