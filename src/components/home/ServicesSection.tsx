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
      description: "Design and develop high converting landing pages that capture leads and drive sales.",
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
    className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border relative overflow-hidden group ${
      isDarkMode 
        ? "bg-[#0b0c0e] border-neutral-800/60 shadow-[0_12px_30px_rgba(0,0,0,0.5)] hover:bg-[#111215] hover:border-neutral-700/80 hover:-translate-y-1" 
        : "bg-white border-neutral-200/80 shadow-[0_12px_30px_rgba(0,0,0,0.03)] hover:bg-neutral-50/50 hover:border-neutral-300/80 hover:-translate-y-1"
    }`}
  >
    <div className={`flex items-center justify-center relative h-48 w-full rounded-xl border overflow-hidden transition-all duration-300 ${
      isDarkMode 
        ? "bg-[#030303] border-neutral-900/80 bg-[linear-gradient(to_right,#121214_1px,transparent_1px),linear-gradient(to_bottom,#121214_1px,transparent_1px)]" 
        : "bg-neutral-50/60 border-neutral-200/60 bg-[linear-gradient(to_right,#f0f0f2_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f2_1px,transparent_1px)]"
    } bg-[size:20px_20px]`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-black/20 pointer-events-none" />
      
      <div className="relative inline-block scale-125 sm:scale-[1.35] origin-center pointer-events-none">
        <Illustration />
      </div>
    </div>
    <h3
      className={`text-[15px] sm:text-lg font-bold mt-5 sm:mt-6 transition-colors duration-300 ${
        isDarkMode ? "text-neutral-200 group-hover:text-white" : "text-neutral-800 group-hover:text-black"
      }`}
    >
      {title}
    </h3>
    <p
      className={`mt-2 text-[13px] sm:text-[15px] leading-relaxed transition-colors duration-300 ${
        isDarkMode ? "text-neutral-400 group-hover:text-neutral-300" : "text-neutral-600 group-hover:text-neutral-700"
      }`}
    >
      {description}
    </p>
  </div>
);

export default ServicesSection;