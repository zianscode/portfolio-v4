"use client";

import { motion } from "framer-motion";
import { useDarkMode } from "@/context/DarkModeContext";
import { IoMdContacts } from "react-icons/io";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialCards from "@/components/contact/SocialCards";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactContent() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`flex min-h-screen overflow-x-hidden ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <main className="flex-1 min-w-0 flex flex-col items-center pt-10 md:pt-24 lg:pt-14 px-4 md:px-6 lg:px-8 ml-0 md:ml-0 lg:ml-6 pb-20">
        <div className="w-full min-w-0 max-w-[700px] xl:max-w-[830px] transition-all duration-500 ease-in-out space-y-8 sm:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-start mb-8"
          >
            <div>
              <div className="flex items-center gap-2">
                <IoMdContacts
                  className={`text-base sm:text-xl ${
                    isDarkMode ? "text-stone-200" : "text-stone-800"
                  }`}
                />
                <h1
                  className={`text-base sm:text-xl font-bold ${
                    isDarkMode ? "text-stone-200" : "text-stone-800"
                  }`}
                >
                  Contact
                </h1>
              </div>
              <p
                className={`mt-1 sm:mt-2 text-[13px] sm:text-[15px] leading-relaxed ${
                  isDarkMode ? "text-stone-300" : "text-stone-700"
                }`}
              >
                Let&rsquo;s get in touch
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            <SocialCards />
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
