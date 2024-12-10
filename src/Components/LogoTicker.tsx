"use client";

import acmeLogo from "@/assets/images/acme.png";
import quantumLogo from "@/assets/images/quantum.png";
import echoLogo from "@/assets/images/echo.png";
import celestialLogo from "@/assets/images/celestial.png";
import pulseLogo from "@/assets/images/pulse.png";
import apexLogo from "@/assets/images/apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-black">
      <div className="container">
        <h2 className="section-title text-white m-5 text-3xl">Trusted by Teams Across Industries</h2>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,black,black,black)]">
          <motion.div
            className="flex gap-14 flex-none pr-14 pt-6"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 18,
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={acmeLogo} alt="acmeLogo" className="logo-ticker-img" />
            <Image
              src={quantumLogo}
              alt="quantumLogo"
              className="logo-ticker-img"
            />
            <Image src={echoLogo} alt="echoLogo" className="logo-ticker-img" />
            <Image
              src={celestialLogo}
              alt="celestialLogo"
              className="logo-ticker-img"
            />
            <Image
              src={pulseLogo}
              alt="pulseLogo"
              className="logo-ticker-img"
            />
            <Image src={apexLogo} alt="apexLogo" className="logo-ticker-img" />

            {/* Second set of Logos */}
            <Image src={acmeLogo} alt="acmeLogo" className="logo-ticker-img" />
            <Image
              src={quantumLogo}
              alt="quantumLogo"
              className="logo-ticker-img"
            />
            <Image src={echoLogo} alt="echoLogo" className="logo-ticker-img" />
            <Image
              src={celestialLogo}
              alt="celestialLogo"
              className="logo-ticker-img"
            />
            <Image
              src={pulseLogo}
              alt="pulseLogo"
              className="logo-ticker-img"
            />
            <Image src={apexLogo} alt="apexLogo" className="logo-ticker-img" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
