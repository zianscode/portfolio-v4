import { FaProjectDiagram } from "react-icons/fa";
import { useDarkMode } from "@/context/DarkModeContext";
import WebIlustration from "@/components/WebIlustration";
import MobileIllustration from "@/components/MobileIlustration";
import LandingIllustration from "@/components/LandingIlustration";
import DashboardIllustration from "@/components/DashboardIlustration";

const ServicesSection = () => {
  const { isDarkMode } = useDarkMode();

  const serviceCards = [
    {
      title: "Website Development",
      description: "Build responsive and scalable websites tailored to your business needs, using the latest web technologies.",
      Illustration: WebIlustration
    },
    {
      title: "Mobile UI/UX Design",
      description: "Developed user interfaces for mobile apps, ensuring the designs are intuitive, visually appealing, and ready for handoff to development teams.",
      Illustration: MobileIllustration
    },
    {
      title: "Landing Page Design",
      description: "Design and develop high-converting landing pages that capture leads and drive sales.",
      Illustration: LandingIllustration
    },
    {
      title: "Dashboard Management",
      description: "Create intuitive and powerful dashboards to visualize data and manage your business operations efficiently.",
      Illustration: DashboardIllustration
    }
  ];

  return (
    <section
      className={`flex flex-col text-start ${
        isDarkMode ? "border-stone-700" : "border-stone-300"
      }`}
    >
      <div className="flex items-center gap-2">
        <FaProjectDiagram
          className={`text-base sm:text-xl ${
            isDarkMode ? "text-stone-200" : "text-stone-800"
          }`}
        />
        <h2
          className={`text-base sm:text-xl font-bold ${
            isDarkMode ? "text-stone-200" : "text-stone-800"
          }`}
        >
          Services
        </h2>
      </div>
      <p
        className={`mt-1 sm:mt-2 text-[13px] sm:text-[15px] leading-relaxed ${
          isDarkMode ? "text-stone-300" : "text-stone-700"
        }`}
      >
        I can deliver the following services
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {serviceCards.map((service, index) => (
          <ServiceCard 
            key={index} 
            title={service.title} 
            description={service.description} 
            isDarkMode={isDarkMode}
            Illustration={service.Illustration} 
          />
        ))}
      </div>
    </section>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  isDarkMode: boolean;
  Illustration: React.ComponentType;
}

const ServiceCard = ({ title, description, isDarkMode, Illustration }: ServiceCardProps) => (
  <div
    className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden group ${
      isDarkMode 
        ? "bg-neutral-900/40 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-neutral-800/50 hover:-translate-y-1" 
        : "bg-white/50 backdrop-blur-md border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:bg-white/70 hover:-translate-y-1"
    }`}
  >
    <div className="flex items-center justify-center relative h-48 w-full mt-2 mb-4">
      <div className="relative inline-block scale-125 sm:scale-[1.35] origin-center pointer-events-none">
        <Illustration />
      </div>
    </div>
    <h3
      className={`text-[15px] sm:text-lg font-bold mt-5 sm:mt-7 ${
        isDarkMode ? "text-neutral-200" : "text-neutral-800"
      }`}
    >
      {title}
    </h3>
    <p
      className={`my-2 text-[13px] sm:text-[15px] leading-relaxed ${
        isDarkMode ? "text-neutral-300" : "text-neutral-700"
      }`}
    >
      {description}
    </p>
  </div>
);

export default ServicesSection;