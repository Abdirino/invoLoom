"use client"
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });
  const rotateX = useTransform(scrollYProgress, [0,1],[15,0]);
  const opacity = useTransform(scrollYProgress, [0,1],[.5,1]);
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container overflow-hidden">
        {/* <div className="flex justify-center">
          <div className="tag">Testimonials</div>
        </div> */}
        <div className="max-w-2xl mx-auto">
          <h1 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
            Everything You Need to Scale Smarter
          </h1>
          <p className="text-xl text-center text-white/70 mt-5">
            Discover how OutreachIQ empowers your sales process with AI-driven
            automation, personalized outreach, and actionable insights. From
            managing leads to closing deals, our intuitive platform is built to
            help you work smarter, not harder.
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "400px",
          }}
          className="overflow-clip"
        >
          <Image
            src={appScreen}
            alt="Product showcase"
            className="mt-14 mx-auto overflow-clip"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  );
};
