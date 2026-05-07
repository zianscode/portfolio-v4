import Saweria from "@/components/Saweria";
import TypeAnimation from "@/components/TypeAnimation";

export default function Introduction() {
  return (
    <section className="space-y-3 bg-cover bg-no-repeat">
      <div className="flex items-start justify-between gap-3 min-w-0">
        <div className="font-poppins flex gap-2 text-lg sm:text-xl font-bold text-neutral-700 dark:text-neutral-200 min-w-0 flex-1">
          <TypeAnimation
            sequence={[
              "Hi, I'm Fajar Fauzian",
              "Hi, I'm Frontend Developer",
              "Hi, I'm UI/UX Designer",
            ]}
            delay={3000}
          />
        </div>
        <span className="text-neutral-700 dark:text-neutral-200 flex-shrink-0">
          <Saweria />
        </span>
      </div>

      <div className="space-y-4">
        <ul className="ml-5 flex list-disc flex-row gap-6 sm:gap-8 text-[14px] sm:text-[15px] text-neutral-700 dark:text-neutral-400">
          <li>Open to Work</li>
          <li>
            Based in Bogor <span className="ml-1">🇮🇩</span>
          </li>
        </ul>
        <p className="text-[15px] leading-relaxed text-neutral-800 dark:text-neutral-300">
          Frontend Developer with experience in building responsive,
          user friendly, and scalable web applications. Passionate about
          creating clean interfaces, improving user experience, and delivering
          efficient solutions while working collaboratively in team
          environments.
        </p>
      </div>
    </section>
  );
}
