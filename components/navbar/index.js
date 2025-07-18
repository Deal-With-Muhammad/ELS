/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import DropdownLink from "./dropdown-link";
import { useState } from "react";
import { SubNav } from "./sub-nav";
import { useIntl } from "react-intl";
import Link from "next/link";

const Navbar = ({
  navigations,
  className,
  showMobileMenu,
  handleClickMobileMenu,
}) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { formatMessage: f } = useIntl();
  const [currentSlug, setCurrentSlug] = useState(pathname.slice(1) || "home");
  const formatNavigations = (navigations = []) => {
    const result = [];
    for (let item of navigations) {
      const subPagesNavigation = item?.subPagesCollection?.items ?? [];
      let newNavigation = {};
      switch (item.slug) {
        case "home":
          newNavigation = {
            ...item,
            subPages: [
              {
                title: f({
                  id: "Home.EducationProgram",
                  defaultMessage: "Education Program",
                }),
                href: "/#program",
              },
              {
                title: f({
                  id: "Home.OurGallery",
                  defaultMessage: "Our Gallery",
                }),
                href: "/#gallery",
              },
              {
                title: f({
                  id: "Home.OurStories",
                  defaultMessage: "Our Stories",
                }),
                href: "/#parents",
              },
              {
                title: f({
                  id: "Home.FAQ",
                  defaultMessage: "FAQ",
                }),
                href: "/#faq",
              },
              ...subPagesNavigation,
            ],
          };
          result.push(newNavigation);
          break;
        case "about":
          newNavigation = {
            ...item,
            subPages: [
              {
                title: f({
                  id: "About.VisionMission",
                  defaultMessage: "Vision & Mission",
                }),
                href: "/about#vision",
              },
              {
                title: f({
                  id: "About.CoreValues",
                  defaultMessage: "Core values",
                }),
                href: "/about#core",
              },
              {
                title: f({
                  id: "About.MessageFromThePrincipal",
                  defaultMessage: "Message from Principal",
                }),
                href: "/about#message",
              },
              {
                title: f({
                  id: "About.Founders",
                  defaultMessage: "Founders",
                }),
                href: "/about#founder",
              },
              {
                title: f({
                  id: "About.Team",
                  defaultMessage: "ELS Team",
                }),
                href: "/teachers",
              },
              ...subPagesNavigation,
              {
                title: f({
                  id: "Home.Yearbook",
                  defaultMessage: "Yearbook",
                }),
                href: "/yearbook",
              },
            ],
          };
          result.push(newNavigation);
          break;
        case "programs":
          newNavigation = {
            ...item,
            subPages: [
              {
                title: f({
                  id: "Home.EducationPathway",
                  defaultMessage: "Education Pathway",
                }),
                href: "/pages/education-pathway",
              },
              {
                title: f({
                  id: "Home.Kindergarten",
                  defaultMessage: "Kindergarten",
                }),
                href: "/programs/kindergarten",
              },
              {
                title: f({
                  id: "Home.PrimarySchool",
                  defaultMessage: "Primary",
                }),
                href: "/programs/primary",
              },
              {
                title: f({
                  id: "Home.Secondary",
                  defaultMessage: "Secondary",
                }),
                href: "/programs/secondary",
              },
              {
                title: f({
                  id: "Home.HighSchool",
                  defaultMessage: "High School",
                }),
                href: "/programs/high-school",
              },
              ...subPagesNavigation,
            ],
          };
          result.push(newNavigation);
          break;
        case "parents":
          newNavigation = {
            ...item,
            subPages: [
              ...subPagesNavigation,
              {
                title: f({
                  id: "Home.ParentHandbook",
                  defaultMessage: "Parent Handbook",
                }),
                href: "/handbook",
              },
            ],
          };
          result.push(newNavigation);
          break;

        default:
          newNavigation = {
            ...item,
            subPages: subPagesNavigation,
          };
          result.push(newNavigation);
      }
    }
    return result;
  };
  const renderNavigations = formatNavigations(navigations);

  return (
    <div className={className}>
      <header className="h-[150px] pt-2 hidden sm:block shadow_navigation">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <a href="#">
                <img className="h-[140px]" src="/images/logo.png" alt="" />
              </a>
            </Link>

            <nav className="bg-transparent ml-9">
              <div className={`items-center justify-between hidden md:flex`}>
                {renderNavigations?.map((item, idx) => (
                  <div
                    className="mx-3"
                    key={`menu-${item.path}-${idx}`}
                    onClick={() => setCurrentSlug(item.slug)}
                  >
                    <DropdownLink
                      title={item.title}
                      path={item.path}
                      subPages={item?.subPages}
                    />
                  </div>
                ))}
              </div>
            </nav>
          </div>

          <div>
            <a
              href="https://lms.elsystem.org/index.php"
              target="_blank"
              type="button"
              rel="noreferrer"
              className="mt-6 text-lg font-medium bg-white hover:bg-primary-100 hover:text-white sm:mt-0 text-primary-100 sm:ml-6 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded_button group cursor-pointer border-solid border-2 border-primary-100"
            >
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2"
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
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px]"></div>
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto">
        <nav className="bg-transparent">
          {/* <div className={`items-center justify-between hidden md:flex`}>
            {renderNavigations?.map((item, idx) => (
              <div
                key={`menu-${item.path}-${idx}`}
                onClick={() => setCurrentSlug(item.slug)}
              >
                <DropdownLink
                  title={item.title}
                  path={item.path}
                  subPages={item?.subPages}
                />
              </div>
            ))}
          </div> */}
          {/* Mobile menu */}
          <div className="flex items-center justify-between w-full overflow-y-auto shadow pb-3 sm:hidden bg-white">
            <div className="block ml-6 mt-5 sm:hidden">
              {/* Button */}
              <button
                className="relative z-50 w-6 h-5 transition duration-500 ease-in-out transform rotate-0 cursor-pointer group focus:outline-none"
                onClick={handleClickMobileMenu}
              >
                {!showMobileMenu ? (
                  <>
                    <span className="absolute top-0 left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-primary-100 rounded-full opacity-100 group-hover:bg-purple-600"></span>
                    <span className="absolute left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-primary-100 rounded-full opacity-100 top-2 group-hover:bg-purple-600"></span>
                    <span className="absolute left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-primary-100 rounded-full opacity-100 top-2 group-hover:bg-purple-600"></span>
                    <span className="absolute left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-primary-100 rounded-full opacity-100 top-4 group-hover:bg-purple-600"></span>
                  </>
                ) : (
                  <>
                    {/* <span className="absolute top-0 left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-white rounded-full opacity-100 top-2 w-0 left-1/2"></span>
                    <span className="absolute left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-white rounded-full opacity-100 top-2 rotate-45"></span>
                    <span className="absolute left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-white rounded-full opacity-100 top-2 -rotate-45"></span>
                    <span className="absolute left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-white rounded-full opacity-100 top-4 top-2 w-0 left-1/2"></span> */}
                  </>
                )}
              </button>
              {/* Menu */}
              {showMobileMenu && (
                <>
                  <div className="absolute top-0 left-0 bg-black w-screen h-full  z-10 opacity-50"></div>
                  <div className="absolute top-0 left-0 z-40 w-11/12 px-4 py-4 overflow-y-scroll bg-white sm:px-8 overflow-x-hidden opacity-100">
                    <div className="flex justify-between">
                      <div
                        onClick={() => {
                          handleClickMobileMenu();
                        }}
                      >
                        <Link href="/">
                          <a>
                            <img
                              src="/images/logo.png"
                              alt="Bright"
                              className="h-[48px]"
                            />
                          </a>
                        </Link>
                      </div>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-primary-100 mt-5"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick={handleClickMobileMenu}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <path d="M10 10l4 4m0 -4l-4 4" />
                      </svg>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full h-full mt-4 ">
                      <div className="flex flex-col w-full space-y-6 justify-evenly">
                        {renderNavigations?.map((item, idx) => (
                          <div
                            key={`menu-${item.path}-${idx}`}
                            onClick={handleClickMobileMenu}
                          >
                            <DropdownLink
                              title={item.title}
                              path={item.path}
                              subPages={item?.subPages}
                              color="text-primary-100"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className=" w-52 sm:hidden sm:w-52 flex justify-center">
              <Link href="/">
                <a href="#">
                  <img
                    src="/images/logo.png"
                    alt="Bright"
                    className="h-[80px] mt-3 mr-8"
                  />
                </a>
              </Link>
            </div>
            <div></div>
            <div className="absolute right-1  mt-4 mr-4 sm:hidden">
              <a
                href="https://lms.elsystem.org/index.php"
                target="_blank"
                type="button"
                rel="noreferrer"
                className=" text-base font-medium bg-white hover:bg-primary-100 hover:text-white sm:mt-0 text-primary-100 sm:ml-6 relative leading-normal inline-flex items-center justify-center px-4 py-3 duration-300 ease-in-out rounded_button group cursor-pointer border-solid border-2 border-primary-100"
              >
                Login
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2"
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
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px]"></div>
              </a>
            </div>
          </div>
        </nav>
      </div>
      <SubNav slug={currentSlug} />
    </div>
  );
};

export default Navbar;
