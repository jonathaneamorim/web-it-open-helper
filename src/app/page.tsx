import Link from "next/link";
import { contentRegistry, PageContent } from "@/data/registry";
import { ScrollSection, AnimatedItem } from "@/components/home/ScrollSection";

type ContentItem = PageContent & { slug: string };

export default function Home() {
  const groupedContent = Object.entries(contentRegistry).reduce((acc, [slug, data]) => {
    const category = data.category || "Outros";
    if (!acc[category]) acc[category] = [];
    acc[category].push({ slug, ...data });
    return acc;
  }, {} as Record<string, ContentItem[]>);

  const categories = Object.keys(groupedContent).sort();

  const getTheme = (category: string) => {
    const norm = category.toLowerCase();
    if (norm.includes("program")) return "from-yellow-50 to-orange-50 border-orange-200 text-orange-600";
    if (norm.includes("sistema")) return "from-green-50 to-emerald-50 border-emerald-200 text-emerald-600";
    if (norm.includes("softw")) return "from-purple-50 to-indigo-50 border-indigo-200 text-indigo-600";
    if (norm.includes("naveg")) return "from-cyan-50 to-blue-50 border-cyan-200 text-cyan-600";
    return "from-slate-50 to-gray-50 border-slate-200 text-slate-600";
  };

  return (
    <main className="min-h-screen w-full bg-slate-900">
      
      <ScrollSection className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatedItem direction="up">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-bold tracking-widest uppercase mb-6 border border-indigo-500/20">
              Wiki Central v2.0
            </span>
          </AnimatedItem>
          
          <AnimatedItem direction="up">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              IT Open Helper
            </h1>
          </AnimatedItem>

          <AnimatedItem direction="up">
            <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Sua base de conhecimento definitiva. Role para baixo para explorar trilhas de aprendizado interativas.
            </p>
          </AnimatedItem>

          <AnimatedItem direction="up" className="flex justify-center gap-4">
            <a href="#Programação" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors">
              Começar a Explorar
            </a>
          </AnimatedItem>
        </div>
      </ScrollSection>

      {categories.map((category, index) => {
        const theme = getTheme(category);
        return (
          <ScrollSection 
            key={category} 
            id={category} 
            className={`bg-gradient-to-br ${theme} ${index % 2 === 0 ? '' : 'bg-white'}`}
          >
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-4 text-center lg:text-left">
                <AnimatedItem direction="left">
                  <h2 className="text-4xl md:text-6xl font-black text-slate-800 mb-6 leading-tight">
                    {category}
                  </h2>
                  <div className="h-2 w-24 bg-current opacity-20 rounded-full mb-6 mx-auto lg:mx-0"></div>
                  <p className="text-lg text-slate-600">
                    {groupedContent[category].length} trilhas disponíveis.
                    Clique nos cards para acessar o conteúdo completo.
                  </p>
                </AnimatedItem>
              </div>

              <div className="lg:col-span-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {groupedContent[category].map((item) => (
                    <AnimatedItem key={item.slug} direction="up">
                      <Link 
                        href={`/wiki/${item.slug}`}
                        className="group block bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:bg-white transition-all duration-300"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold uppercase shadow-sm ${theme.split(' ').slice(2).join(' ')} bg-white`}>
                            {item.slug.slice(0, 2)}
                          </div>
                          <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md group-hover:bg-slate-200 transition-colors">
                            Ver Docs
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                          {item.trackTitle}
                        </h3>
                        <p className="text-sm text-slate-500 line-clamp-2">
                          {item.description}
                        </p>
                      </Link>
                    </AnimatedItem>
                  ))}
                </div>
              </div>
            </div>
          </ScrollSection>
        );
      })}

      <ScrollSection className="bg-slate-950 text-slate-400 h-auto min-h-[50vh]">
        <AnimatedItem direction="up" className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Pronto para contribuir?</h2>
          <p className="max-w-xl mx-auto mb-10 text-slate-500">
            Este projeto é open source. Adicione novos JSONs ao registro para expandir a base de conhecimento automaticamente.
          </p>
          <div className="flex justify-center gap-6 text-sm font-mono">
            <span>© {new Date().getFullYear()} IT Open Helper</span>
            <span>•</span>
            <span>Built with Next.js & Framer Motion</span>
          </div>
        </AnimatedItem>
      </ScrollSection>

    </main>
  );
}