"use client";

import { useIntl } from "react-intl";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const Certificate = ({ id }) => {
  const { formatMessage: f } = useIntl();

  return (
    <section
      id={id}
      className="relative w-full px-4 sm:px-6 xl:px-8 py-16 bg-gradient-to-br from-slate-50 to-gray-100"
      style={{ minHeight: "40vh" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-lg hover:bg-blue-200 transition-colors">
                <Award className="w-4 h-4 mr-2" />
                {f({
                  id: "Program.CambridgeCertificate",
                  defaultMessage: "Cambridge Certificate",
                })}
              </div>

              <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Academic{" "}
                <span className="text-blue-600 relative">
                  Pathways
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-blue-200 rounded-full"></div>
                </span>
              </h2>
            </div>

            <div className="">
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Empower Learning System offers a comprehensive range of
                  education programs designed to cultivate knowledge and skills
                  from early childhood through higher secondary education. Our
                  Nursery and Primary programs focus on fostering holistic
                  development and a love for learning, laying a strong academic
                  foundation.
                </p>

                <p className="text-lg leading-relaxed">
                  As students progress to Secondary and Higher Secondary levels,
                  we provide a rigorous curriculum that encourages critical
                  thinking, creativity, and personal growth, preparing them for
                  future academic pursuits and successful careers.
                </p>

                <p className="text-lg leading-relaxed font-medium text-gray-800">
                  With a commitment to individualized support and character
                  development, Empower Learning System equips students to thrive
                  in an ever-changing world.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-100 rounded-full opacity-20 translate-y-24 -translate-x-24"></div>
    </section>
  );
};

export default Certificate;
