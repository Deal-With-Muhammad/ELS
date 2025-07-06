"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  GraduationCap,
  Users,
  Award,
  Briefcase,
  BookOpen,
  Target,
  Globe,
  TrendingUp,
} from "lucide-react";

export default function HigherEducationPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="px-4 pt-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#program"
            passHref
            className="inline-flex items-center text-blue-700
            hover:text-blue-900 transition-colors"
          >
            <a
              className="inline-flex text-blue-700
            hover:text-blue-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2 mt-1" />
              Back to Programs
            </a>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: "50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-blue-900 sm:text-6xl xl:text-7xl">
              Higher Education & Skills Development
            </h1>
            <p className="max-w-3xl mx-auto mt-6 text-xl text-purple-800 leading-relaxed">
              Comprehensive support for university enrollment and skills
              development, empowering students to achieve their academic and
              professional goals with confidence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Higher Education Support Section */}
      <div className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
              Higher Education Support
            </h2>
            <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
              <p className="text-lg text-purple-800 leading-relaxed mb-8">
                At Empower Learning System, we are dedicated to guiding students
                as they transition to higher education. Our support includes:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-blue-800">
                      University Enrollment Assistance
                    </h3>
                  </div>
                  <p className="text-purple-800">
                    We provide comprehensive guidance on selecting suitable
                    universities, understanding admission requirements, and
                    completing application processes.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-blue-800">
                      Personalized Counseling
                    </h3>
                  </div>
                  <p className="text-purple-800">
                    Our experienced advisors offer one-on-one counseling
                    sessions to help students identify their academic interests
                    and career aspirations, ensuring they find the right fit for
                    their higher education journey.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-blue-800">
                      Scholarship and Financial Aid Guidance
                    </h3>
                  </div>
                  <p className="text-purple-800">
                    We assist students in exploring scholarship opportunities
                    and financial aid options, making higher education more
                    accessible and affordable.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-blue-800">
                      Preparation for University Life
                    </h3>
                  </div>
                  <p className="text-purple-800">
                    We offer resources and workshops to prepare students for the
                    academic and social aspects of university life, helping them
                    acclimate to their new environment.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Development Section */}
          <motion.div
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
              Skills Development Initiatives
            </h2>
            <div className="bg-blue-900 rounded-3xl p-8 text-white mb-8">
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                In addition to academic support, we emphasize the importance of
                skills development to enhance employability. Our initiatives
                include:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-800 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-blue-200 mr-3" />
                    <h3 className="text-xl font-bold text-white">
                      Workshops and Training Programs
                    </h3>
                  </div>
                  <p className="text-blue-100">
                    We organize workshops focused on essential skills such as
                    communication, teamwork, and problem-solving, equipping
                    students with the competencies needed in today's job market.
                  </p>
                </div>

                <div className="bg-blue-800 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-6 h-6 text-blue-200 mr-3" />
                    <h3 className="text-xl font-bold text-white">
                      Internship Opportunities
                    </h3>
                  </div>
                  <p className="text-blue-100">
                    We connect students with internship programs that provide
                    practical experience, allowing them to apply their knowledge
                    in real-world settings and build professional networks.
                  </p>
                </div>

                <div className="bg-blue-800 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-blue-200 mr-3" />
                    <h3 className="text-xl font-bold text-white">
                      Career Counseling
                    </h3>
                  </div>
                  <p className="text-blue-100">
                    Our dedicated career advisors assist students in exploring
                    various career paths, preparing resumes, and honing
                    interview skills to increase their chances of securing
                    desirable positions.
                  </p>
                </div>

                <div className="bg-blue-800 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-200 mr-3" />
                    <h3 className="text-xl font-bold text-white">
                      Lifelong Learning
                    </h3>
                  </div>
                  <p className="text-blue-100">
                    We encourage students to embrace continuous learning through
                    online courses and certifications, fostering a mindset that
                    values personal and professional growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
              <p className="text-xl leading-relaxed">
                At Empower Learning System, our Higher Education and Skills
                Development programs empower students to achieve their academic
                and professional goals. We are committed to providing the
                resources and support necessary for success in higher education
                and beyond, ensuring our students are well-prepared for the
                challenges of the future.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
