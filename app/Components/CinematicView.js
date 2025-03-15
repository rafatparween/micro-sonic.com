// components/CinematicView.js
import BokehBackground from './BokehBackground';
import Snowfall from './Snowfall';

export default function CinematicView() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <BokehBackground />
      <Snowfall />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="text-5xl sm:text-7xl font-bold text-white text-center animate-shine">
          Merry Christmas!
        </div>
      </div>
    </div>
  );
}
