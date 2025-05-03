import React from "react";
import { loadingMessages, words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Spline from "@splinetool/react-spline";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [splineLoading, setSplineLoading] = useState(true);
  const isLargeScreen = useMediaQuery({ minWidth: 1024 }); // Tailwind lg breakpoint
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 60, // slightly more movement adds drama
        opacity: 0,
        filter: "blur(4px)", // subtle blur adds polish
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out", // smoother ease
      }
    );
  });
  const [displayedText, setDisplayedText] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const messageIndexRef = useRef(0); // Tracks the current message index

  useEffect(() => {
    if (!splineLoading) return;

    let charIndex = 0;
    let currentText = loadingMessages[messageIndexRef.current];
    let typingInterval;

    const typeCharacter = () => {
      if (charIndex <= currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          messageIndexRef.current =
            (messageIndexRef.current + 1) % loadingMessages.length;
          setCurrentMessageIndex(messageIndexRef.current); // trigger re-render for next effect
        }, 2000);
      }
    };

    typingInterval = setInterval(typeCharacter, 50);

    return () => clearInterval(typingInterval);
  }, [splineLoading, currentMessageIndex]); // currentMessageIndex ensures cycle continues

  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-between
                mb-20 px-5 md:px-10 xl:px-20
                mt-[14vh] sm:mt-[14vh] md:mt-[18vh] lg:mt-[14vh] xl:mt-[16vh] 2xl:mt-[16vh]`}
    >
      <header className="w-full lg:w-1/2 max-w-[700px]">
        <div className="flex flex-col gap-7">
          <div className="hero-text">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight font-bold mb-3">
              Shaping
              <span className="slide">
                <span className="wrapper">
                  {words.map((word) => (
                    <span
                      key={word.text}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight font-bold mb-2">
              into Real Projects
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight font-bold">
              that Deliver Results
            </h1>
          </div>
          <p className="text-white-50 md:text-xl text-base relative z-10 pointer-events-none">
            Hi, I’m Aung Myint Myat, a developer based in Myanmar with a passion
            for code.
          </p>
          <Button
            className="md:w-80 md:h-16 w-60 h-12"
            id="button"
            text="See my work"
          />
        </div>
      </header>

      {isLargeScreen && (
        <figure className="w-full lg:w-[600px] h-[500px] relative overflow-hidden mt-10 lg:mt-0 rounded-xl shadow-lg">
          {splineLoading && (
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black z-10 rounded-lg gap-4 px-4">
              {/* Typing Text ABOVE the image */}
              <p className="text-white text-center text-sm font-mono">
                {displayedText}
                <span className="animate-ping inline-block w-1 ml-1">|</span>
              </p>

              {/* Image */}
              <img
                src={"/images/Hero.png"}
                alt="Fallback preview"
                className="w-4/5 max-h-[80%] object-contain"
              />
            </div>
          )}

          <div className="absolute inset-0 z-10">
            <Spline
              scene="https://prod.spline.design/3KPv-Qgou7PNHQjF/scene.splinecode"
              onLoad={() => setSplineLoading(false)}
            />
          </div>

          {/* Black overlay covering bottom 10% */}
          <div className="absolute bottom-0 left-0 w-full h-[12%] bg-black pointer-events-none z-20" />
        </figure>
      )}
    </div>
  );
};

export default Hero;
