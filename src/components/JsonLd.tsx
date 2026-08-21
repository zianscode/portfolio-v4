export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fajar Fauzian",
    "alternateName": "zianscode",
    "url": "https://zianscode.vercel.app",
    "image": "https://zianscode.vercel.app/image/Fajar_Fauzian.jpg",
    "jobTitle": "Frontend Developer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bogor",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://github.com/zianscode",
      "https://dev.to/zianscode"
    ],
    "knowsAbout": [
      "Frontend Development",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "UI/UX Design"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Fajar Fauzian Portfolio",
    "url": "https://zianscode.vercel.app"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
