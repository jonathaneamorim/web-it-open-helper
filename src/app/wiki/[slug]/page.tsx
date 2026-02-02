import { contentRegistry } from "@/data/registry";
import { BlockRenderer } from "@/components/content/BlockRenderer";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(contentRegistry).map((slug) => ({
    slug: slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function UniversalPage({ params }: PageProps) {
  const { slug } = await params;
  const data = contentRegistry[slug];

  if (!data) return notFound();

  const getCategoryTheme = (cat: string) => {
    const normalized = cat.toLowerCase();
    if (normalized.includes("software")) return "border-purple-500 text-purple-600 bg-purple-50";
    if (normalized.includes("opera")) return "border-green-500 text-green-600 bg-green-50";
    if (normalized.includes("devops")) return "border-blue-500 text-blue-600 bg-blue-50";
    if (normalized.includes("program")) return "border-yellow-500 text-yellow-600 bg-yellow-50";
    return "border-slate-500 text-slate-600 bg-slate-50";
  };

  const activeTheme = getCategoryTheme(data.category);

  return (
    <div className="w-full min-h-screen bg-slate-50/50">
      <div className="container mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        
        <header className="mb-12 text-center sm:text-left border-b border-slate-200 pb-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${activeTheme.replace('text-', 'text-opacity-80 ')}`}>
              {data.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {data.trackTitle}
          </h1>
          {data.description && (
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              {data.description}
            </p>
          )}
        </header>

        <div className="space-y-16">
          {data.levels.map((level: any, lvlIndex: number) => (
            <section key={level.id || lvlIndex} className="relative">
              
              <div className={`sticky top-0 z-20 backdrop-blur-md bg-white/90 py-3 mb-8 border-b-2 flex items-center shadow-sm ${activeTheme.split(' ')[0]}`}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 border ${activeTheme}`}>
                  {lvlIndex + 1}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                  {level.title}
                </h2>
              </div>

              <div className="grid gap-6 sm:gap-8 grid-cols-1">
                {level.topics.map((topic: any, index: number) => (
                  <article key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300">
                    <div className="bg-slate-50/50 px-6 py-4 border-b border-slate-100">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                        {topic.title}
                      </h3>
                    </div>
                    <div className="p-6 sm:p-8">
                      {topic.blocks.map((block: any, i: number) => (
                        <BlockRenderer key={i} block={block} />
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {data.links && (
          <footer className="mt-20 pt-10 border-t border-slate-200">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Referências Externas</h3>
            <div className="flex flex-wrap gap-4">
              {data.links.map((link: any, idx: number) => (
                <a key={idx} href={link.url} target="_blank" className="text-blue-600 hover:underline font-medium">
                  {link.title} ↗
                </a>
              ))}
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}