export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  image: string;
  link: string;
  slug: string;
  gallery?: string[];
  features?: string[];
  category?: string;
  isFeatured?: boolean;
  figmaLink?: string;
}

export interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  slug: string;
  isDarkMode: boolean;
  spanClass?: string;
  features?: string[];
  category?: string;
  figmaLink?: string;
}

export interface Certificate {
  id: number;
  title: string;
  description: string;
  issuedBy: string;
  date: string;
  image: string;
  link: string;
}

export interface CertificateCardProps {
  id: number;
  title: string;
  description: string;
  issuedBy: string;
  date: string;
  image: string;
  link: string;
  isDarkMode: boolean;
}

export interface LatestProject {
  src: string;
  title: string;
  date: string;
  isNew?: boolean;
}

export interface LatestProjectCardProps {
  project: LatestProject;
  index: number;
}

export function isProject(item: Project | Certificate): item is Project {
  return (item as Project).technologies !== undefined;
}

export function isCertificate(item: Project | Certificate): item is Certificate {
  return (item as Certificate).issuedBy !== undefined;
}