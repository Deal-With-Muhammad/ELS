"use client";
import { useState } from "react";
import {
  GraduationCap,
  Book,
  Heart,
  Apple,
  Armchair,
  AirVent,
  SeparatorVerticalIcon as Separator,
} from "lucide-react";
import Layout from "../components/layout";
import { getNavigation } from "../lib/api";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import CheckoutForm from "../components/CheckoutForm";
import { useProjects } from "../hooks/useProjects";

export default function Fundraising({ navigations }) {
  const [selectedAmount, setSelectedAmount] = useState(200);
  const [customAmount, setCustomAmount] = useState("");
  const [allocation, setAllocation] = useState("general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { projects: projectsData, loading: projectsLoading } = useProjects();

  const projects = [
    {
      id: 1,
      title: "Arm Rest Chairs for All Campuses",
      description:
        "Providing ergonomic chairs for all students across our campuses to improve posture and concentration during lessons.",
      image: "/images/chairs.jpg",
      raised: projectsData.find((p) => p.id === "chairs")?.raised || 0,
      goal: 40000,
      icon: <Armchair className="w-6 h-6" />,
      allocation: "chairs",
    },
    {
      id: 2,
      title: "Partitions for Two Campuses",
      description:
        "Creating proper learning environments at two campuses by installing partitions to reduce noise and distractions.",
      image: "/images/Hero.jpg",
      raised: projectsData.find((p) => p.id === "partitions")?.raised || 0,
      goal: 20000,
      icon: <Separator className="w-6 h-6" />,
      allocation: "partitions",
    },
    {
      id: 3,
      title: "Textbooks Printing for AY 2025",
      description:
        "Printing curriculum materials for the 2025 academic year to ensure every student has access to quality resources.",
      image: "/images/textbook.jpg",
      raised: projectsData.find((p) => p.id === "books")?.raised || 0,
      goal: 40000,
      icon: <Book className="w-6 h-6" />,
      allocation: "books",
    },
    {
      id: 4,
      title: "Air Conditioning for 2 Campuses",
      description:
        "Installing air conditioning systems in two of our campuses to create comfortable learning environments for students.",
      image: "/images/higher.jpg",
      raised: projectsData.find((p) => p.id === "aircon")?.raised || 0,
      goal: 10000,
      icon: <AirVent className="w-6 h-6" />,
      allocation: "aircon",
    },
  ];

  const totalRaised = projects.reduce(
    (sum, project) => sum + project.raised,
    0
  );
  const totalGoal = projects.reduce((sum, project) => sum + project.goal, 0);
  const overallProgress = (totalRaised / totalGoal) * 100;

  const amountOptions = [50, 100, 200, 500, 1000];

  const getAllocationLabel = (value) => {
    const labels = {
      general: "Where Most Needed",
      sponsor: "Student Sponsorship",
      chairs: "Arm Rest Chairs",
      partitions: "Classroom Partitions",
      books: "Textbooks Printing",
      aircon: "Air Conditioning",
    };
    return labels[value] || value;
  };

  return (
    <>
      <Layout navigations={navigations}>
        <AnimationRevealPage>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-[#2c3e50]/85 to-[#2c3e50]/85 text-white py-32">
            <div
              className="absolute inset-0 bg-fixed bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/support.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2c3e50]/85 to-[#2c3e50]/85" />
            <div className="relative max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Education Without Borders
              </h1>
              <p className="text-xl  mb-8 opacity-90 max-w-3xl mx-auto">
                Providing quality education to refugee children in Malaysia
                where they have no access to public schools. Your support
                creates brighter futures.
              </p>
              {/* Progress Container */}
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-lg">
                    Raised: RM {totalRaised.toLocaleString()}
                  </span>
                  <span className="font-semibold text-lg">
                    Goal: RM {totalGoal.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-5 mb-4">
                  <div
                    className="bg-[#2746ae] h-5 rounded-full transition-all duration-1000"
                    style={{ width: `${overallProgress}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm opacity-80">
                  <span>{overallProgress.toFixed(1)}% Funded</span>
                  <span>284 Donations</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#sponsor"
                  className="bg-white text-black px-8 py-4 rounded-full font-semibold transition-all hover:transform hover:-translate-y-1 shadow-lg"
                >
                  Sponsor a Student
                </a>
                <a
                  href="#projects"
                  className="bg-primary-100 hover:bg-[#1a4370] text-white px-8 py-4 rounded-full font-semibold transition-all hover:transform hover:-translate-y-1 shadow-lg"
                >
                  Support Our Projects
                </a>
              </div>
            </div>
          </section>

          {/* Challenge Section */}
          <section id="challenge" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2c5f9e] mb-4">
                  The Challenge We Face
                </h2>
                <p className="text-xl text-[#6c757d] max-w-3xl mx-auto">
                  Malaysia hosts over 180,000 refugees but is not a signatory to
                  the UN Refugee Convention
                </p>
                <div className="w-20 h-1 bg-[#2746ae] mx-auto mt-6 rounded-full" />
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                  <p className="text-lg text-[#2c3e50] leading-relaxed">
                    Refugee children in Malaysia face significant barriers to
                    education. Without access to public schools, learning
                    centers like ours become their only opportunity for
                    education and a better future.
                  </p>
                  <div className="bg-[#e3f2fd] border-l-4 border-[#2c5f9e] p-6 rounded-r-lg">
                    <p className="text-[#2c3e50] font-medium">
                      As a non-signatory to the UN Refugee Convention, Malaysia
                      does not provide formal education to refugee children.
                      This leaves thousands of young minds without access to
                      schooling.
                    </p>
                  </div>
                  <p className="text-lg text-[#2c3e50] leading-relaxed">
                    Our learning center serves as a beacon of hope, providing
                    education to refugee children who would otherwise be left
                    behind. We offer a structured curriculum, trained teachers,
                    and a safe learning environment for students from diverse
                    backgrounds.
                  </p>
                  <p className="text-lg text-[#2c3e50] leading-relaxed">
                    With limited resources and growing needs, we rely on the
                    generosity of donors like you to continue our mission of
                    providing education without borders.
                  </p>
                </div>
                <div className="flex-1">
                  <div
                    className="h-96 rounded-xl shadow-xl bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/images/challenges.jpg')",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 bg-[#f8f9fa]">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2c5f9e] mb-4">
                  Choose Your Impact
                </h2>
                <p className="text-xl text-[#6c757d] max-w-3xl mx-auto">
                  See exactly how your donation transforms lives through our
                  targeted programs
                </p>
                <div className="w-20 h-1 bg-[#2746ae] mx-auto mt-6 rounded-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => {
                  const progress = (project.raised / project.goal) * 100;
                  return (
                    <div
                      key={project.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${
                          index * 0.1
                        }s both`,
                      }}
                    >
                      <div
                        className="h-48 bg-cover bg-center relative"
                        style={{ backgroundImage: `url('${project.image}')` }}
                      >
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                          {project.icon}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#2c5f9e] mb-3">
                          {project.title}
                        </h3>
                        <p className="text-[#6c757d] mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[#2746ae] font-bold text-lg">
                            RM {project.raised.toLocaleString()}
                          </span>
                          <span className="text-[#6c757d] font-medium">
                            Goal: RM {project.goal.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                          <div
                            className="bg-[#2746ae] h-3 rounded-full transition-all duration-1000"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <div className="flex justify-between items-center mb-4 text-sm text-[#6c757d]">
                          <span>{progress.toFixed(1)}% Complete</span>
                          <span>
                            RM{" "}
                            {(project.goal - project.raised).toLocaleString()}{" "}
                            remaining
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            setAllocation(project.allocation);
                            document
                              .getElementById("donate")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="w-full bg-[#2c5f9e] hover:bg-[#1a4370] text-white py-3 rounded-lg font-semibold transition-all hover:transform hover:-translate-y-1"
                        >
                          Support this Project
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Sponsorship Section */}
          <section id="sponsor" className="py-10 bg-[#fff3e0]">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2c5f9e] mb-4">
                  Sponsor a Student
                </h2>
                <p className="text-xl text-[#6c757d] max-w-3xl mx-auto">
                  Transform a child's life through education
                </p>
                <div className="w-20 h-1 bg-[#2746ae] mx-auto mt-6 rounded-full" />
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div
                  className="flex-1 h-96 rounded-xl shadow-xl bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/sponsor.jpg')",
                  }}
                />
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-[#2c5f9e]">
                    For just RM 100 per month, you can sponsor a refugee child's
                    education
                  </h3>
                  <p className="text-lg text-[#2c3e50] leading-relaxed">
                    Your sponsorship provides a child with access to quality
                    education, essential learning materials, and a supportive
                    environment to thrive.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Book className="w-5 h-5" />,
                        title: "Education Materials",
                        desc: "Textbooks, notebooks, and learning resources",
                      },
                      {
                        icon: <GraduationCap className="w-5 h-5" />,
                        title: "Qualified Teachers",
                        desc: "Support for our dedicated teaching staff",
                      },

                      {
                        icon: <Heart className="w-5 h-5" />,
                        title: "Personal Connection",
                        desc: "Receive updates and letters from your sponsored student",
                      },
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="bg-[#e8f5e9] w-10 h-10 rounded-full flex items-center justify-center text-[#2746ae] flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#2c5f9e] mb-1">
                            {benefit.title}
                          </h4>
                          <p className="text-[#6c757d]">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#donate"
                    className="inline-block bg-primary-100  text-white px-8 py-4 rounded-full font-semibold transition-all hover:transform hover:-translate-y-1 shadow-lg"
                  >
                    Sponsor a Student Today
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Donation Section */}
          <section id="donate" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-2">
                <h2 className="text-4xl md:text-4xl font-bold text-[#2c5f9e] mb-4">
                  Make a Contribution
                </h2>
                <p className="text-xl text-[#6c757d] max-w-3xl mx-auto">
                  Every contribution makes a difference. Choose how you'd like
                  to support.
                </p>
                <div className="w-20 h-1 bg-[#2746ae] mx-auto rounded-full" />
              </div>
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Donation Form */}
                <div className="flex-1 bg-white p-8 py-3 rounded-xl shadow-lg">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[#2c3e50] font-semibold mb-3">
                        Select Amount (RM)
                      </label>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                        {amountOptions.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => setSelectedAmount(amount)}
                            className={`p-2 border-2 rounded-lg font-semibold transition-all ${
                              selectedAmount === amount
                                ? "border-[#2c5f9e] bg-[#2c5f9e]/5 text-[#2c5f9e]"
                                : "border-gray-300 hover:border-[#2c5f9e] hover:bg-[#2c5f9e]/5"
                            }`}
                          >
                            {amount}
                          </button>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <input
                          type="number"
                          placeholder="Other amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="flex-1 p-2 border border-gray-300 rounded-lg focus:border-[#2c5f9e] focus:outline-none focus:ring-2 focus:ring-[#2c5f9e]/20"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedAmount(
                              Number.parseInt(customAmount) || 0
                            )
                          }
                          className="bg-[#2c5f9e] hover:bg-[#1a4370] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                        >
                          Use
                        </button>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="allocation"
                        className="block text-[#2c3e50] font-semibold mb-2"
                      >
                        Allocation
                      </label>
                      <select
                        id="allocation"
                        value={allocation}
                        onChange={(e) => setAllocation(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#2c5f9e] focus:outline-none focus:ring-2 focus:ring-[#2c5f9e]/20"
                      >
                        <option value="general">Where Most Needed</option>
                        <option value="sponsor">Student Sponsorship</option>
                        <option value="chairs">Arm Rest Chairs</option>
                        <option value="partitions">Classroom Partitions</option>
                        <option value="books">Textbooks Printing</option>
                        <option value="aircon">Air Conditioning</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[#2c3e50] font-semibold mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#2c5f9e] focus:outline-none focus:ring-2 focus:ring-[#2c5f9e]/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[#2c3e50] font-semibold mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#2c5f9e] focus:outline-none focus:ring-2 focus:ring-[#2c5f9e]/20"
                      />
                    </div>

                    {/* Display selected donation details */}
                    {selectedAmount > 0 && name && email && (
                      <div className="bg-[#f8f9fa] rounded-lg p-4 border">
                        <h4 className="font-semibold text-[#2c3e50] mb-2">
                          Summary:
                        </h4>
                        <p className="text-sm text-[#6c757d]">
                          <strong>Amount:</strong> RM {selectedAmount}
                        </p>
                        <p className="text-sm text-[#6c757d]">
                          <strong>Allocation:</strong>{" "}
                          {getAllocationLabel(allocation)}
                        </p>
                        <p className="text-sm text-[#6c757d]">
                          <strong>Contributor:</strong> {name}
                        </p>
                      </div>
                    )}

                    <CheckoutForm
                      selectedAmount={selectedAmount}
                      allocation={getAllocationLabel(allocation)}
                      name={name}
                      email={email}
                    />
                  </div>
                </div>
                {/* Impact Section can go here */}
              </div>
            </div>
          </section>

          {/* Footer */}
          <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </AnimationRevealPage>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const navigations = (await getNavigation(locale)) ?? [];
  return {
    props: { navigations },
    revalidate: 1,
  };
}
