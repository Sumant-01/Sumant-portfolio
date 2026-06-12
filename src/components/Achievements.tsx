import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    id: 1,
    title: "Python  for Data Science",
    issuer: "IBM Developer ",
    date: "2025",
    description:
      "Successfully completed Python 101 for Data Science, covering Python fundamentals, data structures, functions, and data science concepts.",
    image: "/IBM Python.png",
    url: "",
    credentialId: "",
    color: "#00F0FF",
  },
  {
    id: 2,
    title: "SQL Case Study - SQL Workshop",
    issuer: "Infosys Springboard",
    date: "2023",
    description:
      "Successfully completed SQL Case Study and SQL Workshop training, gaining practical knowledge of database concepts, SQL queries, and data management.",
    image: "/SQL.png",
    url: "",
    credentialId: "",
    color: "#B200FF",
  },
  {
    id: 3,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2023",
    description:
      "Completed Introduction to Cybersecurity and gained knowledge of online safety, cyber threats, security fundamentals, and cyber defense concepts.",
    image: "/cisco.png",
    url: "",
    credentialId: "",
    color: "#00F0FF",
  },
  {
    id: 4,
    title: "Basics of Python",
    issuer: "Infosys Springboard",
    date: "2023",
    description:
      "Successfully completed the Basics of Python course and strengthened programming fundamentals, problem-solving skills, and Python development concepts.",
    image: "/Basics of python.png",
    url: "",
    credentialId: "",
    color: "#B200FF",
  },
  {
    id: 5,
    title: "Data Structures and Algorithms using Java",
    issuer: "NPTEL - IIT Kharagpur",
    date: "2024",
    description:
      "Successfully completed the 12-week NPTEL certification course on Data Structures and Algorithms using Java with a consolidated score of 72%.",
    image: "/NPTEL.png",
    url: "",
    credentialId: "",
    color: "#00F0FF",
  },
  {
  id: 6,
  title: "Python Development Training",
  issuer: "JobsInsight",
  date: "2024",
  description:
    "Successfully completed project-based Python Development training, gaining practical experience in Python programming, problem-solving, and application development.",
  image: "/Python development.png",
  url: "",
  credentialId: "",
  color: "#B200FF",
},
];

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Stagger animation for cards on scroll
      gsap.utils.toArray(".achievement-card").forEach((card, index: number) => {
        gsap.from(card as HTMLElement, {
          opacity: 0,
          y: 50,
          scale: 0.9,
          duration: 0.5,
          delay: index * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card as HTMLElement,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, containerRef);

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="achievements"
      className="relative w-full bg-transparent overflow-hidden z-10 py-20 md:py-32"
    >
      {/* Header */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 mb-16 md:mb-20">
        <span className="text-[#B200FF] font-mono text-sm tracking-widest mb-4 block uppercase">
          // Achievements & Certifications
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#00F0FF] to-[#B200FF] tracking-tight mb-4">
          Recognition & Growth
        </h2>
        <p className="text-white/60 font-light max-w-2xl">
          Certifications and achievements that showcase my commitment to
          continuous learning and professional development.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 min-[1200px]:grid-cols-3! gap-4 sm:gap-6 md:gap-8">
          {achievements.map((achievement) => {
            const isClickable = achievement.url && achievement.url !== "";
            const Component = isClickable ? "a" : "div";
            const componentProps = isClickable
              ? {
                  href: achievement.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <Component
                key={achievement.id}
                {...componentProps}
                className="achievement-card group relative rounded-2xl border border-white/20 bg-black/40 backdrop-blur-xl overflow-hidden hover:border-white/50 transition-all duration-300 cursor-pointer hover:shadow-xl h-full flex flex-col"
                style={{
                  boxShadow: `0 0 40px ${achievement.color}15, inset 0 0 20px ${achievement.color}10`,
                }}
              >
                {/* Image Container */}
                <div className="relative w-full h-32 sm:h-36 md:h-40 overflow-hidden bg-linear-to-b from-black/50 to-black/80 shrink-0">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110 transform"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/80" />

                  {/* Issuer Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                    <p className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider">
                      {achievement.date}
                    </p>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-4 sm:p-5 md:p-6 relative z-10 flex flex-col grow">
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex flex-col grow">
                    {/* Title */}
                    <h3 className="text-lg sm:text-lg md:text-xl font-black text-white tracking-tight mb-2">
                      {achievement.title}
                    </h3>

                    {/* Issuer */}
                    <p className="text-sm text-white/70 font-mono mb-3">
                      {achievement.issuer}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-white/60 leading-relaxed mb-4 line-clamp-3 grow">
                      {achievement.description}
                    </p>

                    {/* Credential ID if exists */}
                    {achievement.credentialId && (
                      <p className="text-xs text-white/50 font-mono mb-4 break-all">
                        ID: {achievement.credentialId}
                      </p>
                    )}

                    {/* View Certificate Button - Only show if URL exists */}
                    {achievement.url && achievement.url !== "" && (
                      <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider mt-auto">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: achievement.color }}
                        />
                        <span className="text-white/80 group-hover:text-white transition-colors">
                          View Credential
                        </span>
                        <span className="text-white/50 group-hover:text-white/80 transition-colors">
                          →
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Border Glow on Hover */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${achievement.color}20, transparent)`,
                  }}
                />
              </Component>
            );
          })}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#B200FF]/10 rounded-full blur-3xl pointer-events-none opacity-20" />
    </section>
  );
}
