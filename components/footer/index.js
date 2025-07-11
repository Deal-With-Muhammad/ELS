import { getYear } from "date-fns";
import { Facebook, Instagram, Twitter, X, Youtube } from "lucide-react";
import Link from "next/link";
import { useIntl } from "react-intl";

export default function Footer() {
  const { formatMessage: f } = useIntl();
  const year = getYear(new Date());

  const QUICK_LINKS = [
    {
      title: f({
        id: "Home.OurGallery",
        defaultMessage: "Gallery",
      }),
      path: "/gallery",
    },
    {
      title: f({
        id: "Home.EducationProgram",
        defaultMessage: "Programs",
      }),
      path: "/programs",
    },
    {
      title: f({
        id: "Home.NewsAndEvents",
        defaultMessage: "FAQ",
      }),
      path: "/faq",
    },
  ];

  const PROGRAMS = [
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
        defaultMessage: "Primary School",
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
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-50 to-blue-50 border-t border-slate-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/">
              <a className="inline-block">
                <img
                  src="/images/logo.png"
                  alt="ELS School"
                  className="h-20 w-auto"
                />
              </a>
            </Link>

            <div className="max-w-md">
              <p className="text-slate-600 leading-relaxed">
                {f({
                  id: "Footer.Description",
                  defaultMessage:
                    "Empowering young minds through quality education and innovative learning experiences.",
                })}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                  <svg
                    className="w-5 h-5 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-600">
                    11A, Jalan Nakhoda Kanan, Kampung Nakhoda
                    <br />
                    68100 Batu Caves, Selangor, Malaysia
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5">
                  <svg
                    className="w-5 h-5 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:contact@elsystem.org"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  contact@elsystem.org
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5">
                  <svg
                    className="w-5 h-5 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <a
                  href="tel:+60197576113"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  +60 19757 6113
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              {f({
                id: "Footer.QuickLinks",
                defaultMessage: "Quick Links",
              })}
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <a className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              {f({
                id: "Footer.Programs",
                defaultMessage: "Programs",
              })}
            </h3>
            <ul className="space-y-3">
              {PROGRAMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <a className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-slate-600">
              © {year} ELS School. All rights reserved.
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <X className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
