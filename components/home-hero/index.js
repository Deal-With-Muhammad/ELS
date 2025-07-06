import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useIntl } from "react-intl";
import CustomImage from "../custom-image";

const VideoPopup = ({ showPopup, onClose }) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => {
    if (showPopup) {
      onClose();
    }
  });
  return (
    <>
      {showPopup ? (
        <>
          <div className="fixed inset-0 z-50 w-full h-full px-4 overflow-hidden transition duration-150 ease-linear">
            <div className="fixed top-0 left-0 w-screen h-screen transition-opacity duration-300 ease-linear bg-black opacity-50"></div>
            <div className="flex items-center justify-center w-auto min-h-screen mx-auto">
              <div
                className="w-full max-w-6xl max-h-full overflow-auto bg-white rounded-2xl"
                ref={wrapperRef}
              >
                <div className="relative aspect-w-16 aspect-h-9">
                  <iframe
                    className="absolute w-full h-full"
                    src="https://www.youtube.com/embed/N4YtNOGbtsQ"
                    title="Video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

const HomeHero = () => {
  const { formatMessage: f } = useIntl();
  const [showPopup, setShowPopup] = useState(false);
  const handleWatchVideo = () => {
    setShowPopup(true);
  };
  return (
    <div>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="flex flex-col items-center justify-center lg:items-start lg:col-span-6"
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="uppercase text-primary-100 font-bold text-5xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter">
              {f({
                id: "Home.BlueSkyAcademy",
                defaultMessage: "els",
              })}
            </h2>
            <p className="max-w-2xl mt-3 text-xl leading-relaxed text-center text-purple-800 lg:text-left">
              {f({
                id: "Home.SloganHero",
                defaultMessage: `Empower Learning System is a compassionate educational initiative dedicated to meeting the critical needs of refugees in Malaysia. We provide inclusive opportunities for children, youth, and adults with limited financial capacity, offering programs such as K-12 Education, Cambridge Primary and Secondary Education, GED Preparation, Higher Education, and Skills Development. Our dedicated team creates a supportive learning environment, empowering individuals to rebuild their lives and contribute positively to their communities. Collaborate with us to support our mission of making education accessible for all and restoring hope and dignity to those we serve.`,
              })}
            </p>

            <div className="flex flex-col items-center mt-4 overflow-hidden sm:flex-row">
              <Link href="/about">
                <a className="text-lg font-medium text-white bg-primary-100 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded_button outline-none hover:bg-primary-100 group h-[55px]">
                  {f({
                    id: "Home.AboutUs",
                    defaultMessage: "About us",
                  })}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="15" y1="16" x2="19" y2="12" />
                    <line x1="15" y1="8" x2="19" y2="12" />
                  </svg>
                </a>
              </Link>

              {/* <button
                type="button"
                className="mt-6 text-lg font-medium bg-white sm:mt-0 sm:ml-6 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded_button group cursor-pointer border-solid border-2 border-primary-100"
                onClick={handleWatchVideo}
              >
                {f({
                  id: "Home.WatchVideo",
                  defaultMessage: "Watch Video",
                })}
                <svg
                  className="ml-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M22 12.0048C22 17.5137 17.5116 22 12 22C6.48842 22 2 17.5137 2 12.0048C2 6.48625 6.48842 2 12 2C17.5116 2 22 6.48625 22 12.0048Z"
                    fill="#003056"
                  />
                  <path
                    d="M16 12.0049C16 12.2576 15.9205 12.5113 15.7614 12.7145C15.7315 12.7543 15.5923 12.9186 15.483 13.0255L15.4233 13.0838C14.5881 13.9694 12.5099 15.3011 11.456 15.7278C11.456 15.7375 10.8295 15.9913 10.5312 16H10.4915C10.0341 16 9.60653 15.7482 9.38778 15.34C9.26847 15.1154 9.15909 14.4642 9.14915 14.4554C9.05966 13.8712 9 12.9769 9 11.9951C9 10.9657 9.05966 10.0316 9.16903 9.45808C9.16903 9.44836 9.27841 8.92345 9.34801 8.74848C9.45739 8.49672 9.65625 8.2819 9.90483 8.14581C10.1037 8.04957 10.3125 8 10.5312 8C10.7599 8.01069 11.1875 8.15553 11.3565 8.22357C12.4702 8.65128 14.598 10.051 15.4134 10.9064C15.5526 11.0425 15.7017 11.2087 15.7415 11.2467C15.9105 11.4605 16 11.723 16 12.0049Z"
                    fill="#003056"
                  />
                </svg>
              </button> */}
            </div>

            {/* <p className="hidden text-sm font-medium tracking-wider text-purple-900 uppercase sm:block lg:hidden xl:block mt-14">
              {f({
                id: "Home.CambrigdeInternationalSchool",
                defaultMessage: "Cambrigde International School",
              })}
            </p> */}
          </motion.div>
          <div className="flex flex-col justify-center max-w-3xl mx-auto mt-16 lg:mt-0 lg:max-w-none lg:col-span-6">
            <div className="relative">
              <CustomImage
                className="w-full h-auto"
                src="/images/kindergarten.jpg"
                alt="Bright Photo Collage"
                width={624}
                height={416}
              />
            </div>
          </div>
        </div>
      </section>
      <VideoPopup showPopup={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default HomeHero;
