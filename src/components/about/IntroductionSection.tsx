import React from 'react';
import { summaryMock } from '@/common/mocks/summary';
import { BiLeaf as ProfileIcon } from 'react-icons/bi';

interface SummaryProps {
  isDarkMode: boolean;
}

const Summary: React.FC<SummaryProps> = ({ isDarkMode }) => {
  const borderColor = isDarkMode ? 'border-stone-700' : 'border-stone-300';
  const textColor = isDarkMode ? 'text-stone-300' : 'text-gray-700';
  const paragraphColor = isDarkMode ? 'text-stone-300' : 'text-neutral-800';

  return (
    <section className={`space-y-2 bg-cover bg-no-repeat ${borderColor}`}>
      <div>
        <div className="flex items-center gap-2">
          <ProfileIcon
            className={`text-base sm:text-xl ${
              isDarkMode ? "text-stone-200" : "text-stone-800"
            }`}
          />
          <h2
            className={`text-base sm:text-xl font-bold ${
              isDarkMode ? "text-stone-200" : "text-stone-800"
            }`}
          >
            About
          </h2>
        </div>
        <p
          className={`mt-1 sm:mt-2 text-[13px] sm:text-[15px] leading-relaxed ${
            isDarkMode ? "text-stone-300" : "text-stone-700"
          }`}
        >
          A short story of me
        </p>
      </div>

      <div className={`space-y-4 pt-3 text-[15px] ${textColor}`}>
        <div 
          data-testid="summary"
          className={`flex flex-col space-y-6 font-poppins text-[15px] leading-relaxed ${paragraphColor}`}
        >
          <p>{summaryMock.paragraphOne}</p>
          <p>{summaryMock.paragraphTwo}</p>
          <p>{summaryMock.paragraphThree}</p>
          <p>{summaryMock.paragraphFour}</p>
        </div>
      </div>
    </section>
  );
};

export default Summary;