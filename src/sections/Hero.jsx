import React from "react";
import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Spline from "@splinetool/react-spline";
import { useMediaQuery } from "react-responsive";
const Hero = () => {
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

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div
        className="flex flex-row items-center justify-between mb-5"
        style={{ marginTop: "10%" }}
      >
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
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
              <h1>into Real Projects</h1>
              <h1>that Deliever Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Aung Myint Myat, a developer based in Myanmar with a
              passion for code.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my work"
            />
          </div>
        </header>
        {isLargeScreen && (
          <figure className="w-full lg:w-[600px] h-[500px] relative overflow-hidden">
            <Spline scene="https://prod.spline.design/3KPv-Qgou7PNHQjF/scene.splinecode" />

            {/* Black overlay covering bottom 10% */}
            <div className="absolute bottom-0 left-0 w-full h-[12%] bg-black pointer-events-none z-10" />
          </figure>
        )}
      </div>
    </section>
  );
};

export default Hero;
