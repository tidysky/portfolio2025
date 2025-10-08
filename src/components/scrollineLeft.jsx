// MarqueeDiv.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../MarqueeDiv.css'; // 沿用之前的 CSS 文件

const MarqueeDivLeft = () => {
  const baseContent = "2025 PORTFOLIO　　◈　　NORA ZHENG　　Ω　　UI/UX DESIGNER　　☉　　RONT-END DEVELOPER　　☮　　";

  // 将文字内容重复足够多次，以确保它始终能填满屏幕，并且能无缝衔接。
  // 我们重复 20 次，以确保在任何宽屏显示器上都不会出现空白。
  const repeatedText = baseContent.repeat(20);

  const marqueeContentRef = useRef(null);

  useEffect(() => {
    if (!marqueeContentRef.current) return;

    // 获取整个内容的宽度，GSAP 将基于这个宽度进行动画
    const contentWidth = marqueeContentRef.current.scrollWidth / 2;

    // 创建 GSAP 动画
    gsap.to(marqueeContentRef.current, {
      x: -contentWidth, // 动画目标：向左移动一个 "完整的文字内容" 宽度
      duration: 200, // 动画持续时间（秒），可以调整以改变速度
      ease: "none", // 匀速运动
      repeat: -1, // 无限循环
      overwrite: "auto",
    });

    // 清理函数：组件卸载时停止动画
    return () => {
      gsap.killTweensOf(marqueeContentRef.current);
    };
  }, []);

  return (


    <div className="marquee-container scrollLine bg-[#000037] text-white">
      <div className="marquee-content font-mono" ref={marqueeContentRef}>
        {/* 放置两个完全相同的长文本段，以实现无缝循环 */}
        <span>{repeatedText}</span>
        <span>{repeatedText}</span>
      </div>
    </div>
  );
};

export default MarqueeDivLeft;