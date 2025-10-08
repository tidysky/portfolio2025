// MarqueeDivRight.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../MarqueeDiv.css'; // 确保路径正确，如果MarqueeDiv.jsx和MarqueeDiv.css在同一文件夹，请使用 "./"

const MarqueeDivRight = () => {
  const baseContent = "2025 PORTFOLIO　　◈　　NORA ZHENG　　Ω　　UI/UX DESIGNER　　☉　　RONT-END DEVELOPER　　☮　　";

  const repeatedText = baseContent.repeat(20);
  const marqueeContentRef = useRef(null);

  useEffect(() => {
    if (!marqueeContentRef.current) return;

    const contentWidth = marqueeContentRef.current.scrollWidth / 2;

    // 1. 设置动画的初始位置，确保第二个 span 在可视区域的起点
    gsap.set(marqueeContentRef.current, { x: -contentWidth });

    // 2. 创建 GSAP 动画，让其从 -contentWidth 滚动到 0
    gsap.to(marqueeContentRef.current, {
      x: 0, // 动画目标：向右移动到起点
      duration: 200, // 动画持续时间（秒）
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
    <div className="marquee-container  scrollLine bg-[#000037] text-white">
      <div className="marquee-content font-mono" ref={marqueeContentRef}>
        {/* 放置两个完全相同的长文本段 */}
        <span>{repeatedText}</span>
        <span>{repeatedText}</span>
      </div>
    </div>
  );
};

export default MarqueeDivRight;