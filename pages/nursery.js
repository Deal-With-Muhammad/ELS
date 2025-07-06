"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  Users,
  Brain,
  Zap,
  Palette,
  BookOpen,
} from "lucide-react";

export default function NurseryPage() {
  return (
    <div className="min-h-screen ">
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
              Nursery & Primary Program
            </h1>
            <p className="max-w-3xl mx-auto mt-6 text-xl text-purple-800 leading-relaxed">
              Nurturing holistic development of young children through
              comprehensive nursery and primary education programs designed to
              build strong foundations for lifelong learning.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Nursery Education Section */}
      <div className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 text-center">
              Nursery Education
            </h2>
            <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
              <p className="text-lg text-purple-800 text-center leading-relaxed mb-8">
                Our Nursery Education program is designed to nurture the
                holistic development of young children, focusing on the
                following key areas:
              </p>

              <div className="flex flex-wrap justify-center  gap-6">
                <div className="bg-blue-50 w-80 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-blue-800">
                      Social Skills
                    </h3>
                  </div>
                  <p className="text-purple-800">
                    Children learn to interact with peers, developing essential
                    social skills through group activities and play.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl w-80 p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-blue-800">
                      Emotional Growth
                    </h3>
                  </div>
                  <p className="text-purple-800">
                    We provide a supportive environment that encourages
                    self-expression and emotional understanding, helping
                    children manage their feelings and build resilience.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 w-80">
                  <div className="flex items-center mb-4 ">
                    <Brain className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-blue-800">
                      Cognitive Development
                    </h3>
                  </div>
                  <p className="text-purple-800">
                    Through engaging activities, children explore concepts like
                    numbers, letters, and shapes, laying the groundwork for
                    future learning.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 w-80">
                  <div className="flex items-center mb-4">
                    <Zap className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-blue-800">
                      Physical Development
                    </h3>
                  </div>
                  <p className="text-purple-800">
                    Activities are designed to enhance fine and gross motor
                    skills, promoting physical health and coordination.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 w-80 md:col-span-2 lg:col-span-1">
                  <div className="flex items-center mb-4">
                    <Palette className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-blue-800">
                      Creative Expression
                    </h3>
                  </div>
                  <p className="text-purple-800">
                    Art, music, and imaginative play are integral, allowing
                    children to express themselves and explore their creativity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Primary Education Section */}
          <motion.div
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
              Primary Education
            </h2>
            <div className="bg-blue-900 rounded-3xl p-8 text-white mb-8">
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Building on the foundation laid in nursery, our Primary
                Education program focuses on:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-800 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-6 h-6 text-blue-200 mr-3" />
                    <h3 className="text-xl font-bold text-white">
                      Academic Excellence
                    </h3>
                  </div>
                  <p className="text-blue-100">
                    A well-rounded curriculum that includes subjects such as
                    Mathematics, Science, Language Arts, and Social Studies,
                    designed to foster critical thinking and problem-solving
                    skills.
                  </p>
                </div>

                <div className="bg-blue-800 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="w-6 h-6 text-blue-200 mr-3" />
                    <h3 className="text-xl font-bold text-white">
                      Love for Learning
                    </h3>
                  </div>
                  <p className="text-blue-100">
                    We cultivate a passion for knowledge through interactive
                    lessons, hands-on projects, and real-world connections,
                    inspiring students to become lifelong learners.
                  </p>
                </div>

                <div className="bg-blue-800 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-blue-200 mr-3" />
                    <h3 className="text-xl font-bold text-white">
                      Character Development
                    </h3>
                  </div>
                  <p className="text-blue-100">
                    Emphasis is placed on values like respect, responsibility,
                    and teamwork, guiding students to become conscientious and
                    engaged citizens.
                  </p>
                </div>

                <div className="bg-blue-800 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Brain className="w-6 h-6 text-blue-200 mr-3" />
                    <h3 className="text-xl font-bold text-white">
                      Individualized Attention
                    </h3>
                  </div>
                  <p className="text-blue-100">
                    Small class sizes allow for personalized instruction,
                    ensuring that each child's unique learning needs are met.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-blue-700 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Extracurricular Activities
                </h3>
                <p className="text-blue-100">
                  A variety of clubs and sports are offered to promote a
                  balanced education and encourage the development of new
                  interests and skills.
                </p>
              </div>
            </div>

            <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
              <p className="text-xl leading-relaxed">
                At Empower Learning System, our Nursery and Primary programs
                work together to create a nurturing, stimulating environment
                that supports each child's growth. We strive to inspire a love
                for learning, equipping our students with the skills and
                confidence they need to succeed in their educational journey and
                beyond.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
