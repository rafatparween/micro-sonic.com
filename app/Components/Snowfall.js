// components/Snowfall.js
export default function Snowfall() {
    return (
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        {[...Array(100)].map((_, index) => (
          <div
            key={index}
            className="absolute snowflake"
            style={{
              animationDelay: `${Math.random() * 5}s`,
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              width: `${Math.random() * 5 + 5}px`,
              height: `${Math.random() * 5 + 5}px`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          ></div>
        ))}
      </div>
    );
  }
  