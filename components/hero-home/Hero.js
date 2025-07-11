import Link from "next/link";
import { useState, useEffect } from "react";

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    opacity: Math.random() * 0.5 + 0.1,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 20,
  }));

  return (
    <div
      className="min-h-[77vh] flex items-center justify-center text-center bg-cover bg-fixed bg-center w-full text-white relative overflow-hidden"
      // style={{
      //   backgroundImage:
      //     "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/Hero.jpg')",
      // }}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[1]" />
      {/* Animated mesh gradient overlay */}

      {/* Floating particles */}

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="mb-6 font-extrabold text-4xl md:text-7xl leading-tight">
            <span className="inline-block animate-fade-in-up">
              Empower Your
            </span>{" "}
            <span className="relative inline-block animate-fade-in-up animation-delay-300">
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                Future With ELS
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 blur-xl animate-pulse-glow" />
            </span>
          </h1>

          <div className="text-lg md:text-2xl max-w-3xl mx-auto mb-10 font-extrabold text-gray-200 leading-relaxed animate-fade-in-up animation-delay-600">
            <span className="relative">
              Learn, Grow, Succeed—Together.
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-width-expand" />
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-900">
            <Link href="/about" passHref>
              <a className="group relative text-lg font-medium text-white bg-gradient-to-r from-primary-100 to-primary-100 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-2xl outline-none hover:from-blue-800 hover:to-blue-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 h-[55px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl animate-shimmer" />
                <span className="relative z-10">Start Your Journey</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </Link>

            <Link href="/parents">
              <button
                type="button"
                className="group relative text-lg font-medium bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-2xl hover:bg-white/20 hover:border-white/50 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="relative z-10">Register Now</span>
                <svg
                  className="ml-2 relative z-10 transition-transform duration-300 group-hover:rotate-12"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M22 12.0048C22 17.5137 17.5116 22 12 22C6.48842 22 2 17.5137 2 12.0048C2 6.48625 6.48842 2 12 2C17.5116 2 22 6.48625 22 12.0048Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16 12.0049C16 12.2576 15.9205 12.5113 15.7614 12.7145C15.7315 12.7543 15.5923 12.9186 15.483 13.0255L15.4233 13.0838C14.5881 13.9694 12.5099 15.3011 11.456 15.7278C11.456 15.7375 10.8295 15.9913 10.5312 16H10.4915C10.0341 16 9.60653 15.7482 9.38778 15.34C9.26847 15.1154 9.15909 14.4642 9.14915 14.4554C9.05966 13.8712 9 12.9769 9 11.9951C9 10.9657 9.05966 10.0316 9.16903 9.45808C9.16903 9.44836 9.27841 8.92345 9.34801 8.74848C9.45739 8.49672 9.65625 8.2819 9.90483 8.14581C10.1037 8.04957 10.3125 8 10.5312 8C10.7599 8.01069 11.1875 8.15553 11.3565 8.22357C12.4702 8.65128 14.598 10.051 15.4134 10.9064C15.5526 11.0425 15.7017 11.2087 15.7415 11.2467C15.9105 11.4605 16 11.723 16 12.0049Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(30deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(30deg);
          }
        }

        @keyframes width-expand {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        .animate-width-expand {
          animation: width-expand 2s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-900 {
          animation-delay: 900ms;
        }
      `}</style>
    </div>
  );
}

export default Hero;
