import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const videoData = [
  { videoSrc: "/video/videotest.webm", link: "https://www.zcool.com.cn/work/ZNTY4NDk3ODQ=.html" },
  { videoSrc: "/video/videotest.webm", link: "https://www.zcool.com.cn/work/ZNTY4NDk3ODQ=.html" },
  { videoSrc: "/video/videotest.webm", link: "https://www.zcool.com.cn/work/ZNTY4NDk3ODQ=.html" },
  { videoSrc: "/video/videotest.webm", link: "https://www.zcool.com.cn/work/ZNTY4NDk3ODQ=.html" },
  { videoSrc: "/video/videotest.webm", link: "https://www.zcool.com.cn/work/ZNTY4NDk3ODQ=.html" },
  { videoSrc: "/video/videotest.webm", link: "https://www.zcool.com.cn/work/ZNTY4NDk3ODQ=.html" },
  { videoSrc: "/video/videotest.webm", link: "https://www.zcool.com.cn/work/ZNTY4NDk3ODQ=.html" },
  { videoSrc: "/video/videotest.webm", link: "https://www.zcool.com.cn/work/ZNTY4NDk3ODQ=.html" },
  { videoSrc: "/video/videotest.webm", link: "https://www.zcool.com.cn/work/ZNTY4NDk3ODQ=.html" },
  { videoSrc: "/video/videotest.webm", link: "https://www.zcool.com.cn/work/ZNTY4NDk3ODQ=.html" },
  { videoSrc: "/video/videotest.webm", link: "https://www.zcool.com.cn/work/ZNTY4NDk3ODQ=.html" },
  { videoSrc: "/video/videotest.webm", link: "https://www.zcool.com.cn/work/ZNTY4NDk3ODQ=.htmlm" },
  { videoSrc: "/video/videotest.webm", link: "https://www.zcool.com.cn/work/ZNTY4NDk3ODQ=.html" },
  { videoSrc: "/video/videotest.webm", link: "https://www.baidu.com" },
  { videoSrc: "/video/videotest.webm", link: "https://www.baidu.com" },
];

export default function CircularSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const items = gsap.utils.toArray(".sliderimg");

    function sliderCircle() {
      const radius = slider.offsetWidth / 2;
      const center = slider.offsetWidth / 2;
      const total = items.length;
      const slice = (2 * Math.PI) / total;

      items.forEach((item, i) => {
        const radian = i * slice;
        const x = radius * Math.sin(radian) + center;
        const y = -radius * Math.cos(radian) + center;

        gsap.set(item, {
          rotation: radian + "rad",
          xPercent: -50,
          yPercent: -50,
          x: x,
          y: y,
        });
      });
    }

    sliderCircle();
    window.addEventListener("resize", sliderCircle);

    gsap.to(slider, {
      rotate: -360,
      ease: "none",
      scrollTrigger: {
        trigger: ".thirdScreen",
        start: "top top",
        end: () => "+=" + items.length * 200,
        scrub: true,
        pin: true,
      },
    });

    return () => {
      window.removeEventListener("resize", sliderCircle);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="slidercontainer z-[100]">
      <div className="sliderdiv" ref={sliderRef}>
        {videoData.map((item, i) => (
          <div
            className="sliderimg"
            key={i}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <video
                src={item.videoSrc}
                loop
                muted
                className="w-[410] h-[539] object-cover"
                style={{ pointerEvents: 'none' }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}