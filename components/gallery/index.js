"use client";

import { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
// import { Button } from "@/components/ui/button"

// Sample image sets - you can replace with your actual images
const imageSets = [
  [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ],
  [
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
    "/images/gallery9.jpg",
    "/images/gallery10.jpg",
    "/images/gallery11.jpg",
    "/images/gallery12.jpg",
  ],
  [
    "/images/gallery13.jpg",
    "/images/gallery14.jpg",
    "/images/gallery15.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
  ],
];

export const Gallery = () => {
  const { formatMessage: f } = useIntl();
  const [currentSet, setCurrentSet] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-advance through image sets
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      handleNextSet();
    }, 2000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [currentSet, isAutoPlay]);

  const handleNextSet = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentSet((prev) => (prev + 1) % imageSets.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrevSet = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentSet((prev) => (prev - 1 + imageSets.length) % imageSets.length);
      setIsAnimating(false);
    }, 300);
  };

  const currentImages = imageSets[currentSet] || [];

  return (
    <section className="relative px-4 pt-16 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-25">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative">
          <div className="flex justify-center">
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
              {f({
                id: "About.WhereGreatKidsGrow",
                defaultMessage: "Where great kids grow",
              })}
            </span>
          </div>

          <h2 className="max-w-3xl mx-auto mt-4 text-center text-purple-900 font-extrabold text-4xl sm:text-6xl xl:text-7xl leading-snug sm:leading-tight xl:leading-tighter">
            {f({
              id: "Gallery.SeeWhatOurStudentsExperienceLooksLike",
              defaultMessage: "See what our students' experience looks like",
            })}
          </h2>

          <p className="max-w-screen-xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800 sm:mt-5">
            {f({
              id: "Gallery.GallerySummary",
              defaultMessage:
                "When you see these pictures, please bear in mind our aspirational mission to educate happy, independent, creative, intellectual, passionate and lifelong learners. We have worked hard to capture the joy, the beauty and, most importantly, the reality of what will undoubtedly go down in history of ELS School. I hope you agree that the captured images reflect that joy of learning, working and living in a nurturing environment that gives children the security and opportunity to discover themselves and their world..",
            })}
          </p>
        </div>

        {/* Gallery Controls */}

        {/* Animated Gallery Grid */}
        <div className="relative mt-14 sm:mt-16 md:mt-20 lg:mt-24">
          <div
            className={`grid grid-cols-12 gap-4 js-lightgallery lg:px-4 2xl:px-16 sm:gap-6 lg:gap-10 xl:gap-12 transition-all duration-700 ease-out ${
              isAnimating
                ? "opacity-0 transform translate-y-8 scale-95"
                : "opacity-100 transform translate-y-0 scale-100"
            }`}
          >
            {/* Image 1 */}
            <div className="flex flex-col col-span-4 md:col-span-2 md:justify-end">
              <div
                className="w-full cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50"
                style={{
                  animation: isAnimating
                    ? "none"
                    : "slideInLeft 0.8s ease-out 0.1s both",
                }}
              >
                <img
                  src={
                    currentImages[0] ||
                    "/placeholder.svg?height=400&width=400&query=school children learning"
                  }
                  className="object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl rotate-3 md:-rotate-8 md:-translate-y-12 md:translate-x-3 group-hover:rotate-0 group-hover:scale-110 transition-all"
                  alt="Gallery image 1"
                />
              </div>
            </div>

            {/* Images 2 & 3 */}
            <div className="flex col-span-8 md:col-span-3 md:flex-col">
              <div className="w-1/2 mr-2 md:w-full sm:mr-3 md:mr-0">
                <div
                  className="relative z-10 cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50"
                  style={{
                    animation: isAnimating
                      ? "none"
                      : "slideInUp 0.8s ease-out 0.2s both",
                  }}
                >
                  <img
                    src={
                      currentImages[1] ||
                      "/placeholder.svg?height=400&width=400&query=students in classroom"
                    }
                    className="object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl -rotate-3 md:-rotate-8 group-hover:rotate-0 group-hover:scale-110 transition-all"
                    alt="Gallery image 2"
                  />
                </div>
              </div>
              <div className="relative w-1/2 ml-2 sm:ml-3 md:ml-6">
                <div
                  className="cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50"
                  style={{
                    animation: isAnimating
                      ? "none"
                      : "slideInDown 0.8s ease-out 0.3s both",
                  }}
                >
                  <img
                    src={
                      currentImages[2] ||
                      "/placeholder.svg?height=400&width=400&query=children playing outdoors"
                    }
                    className="object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl rotate-3 md:rotate-8 group-hover:rotate-0 group-hover:scale-110 transition-all"
                    alt="Gallery image 3"
                  />
                </div>
              </div>
            </div>

            {/* Image 4 */}
            <div className="col-span-4 md:col-span-4 md:pr-4">
              <div
                className="w-full cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50"
                style={{
                  animation: isAnimating
                    ? "none"
                    : "slideInRight 0.8s ease-out 0.4s both",
                }}
              >
                <img
                  src={
                    currentImages[3] ||
                    "/placeholder.svg?height=400&width=400&query=school activities"
                  }
                  className="object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl -rotate-3 md:rotate-4 group-hover:rotate-0 group-hover:scale-110 transition-all"
                  alt="Gallery image 4"
                />
              </div>
            </div>

            {/* Images 5 & 6 */}
            <div className="flex col-span-8 md:col-span-3 md:flex-col md:pr-3 md:translate-y-12">
              <div className="w-1/2 mr-2 md:w-full sm:mr-3 md:mr-0">
                <div
                  className="relative z-10 cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50"
                  style={{
                    animation: isAnimating
                      ? "none"
                      : "slideInLeft 0.8s ease-out 0.5s both",
                  }}
                >
                  <img
                    src={
                      currentImages[4] ||
                      "/placeholder.svg?height=400&width=400&query=students learning together"
                    }
                    className="object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl rotate-3 md:rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all"
                    alt="Gallery image 5"
                  />
                </div>
              </div>
              <div className="relative w-1/2 ml-2 md:w-2/3 sm:ml-3 md:-ml-3 lg:-ml-6">
                <div
                  className="cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50 md:-translate-y-6"
                  style={{
                    animation: isAnimating
                      ? "none"
                      : "slideInUp 0.8s ease-out 0.6s both",
                  }}
                >
                  <img
                    src={
                      currentImages[5] ||
                      "/placeholder.svg?height=400&width=400&query=happy children at school"
                    }
                    className="object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl -rotate-3 md:-rotate-8 group-hover:rotate-0 group-hover:scale-110 transition-all"
                    alt="Gallery image 6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Set Counter */}
      </div>
      <div className="flex ml-10 justify-center items-center gap-4 mt-8">
        <button
          onClick={handlePrevSet}
          disabled={isAnimating}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white border border-purple-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <ChevronLeft className="h-4 w-4 text-purple-600" />
        </button>

        <div className="flex gap-2">
          {imageSets.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating && index !== currentSet) {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentSet(index);
                    setIsAnimating(false);
                  }, 300);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSet
                  ? "bg-purple-600 scale-125"
                  : "bg-purple-300 hover:bg-purple-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNextSet}
          disabled={isAnimating}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white border border-purple-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <ChevronRight className="h-4 w-4 text-purple-600" />
        </button>

        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white border border-purple-200 ml-2 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          {isAutoPlay ? (
            <Pause className="h-4 w-4 text-purple-600" />
          ) : (
            <Play className="h-4 w-4 text-purple-600" />
          )}
        </button>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px) rotate(-20deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(3deg) scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px) rotate(20deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(-3deg) scale(1);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(100px) rotate(-15deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(3deg) scale(1);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-100px) rotate(15deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(-3deg) scale(1);
          }
        }

        .aspect-w-1 {
          position: relative;
          padding-bottom: 100%;
        }

        .aspect-h-1 {
          position: relative;
        }

        .aspect-w-1 > * {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
