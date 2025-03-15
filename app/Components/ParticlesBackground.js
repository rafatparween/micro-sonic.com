"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const headings = [
  "Hewlett Printer Solutions - Your Online Printing Partner",
  "Smart Printing Solutions for Every Business Need",
  "Effortless Printing, Maximum Efficiency",
  "High-Quality Printers for Home & Office Use",
  "Seamless Printer Support & Services Online",
];

const typingTexts = [
  "Reliable and efficient printer solutions.",
  "Find the best printer for your needs.",
  "Hassle-free printer maintenance & support.",
  "Affordable printing with high performance.",
  "Instant printer troubleshooting online.",
  "Optimize your workflow with our printers.",
  "Seamless integration with cloud printing.",
  "Buy, repair, and upgrade your printer easily.",
];

const ParticlesBackground = () => {
  const videoRef = useRef(null);
  const [currentHeading, setCurrentHeading] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Video speed control
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3; // Slow down video speed
    }
  }, []);

  // Changing heading text every 4 seconds
  useEffect(() => {
    const headingInterval = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % headings.length);
    }, 4000);

    return () => clearInterval(headingInterval);
  }, []);

  // Typewriter Effect for Bottom Text
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < typingTexts[textIndex].length) {
        setCurrentText((prev) => prev + typingTexts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentText("");
          setCharIndex(0);
          setTextIndex((prev) => (prev + 1) % typingTexts.length);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [charIndex, textIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden mt-[10px]">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="/background.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8 text-center">
        <motion.h1
          key={currentHeading}
          className="text-3xl md:text-6xl font-bold max-w-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
        >
          {headings[currentHeading]}
        </motion.h1>

        {/* Typing Effect */}
        <motion.p
          className="mt-4 text-lg md:text-2xl max-w-3xl min-h-[40px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {currentText}|
        </motion.p>

        {/* Call to Action Button */}
        <motion.button
          className="mt-6 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition text-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Explore Now
        </motion.button>
      </div>
    </div>
  );
};

export default ParticlesBackground;
