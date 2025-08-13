"use client";

import { useDarkMode } from "@/context/DarkModeContext";

const Contact = () => {
  const { isDarkMode } = useDarkMode();

  const headingColor = isDarkMode ? 'text-stone-200' : 'text-gray-800';
  const paragraphColor = isDarkMode ? 'text-stone-300' : 'text-neutral-800';
  const subtitleColor = isDarkMode ? 'text-stone-400' : 'text-gray-600';

  return (
    <div className="space-y-12 pb-7 font-sans">
      <div className="text-center space-y-6">
        <h2
          className={`text-4xl md:text-5xl font-bold ${headingColor}`}
        >
          Let&apos;s Connect
        </h2>

        <div className={`max-w-2xl mx-auto space-y-4 ${paragraphColor}`}>
          <p className="text-lg leading-relaxed">
            I&apos;m always excited to collaborate on innovative projects and connect with fellow developers, designers, and creative minds.
          </p>
          <p className={`text-base ${subtitleColor}`}>
            Whether you have a project in mind, want to discuss technology, or just want to say hello I&apos;d love to hear from you!
          </p>
        </div>
      </div>

      <div className="text-center">
        <p className={`text-sm ${subtitleColor}`}>
          Don&apos;t be a stranger I respond to all messages! 🌟
        </p>
      </div>
    </div>
  );
};

export default Contact;
