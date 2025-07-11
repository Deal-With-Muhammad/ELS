import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  Users,
  BookOpen,
  Heart,
  Lock,
  Eye,
  FileText,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Globe,
  Star,
} from "lucide-react";
import { getNavigation } from "../lib/api";
import Layout from "../components/layout";

const TermsAndPolicy = ({ navigations }) => {
  const [activeSection, setActiveSection] = useState("terms");
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How do you protect student information?",
      answer:
        "We implement industry-standard security measures including encryption, secure servers, and limited access protocols to protect all student data.",
    },
    {
      question: "Can I withdraw my consent for data processing?",
      answer:
        "Yes, you can withdraw your consent at any time by contacting us directly. We will process your request within 30 days.",
    },
    {
      question: "What happens to my data if I leave the program?",
      answer:
        "We retain academic records as required by law and educational standards, but personal data is anonymized or deleted based on your preferences.",
    },
    {
      question: "Do you share information with third parties?",
      answer:
        "We only share information with educational partners, government agencies when required by law, and service providers who help us deliver our programs.",
    },
  ];

  const PolicySection = ({ icon: Icon, title, children }) => (
    <div className="bg-white rounded-lg shadow-sm p-8 mb-6 border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 rounded-full p-3 mr-4">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
        {children}
      </div>
    </div>
  );

  return (
    <Layout navigations={navigations}>
      <div className="min-h-screen bg-gray-50">
        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          {activeSection === "terms" && (
            <div className="space-y-6">
              <PolicySection icon={BookOpen} title="Terms of Service">
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    Welcome to ELS
                  </h3>
                  <p className="text-blue-700">
                    These terms govern your use of our educational services and
                    programs designed to support refugees and marginalized
                    communities in Malaysia through compassionate education.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  1. Our Mission & Educational Programs
                </h3>
                <p className="text-gray-700 mb-4">
                  Empower Learning System (ELS) is dedicated to meeting the
                  critical needs of refugees in Malaysia. We provide inclusive
                  educational opportunities including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong>
                      Cambridge Primary and Secondary Education (IGCSE)
                    </strong>{" "}
                    - International standard education
                  </li>
                  <li>
                    <strong>GED Preparation</strong> - Alternative pathway to
                    secondary education
                  </li>
                  <li>
                    <strong>Higher Education Support</strong> - University
                    enrollment assistance
                  </li>
                  <li>
                    <strong>Skills Development Programs</strong> - Practical
                    skills for employment
                  </li>
                  <li>
                    <strong>Nursery Education</strong> - Early childhood
                    development
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  2. Enrollment & Eligibility
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Who Can Enroll:
                  </h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Refugees and asylum seekers in Malaysia</li>
                    <li>
                      Children, youth, and adults with limited financial
                      capacity
                    </li>
                    <li>
                      Individuals committed to rebuilding their lives through
                      education
                    </li>
                    <li>
                      Students willing to commit to regular attendance and
                      participation
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  3. Student Responsibilities
                </h3>
                <p className="text-gray-700 mb-4">
                  As part of our supportive learning community, students are
                  expected to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Treat all community members with respect and dignity</li>
                  <li>
                    Attend classes regularly and engage actively in learning
                  </li>
                  <li>Complete assignments and participate in assessments</li>
                  <li>Follow safety protocols and school guidelines</li>
                  <li>
                    Embrace the diverse, multicultural learning environment
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  4. Our Commitment to You
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">
                      Compassionate Support
                    </h4>
                    <p className="text-red-700">
                      We understand the unique challenges faced by refugees and
                      provide emotional and academic support.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Quality Education
                    </h4>
                    <p className="text-blue-700">
                      Our programs meet international standards with experienced
                      educators who care about your success.
                    </p>
                  </div>
                </div>
              </PolicySection>

              <PolicySection
                icon={Heart}
                title="Code of Conduct - Building Our Community"
              >
                <p className="text-gray-700 mb-6">
                  ELS is more than a school - we are a family. Our code of
                  conduct reflects our values of compassion, respect, and mutual
                  support.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Values in Action
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800">Compassion</h4>
                    <p className="text-sm text-gray-600">
                      Understanding and empathy for all
                    </p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800">Unity</h4>
                    <p className="text-sm text-gray-600">
                      Celebrating our diversity
                    </p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800">Excellence</h4>
                    <p className="text-sm text-gray-600">
                      Striving for the best in all we do
                    </p>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Expected Behavior:
                </h4>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>
                    Show kindness and respect to all students, teachers, and
                    staff
                  </li>
                  <li>Embrace and celebrate cultural diversity</li>
                  <li>Support fellow students in their educational journey</li>
                  <li>Communicate honestly and constructively</li>
                  <li>Take care of our shared learning environment</li>
                </ul>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    Remember
                  </h4>
                  <p className="text-yellow-700">
                    "All of teachers and support staff at ELS know and call each
                    of us by name, they understand our families, our hobbies and
                    listen to us all the time. We are a happy family."
                  </p>
                </div>
              </PolicySection>
            </div>
          )}

          {activeSection === "privacy" && (
            <div className="space-y-6">
              <PolicySection icon={Lock} title="Privacy Policy">
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Your Privacy Matters
                  </h3>
                  <p className="text-green-700">
                    We understand that as refugees, privacy and security are
                    especially important. This policy explains how we protect
                    your personal information with the utmost care and respect.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Information We Collect
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-3">
                      Personal Information
                    </h4>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Name and contact details</li>
                      <li>• Age and educational background</li>
                      <li>• Emergency contact information</li>
                      <li>• Required enrollment documentation</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-3">
                      Educational Records
                    </h4>
                    <ul className="text-purple-700 space-y-1 text-sm">
                      <li>• Academic performance and progress</li>
                      <li>• Attendance records</li>
                      <li>• Assessment results</li>
                      <li>• Support service needs</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  How We Use Your Information
                </h3>
                <p className="text-gray-700 mb-4">
                  We use your information solely to provide the best educational
                  experience and support:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>
                    Deliver high-quality educational programs (Cambridge, IGCSE,
                    GED)
                  </li>
                  <li>
                    Track your academic progress and celebrate achievements
                  </li>
                  <li>Provide personalized support and guidance</li>
                  <li>Maintain a safe and secure learning environment</li>
                  <li>
                    Connect you with higher education and employment
                    opportunities
                  </li>
                  <li>Comply with educational and legal requirements</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Special Protections for Our Community
                </h3>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">
                    Understanding Your Situation
                  </h4>
                  <p className="text-red-700 mb-4">
                    We recognize the sensitive nature of refugee status and
                    implement additional protections:
                  </p>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Strict confidentiality of your refugee status</li>
                    <li>• Limited access to personal information</li>
                    <li>• Secure storage of all documentation</li>
                    <li>
                      • No sharing of information without explicit consent
                    </li>
                  </ul>
                </div>
              </PolicySection>

              <PolicySection icon={Shield} title="Data Protection & Security">
                <p className="text-gray-700 mb-6">
                  Your safety and privacy are our top priorities. We implement
                  multiple layers of security to protect your information.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Technical Security
                    </h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Encrypted data storage</li>
                      <li>• Secure server infrastructure</li>
                      <li>• Regular security audits</li>
                      <li>• Access controls and monitoring</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Operational Security
                    </h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Staff training on privacy</li>
                      <li>• Limited access protocols</li>
                      <li>• Confidentiality agreements</li>
                      <li>• Regular policy updates</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Your Rights
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">
                      Access & Review
                    </h4>
                    <p className="text-blue-700 text-sm">
                      Request copies of your personal information
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">
                      Correct & Update
                    </h4>
                    <p className="text-blue-700 text-sm">
                      Ask us to correct any inaccurate information
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">
                      Data Portability
                    </h4>
                    <p className="text-green-700 text-sm">
                      Request transfer of your data
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">
                      Withdraw Consent
                    </h4>
                    <p className="text-purple-700 text-sm">
                      Withdraw your consent for processing
                    </p>
                  </div>
                </div>
              </PolicySection>
            </div>
          )}

          {activeSection === "faq" && (
            <div className="space-y-6">
              <PolicySection icon={Eye} title="Frequently Asked Questions">
                <p className="text-gray-700 mb-8">
                  We understand that privacy and terms can seem complex. Here
                  are answers to common questions from our refugee community.
                </p>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-blue-50 transition-colors flex justify-between items-center"
                      >
                        <span className="font-medium text-gray-800">
                          {faq.question}
                        </span>
                        {expandedFAQ === index ? (
                          <ChevronUp className="w-5 h-5 text-blue-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-blue-500" />
                        )}
                      </button>
                      {expandedFAQ === index && (
                        <div className="px-6 py-4 bg-white border-t border-gray-200">
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    Still Have Questions?
                  </h3>
                  <p className="text-blue-700">
                    Don't hesitate to reach out. Our team understands the unique
                    challenges you face and is here to help in your language
                    when possible.
                  </p>
                </div>
              </PolicySection>
            </div>
          )}
        </div>

        {/* Contact Section */}
      </div>
    </Layout>
  );
};

export default TermsAndPolicy;

export async function getStaticProps({ locale }) {
  const navigations = (await getNavigation(locale)) ?? [];
  return {
    props: { navigations },
    revalidate: 1,
  };
}
