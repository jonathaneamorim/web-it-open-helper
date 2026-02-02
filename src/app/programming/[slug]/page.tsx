import { contentRegistry } from "@/data/registry";
import { BlockRenderer } from "@/components/content/BlockRenderer";
import { notFound } from "next/navigation";

// Mantém o generateStaticParams igual
export async function generateStaticParams() {
  return Object.keys(contentRegistry).map((slug) => ({
    slug: slug,
  }));
}

// 1. AJUSTE NA TIPAGEM: params agora é uma Promise
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 2. AJUSTE NO COMPONENTE: Adicione 'async' e faça o 'await'
export default async function DynamicTopicPage({ params }: PageProps) {
  // Desembrulha a Promise aqui
  const { slug } = await params;
  
  const data = contentRegistry[slug];

  if (!data) {
    return notFound();
  }

  // Definição de cores (Mantida igual)
  const themeColors: Record<string, string> = {
    javascript: "border-yellow-400 text-yellow-600 bg-yellow-50",
    docker: "border-blue-500 text-blue-600 bg-blue-50",
    git: "border-orange-500 text-orange-600 bg-orange-50",
    html: "border-orange-600 text-orange-700 bg-orange-50",
    css: "border-sky-500 text-sky-600 bg-sky-50",
    markdown: "border-slate-800 text-slate-700 bg-slate-100",
  };

  const activeTheme = themeColors[slug] || "border-indigo-500 text-indigo-600 bg-indigo-50";

  return (
    <div className="w-full min-h-screen bg-slate-50/50">
      <div className="container mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        
        <header className="mb-12 text-center sm:text-left border-b border-slate-200 pb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {data.trackTitle}
          </h1>
          {data.description && (
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              {data.description}
            </p>
          )}
        </header>

        <div className="space-y-16">
          {data.levels.map((level, lvlIndex) => (
            <section key={level.id} className="relative">
              
              <div className={`sticky top-0 z-20 backdrop-blur-md bg-white/80 py-3 mb-8 border-b-2 flex items-center shadow-sm ${activeTheme.split(' ')[0]}`}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 border ${activeTheme}`}>
                  {lvlIndex + 1}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                  {level.title}
                </h2>
              </div>

              <div className="grid gap-6 sm:gap-8 grid-cols-1">
                {level.topics.map((topic, index) => (
                  <article 
                    key={index} 
                    className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <div className="bg-slate-50/50 px-6 py-4 border-b border-slate-100">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center">
                        {topic.title}
                      </h3>
                    </div>

                    <div className="p-6 sm:p-8">
                      {topic.blocks.map((block, i) => (
                        <BlockRenderer key={i} block={block} />
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
        
        {data.links && data.links.length > 0 && (
          <footer className="mt-20 pt-10 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Referências & Links Úteis</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-sm transition-all group"
                >
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                    ↗
                  </span>
                  <span className="font-medium text-slate-700 group-hover:text-blue-700">
                    {link.title}
                  </span>
                </a>
              ))}
            </div>
            
            <p className="text-center text-slate-400 text-sm mt-12">
              IT Open Helper © {new Date().getFullYear()} — Generated via JSON Registry
            </p>
          </footer>
        )}

      </div>
    </div>
  );
}