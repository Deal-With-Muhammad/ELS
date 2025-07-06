"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  GraduationCap,
  Target,
  Monitor,
  BookCheck,
  Users,
  Globe,
} from "lucide-react";

export default function SecondaryPage() {
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
              Secondary & Higher Secondary Program
            </h1>
            <p className="max-w-3xl mx-auto mt-6 text-xl text-purple-800 leading-relaxed">
              Comprehensive preparation for IGCSE examinations and GED
              certification, empowering students with the knowledge and skills
              needed for academic and career success.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Secondary Education Section */}
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
              Secondary Education (IGCSE Preparation)
            </h2>
            <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
              <p className="text-lg text-purple-800 leading-relaxed mb-8">
                Our Secondary Education program is dedicated to preparing
                students for the International General Certificate of Secondary
                Education (IGCSE). Key features include:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <BookCheck className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-blue-800">
                      Comprehensive Curriculum
                    </h3>
                  </div>
                  <p className="text-purple-800">
                    We offer a wide range of subjects aligned with the IGCSE
                    syllabus, ensuring students are well-prepared for their
                    examinations.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-blue-800">
                      Critical Thinking and Problem-Solving
                    </h3>
                  </div>
                  <p className="text-purple-800">
                    Our teaching methods encourage students to develop
                    analytical skills, enabling them to approach problems with
                    confidence and creativity.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-blue-800">
                      Personalized Learning
                    </h3>
                  </div>
                  <p className="text-purple-800">
                    With a focus on online resources, students receive
                    individualized support through tailored learning plans that
                    address their strengths and areas for improvement.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-blue-800">
                      Mock Examinations
                    </h3>
                  </div>
                  <p className="text-purple-800">
                    Regular assessments and mock exams familiarize students with
                    the exam format, reducing anxiety and enhancing performance
                    on test day.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Higher Secondary Education Section */}
          <motion.div
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
              Higher Secondary Education (GED Preparation)
            </h2>
            <div className="bg-blue-900 rounded-3xl p-8 text-white mb-8">
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Our Higher Secondary program focuses on preparing students for
                the General Educational Development (GED) test, an alternative
                to traditional high school diplomas. Highlights include:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-800 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Monitor className="w-6 h-6 text-blue-200 mr-3" />
                    <h3 className="text-xl font-bold text-white">
                      Flexible Learning Options
                    </h3>
                  </div>
                  <p className="text-blue-100">
                    We provide an entirely online learning environment, allowing
                    students to access materials and study at their own pace.
                  </p>
                </div>

                <div className="bg-blue-800 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-blue-200 mr-3" />
                    <h3 className="text-xl font-bold text-white">
                      Skill Development
                    </h3>
                  </div>
                  <p className="text-blue-100">
                    The curriculum emphasizes essential skills in reading,
                    writing, mathematics, and science, equipping students for
                    both the GED and future academic or career pursuits.
                  </p>
                </div>

                <div className="bg-blue-800 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <BookCheck className="w-6 h-6 text-blue-200 mr-3" />
                    <h3 className="text-xl font-bold text-white">
                      Self-Paced Study
                    </h3>
                  </div>
                  <p className="text-blue-100">
                    Students can learn independently, using our comprehensive
                    online resources to navigate their educational journey and
                    achieve their goals.
                  </p>
                </div>

                <div className="bg-blue-800 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-blue-200 mr-3" />
                    <h3 className="text-xl font-bold text-white">
                      College and Career Readiness
                    </h3>
                  </div>
                  <p className="text-blue-100">
                    We prepare students not only for the GED but also for higher
                    education and the workforce, offering resources for college
                    applications and career exploration.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
              <p className="text-xl leading-relaxed">
                At Empower Learning System, our Secondary and Higher Secondary
                programs are designed to empower students with the knowledge,
                skills, and confidence they need to succeed academically and
                beyond. We are committed to fostering a love for learning and
                preparing our students for a bright future.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
