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
}

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  slug: string;
  isDarkMode: boolean;
  spanClass?: string;
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

export interface CertificateProps {
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