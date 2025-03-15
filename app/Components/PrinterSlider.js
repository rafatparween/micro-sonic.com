"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const dummyPrinters = [
  { id: 1, name: "Canon PIXMA TS9120", image: "/ones.jpg", features: ["Wireless", "Color Printing"] },
  { id: 2, name: "HP LaserJet Pro MFP", image: "/twos.jpg", features: ["Monochrome", "Fast Printing"] },
  { id: 3, name: "Epson EcoTank L3150", image: "/threes.jpg", features: ["Ink Tank", "Cost-Effective"] },
  { id: 4, name: "Brother HL-L2350DW", image: "/fours.jpg", features: ["Duplex Printing", "Compact Design"] },
  { id: 5, name: "Xerox WorkCentre 6515", image: "/fives.jpg", features: ["All-in-One", "High Resolution"] },
  { id: 6, name: "Samsung Xpress M2020W", image: "/sixs.avif", features: ["Wireless", "Eco Mode"] },
];

const PrinterSlider = () => {
  const [printers] = useState(dummyPrinters);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="w-full py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Best Printers Collection
        </h2>
        <Slider {...settings}>
          {printers.map((printer) => (
            <div key={printer.id} className="px-2">
              <div className="relative h-[300px] w-[306px] rounded-lg overflow-hidden shadow-lg">
                {/* Image */}
                <Image
                  src={printer.image}
                  alt={printer.name}
                  height={300}
                  width={306}
                  className="h-full w-full object-cover"
                />
                {/* Text Inside Image */}
                <div className="absolute bottom-0 left-0 w-full text-white text-center p-2 text-sm font-semibold bg-black/40">
                  <h3 className="text-lg">{printer.name}</h3>
                  <p className="text-xs">{printer.features.join(", ")}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PrinterSlider;
