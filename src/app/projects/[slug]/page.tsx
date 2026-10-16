import ProjectDetailContent from "@/components/projects/ProjectDetailContent";
import { detailedProjects } from "@/data/resume";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = detailedProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const siteUrl = "https://zianscode.vercel.app";
  const canonicalUrl = `${siteUrl}/projects/${project.slug}`;

  return {
    title: `${project.title} - Project Case Study`,
    description: project.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} | Fajar Fauzian`,
      description: project.description,
      url: canonicalUrl,
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Fajar Fauzian`,
      description: project.description,
      images: [project.image],
    },
  };
}

export async function generateStaticParams() {
  return detailedProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  return <ProjectDetailContent key={slug} slug={slug} />;
}