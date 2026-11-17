import React from 'react';

interface TechItem {
  name: string;
  logos: string[];
}

interface MarketingTool {
  name: string;
  logo: string;
}

const techList: TechItem[] = [
  { name: 'React', logos: ['https://cdn.simpleicons.org/react/61DAFB'] },
  { name: 'TypeScript', logos: ['https://cdn.simpleicons.org/typescript/3178C6'] },
  { name: 'Python', logos: ['https://cdn.simpleicons.org/python/3776AB'] },
  { name: '.NET Core', logos: ['https://cdn.simpleicons.org/dotnet/512BD4'] },
  { name: 'Docker', logos: ['https://cdn.simpleicons.org/docker/2496ED'] },
  { name: 'Kubernetes', logos: ['https://cdn.simpleicons.org/kubernetes/326CE5'] },
  { name: 'AWS Cloud', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg'] },
  { name: 'Microsoft Azure', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg'] },
  { name: 'PostgreSQL', logos: ['https://cdn.simpleicons.org/postgresql/4169E1'] },
  { name: 'SQL Server', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg'] },
  { name: 'Supabase', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg'] },
  { name: 'MongoDB', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'] },
  { name: 'SQLite', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg'] },
  { name: 'MySQL', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'] },
  {
    name: 'Ionic / React Native',
    logos: ['https://cdn.simpleicons.org/ionic/3880FF', 'https://cdn.simpleicons.org/react/61DAFB'],
  },
  { name: 'CI/CD Pipelines', logos: ['https://cdn.simpleicons.org/githubactions/2088FF'] },
  { name: 'HTML5', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'] },
  { name: 'CSS3', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'] },
  { name: 'JavaScript', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'] },
  { name: 'Angular', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg'] },
  { name: 'Tailwind CSS', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'] },
  { name: 'Bootstrap', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'] },
  { name: 'Java', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'] },
  { name: 'C#', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'] },
  { name: 'Flutter', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'] },
  { name: 'Dart', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg'] },
  { name: 'Ruby', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg'] },
  { name: 'Expo', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg'] },
  { name: 'n8n', logos: ['https://cdn.simpleicons.org/n8n'] },
  { name: 'Zapier', logos: ['https://cdn.simpleicons.org/zapier'] },
  { name: 'LangGraph', logos: ['https://cdn.simpleicons.org/langchain'] },
  { name: 'LangChain', logos: ['https://cdn.simpleicons.org/langchain'] },
  { name: 'Tauri', logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tauri/tauri-original.svg'] },
];

const marketingTools: MarketingTool[] = [
  { name: 'Google Ads', logo: '/assets/tech/marketing/google-ads.svg' },
  { name: 'Google Analytics', logo: '/assets/tech/marketing/google-analytics.svg' },
  { name: 'Google Tag Manager', logo: '/assets/tech/marketing/google-tag-manager.svg' },
  { name: 'Google Search Console', logo: '/assets/tech/marketing/google-search-console.svg' },
  { name: 'Meta', logo: '/assets/tech/marketing/meta.svg' },
  { name: 'Facebook', logo: '/assets/tech/marketing/facebook.svg' },
  { name: 'Instagram', logo: '/assets/tech/marketing/instagram.svg' },
  { name: 'Semrush', logo: '/assets/tech/marketing/semrush.svg' },
  { name: 'Ahrefs', logo: '/assets/tech/marketing/ahrefs.svg' },
  { name: 'Yoast SEO', logo: '/assets/tech/marketing/yoast.svg' },
  { name: 'Moz', logo: '/assets/tech/marketing/moz.svg' },
  { name: 'Medium', logo: '/assets/tech/marketing/medium.svg' },
  { name: 'Pitchbox', logo: '/assets/tech/marketing/pitchbox.svg' },
  { name: 'TikTok', logo: '/assets/tech/marketing/tiktok.svg' },
  { name: 'X', logo: '/assets/tech/marketing/x.svg' },
  { name: 'YouTube', logo: '/assets/tech/marketing/youtube.svg' },
  { name: 'Pinterest', logo: '/assets/tech/marketing/pinterest.svg' },
  { name: 'Canva', logo: '/assets/tech/marketing/canva.svg' },
  { name: 'Buffer', logo: '/assets/tech/marketing/buffer.svg' },
  { name: 'Hootsuite', logo: '/assets/tech/marketing/hootsuite.svg' },
];

const marqueeRows = [
  techList.filter((_, index) => index % 2 === 0),
  techList.filter((_, index) => index % 2 === 1),
];
const BASE_MARQUEE_ITEM_COUNT = 12;
const BASE_MARQUEE_DURATION_SECONDS = 35;

export const Technologies: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-palette-bg" id="technologies">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-12">
          <span className="font-label-md text-label-md text-palette-primary font-bold uppercase tracking-wider mb-2 block">
            Battle-Tested Stack
          </span>
          <h2 className="font-headline-xl text-headline-xl text-slate-900 tracking-tight mb-3">
            Tools &amp; Technologies
          </h2>
          <p className="font-body-md text-body-md text-slate-600">
            Robust modern frameworks, cloud architectures, and databases powering our custom software solutions.
          </p>
        </div>

        {/* Marquee Pill Strip */}
        <div className="w-full relative overflow-hidden py-4 flex flex-col gap-6">
          {/* Gradient Edge Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10 bg-gradient-to-r from-palette-bg/70 via-palette-bg/35 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 z-10 bg-gradient-to-l from-palette-bg/70 via-palette-bg/35 to-transparent" />

          {marqueeRows.map((row, rowIndex) => (
            <div key={rowIndex} className="marquee-row w-full overflow-hidden flex">
              <div
                className="animate-marquee flex items-center gap-5 pr-5"
                style={{
                  animationDuration: `${(row.length / BASE_MARQUEE_ITEM_COUNT) * BASE_MARQUEE_DURATION_SECONDS}s`,
                  animationDirection: rowIndex === 0 ? 'normal' : 'reverse',
                }}
              >
                {[...row, ...row].map((tech, idx) => (
                  <div
                    key={`${tech.name}-${idx}`}
                    role="img"
                    aria-label={tech.name}
                    aria-hidden={idx >= row.length}
                    className="pointer-events-none bg-white rounded-2xl shadow-sm border border-slate-200/80 w-[200px] h-[88px] shrink-0 flex items-center justify-center"
                  >
                    <div className="flex items-center justify-center gap-2">
                      {tech.logos.map((logo) => (
                        <img
                          key={logo}
                          src={logo}
                          alt=""
                          aria-hidden="true"
                          className="w-12 h-12 object-contain"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <section className="w-full mt-16" aria-labelledby="digital-marketing-title">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3
              id="digital-marketing-title"
              className="font-headline-md text-[24px] font-bold text-slate-900 tracking-tight mb-3"
            >
              Digital Marketing
            </h3>
            <p className="font-body-md text-body-md text-slate-600">
              Search, social, and paid media tools we use to grow your business.
            </p>
          </div>

          <div className="w-full relative overflow-hidden py-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10 bg-gradient-to-r from-palette-bg/70 via-palette-bg/35 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 z-10 bg-gradient-to-l from-palette-bg/70 via-palette-bg/35 to-transparent" />
            <div
              className="marquee-row marketing-marquee-row w-full overflow-hidden flex"
              tabIndex={0}
              role="group"
              aria-label="Digital marketing tools"
            >
              <div
                className="animate-marquee flex items-center gap-5 pr-5"
                style={{
                  animationDuration: `${(marketingTools.length / BASE_MARQUEE_ITEM_COUNT) * BASE_MARQUEE_DURATION_SECONDS}s`,
                  animationDirection: 'normal',
                }}
              >
                {[...marketingTools, ...marketingTools].map((tool, index) => (
                  <div
                    key={`${tool.name}-${index}`}
                    role="img"
                    aria-label={`${tool.name} logo`}
                    aria-hidden={index >= marketingTools.length}
                    className="pointer-events-none bg-white rounded-2xl shadow-sm border border-slate-200/80 w-[200px] h-[88px] shrink-0 flex items-center justify-center"
                  >
                    <img
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
};

