export interface Career {
  id: number;
  company: string;
  position: string;
  tags?: string[];
  location: string;
  startDate: string;
  endDate: string;
  duration: string;
  logo: string;
}

export interface CareerCardProps {
  career: Career;
  isDarkMode: boolean;
  index: number;
}

export interface CareerSectionProps {
  isDarkMode: boolean;
}