"use client";

import { useState } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi";

const EMAIL = "fajarfauzian53@gmail.com";

const EmailSection = () => {
  const { isDarkMode } = useDarkMode();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy, please copy it manually");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={`pt-8 border-t font-poppins ${isDarkMode ? "border-white/10" : "border-neutral-200"}`}
    >
      <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
        Prefer email?
      </h2>

      <p
        className={`mt-2 max-w-[560px] text-[14px] sm:text-[15px] leading-relaxed ${
          isDarkMode ? "text-neutral-400" : "text-neutral-600"
        }`}
      >
        Write to me about a project, a role, or anything you&apos;d like to talk
        through. A few lines about what you have in mind is plenty to start with.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
        <a
          href={`mailto:${EMAIL}`}
          className={`group inline-flex items-center gap-2 text-lg sm:text-2xl font-semibold tracking-tight underline decoration-1 underline-offset-[6px] transition-colors break-all ${
            isDarkMode
              ? "text-white decoration-white/25 hover:decoration-white"
              : "text-neutral-900 decoration-neutral-300 hover:decoration-neutral-900"
          }`}
        >
          {EMAIL}
          <FiArrowUpRight className="shrink-0 text-base sm:text-xl transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <button
          type="button"
          onClick={handleCopy}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-semibold transition-colors ${
            isDarkMode
              ? "border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white"
              : "border-neutral-200 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
          }`}
        >
          {copied ? <FiCheck className="w-3.5 h-3.5" /> : <FiCopy className="w-3.5 h-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </motion.section>
  );
};

export default EmailSection;
