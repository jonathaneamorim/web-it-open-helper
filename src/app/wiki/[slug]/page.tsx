import Link from "next/link";
import { notFound } from "next/navigation";
import { contentRegistry, Level, Topic, TopicBlock } from "@/data/registry";
import { BlockRenderer } from "@/components/content/BlockRenderer";
import { FadeIn } from "@/components/ui/fade-in";

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

  const getTheme = (cat: string) => {
    const norm = cat.toLowerCase();
    if (norm.includes("software")) return { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-50 to-white" };
    if (norm.includes("opera")) return { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", gradient: "from-green-50 to-white" };
    if (norm.includes("program")) return { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", gradient: "from-orange-50 to-white" };
    if (norm.includes("naveg")) return { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200", gradient: "from-cyan-50 to-white" };
    return { bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200", gradient: "from-slate-100 to-white" };
  };

  const theme = getTheme(data.category);

  return (
    <div className="min-h-screen bg-white pb-20 w-full">
      
      <div className={`relative w-full py-20 lg:py-28 bg-gradient-to-b ${theme.gradient} border-b border-slate-100`}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <FadeIn>
            <Link 
              href="/" 
              className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8 group"
            >
              <svg className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar para Wiki
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border ${theme.bg} ${theme.border} ${theme.text}`}>
                {data.category}
              </span>
              <span className="h-px w-12 bg-slate-300"></span>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">
                {data.levels.length} Módulos
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 break-words">
              {data.trackTitle}
            </h1>

            {data.description && (
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                {data.description}
              </p>
            )}
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 -mt-8">
        <div className="space-y-16">
          {data.levels.map((level: Level, lvlIndex: number) => (
            <section key={level.id || lvlIndex} className="relative h-full">
              <FadeIn delay={lvlIndex * 0.1}>
                
                <div className="sticky top-20 z-30 py-4 mb-6">
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm rounded-xl"></div>
                  
                  <div className="relative flex items-center px-4 py-2">
                    <span className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-sm font-bold mr-4 shadow-sm ${theme.bg} ${theme.text}`}>
                      {lvlIndex + 1}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight line-clamp-1">
                      {level.title}
                    </h2>
                  </div>
                </div>

                <div className="grid gap-6 w-full min-w-0">
                  {level.topics.map((topic: Topic, index: number) => (
                    <article 
                      key={index} 
                      className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 w-full min-w-0 overflow-hidden"
                    >
                      <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/30 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                          {topic.title}
                        </h3>
                        <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-indigo-500 transition-colors"></div>
                      </div>
                      
                      <div className="p-6 sm:p-8 space-y-6 w-full">
                        {topic.blocks.map((block: TopicBlock, i: number) => (
                          <div key={i} className="w-full">
                             <BlockRenderer block={block} />
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </FadeIn>
            </section>
          ))}
        </div>

        {data.links && data.links.length > 0 && (
          <FadeIn className="mt-24 pt-10 border-t border-slate-100">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8 text-center">
              Referências & Links Úteis
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.links.map((link: { title: string; url: string }, idx: number) => (
                <a 
                  key={idx} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-200 hover:shadow-md transition-all group w-full"
                >
                  <span className="font-medium text-slate-700 group-hover:text-indigo-600 transition-colors truncate mr-2">
                    {link.title}
                  </span>
                  <span className="text-slate-400 group-hover:text-indigo-400 transition-colors flex-shrink-0">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}