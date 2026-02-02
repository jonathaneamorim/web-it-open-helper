import Link from "next/link";
import { contentRegistry } from "@/data/registry";

export default function Home() {
  const groupedContent = Object.entries(contentRegistry).reduce((acc, [slug, data]) => {
    const category = data.category || "Outros";
    if (!acc[category]) acc[category] = [];
    acc[category].push({ slug, ...data });
    return acc;
  }, {} as Record<string, any[]>);

  const categories = Object.keys(groupedContent).sort();

  return (
    <div className="min-h-screen bg-slate-50/50">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center sm:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-wider uppercase mb-4 border border-indigo-100">
            Wiki Central
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            IT Open Helper
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Base de conhecimento unificada. Softwares, Linux, DevOps e Programação em um só lugar.
          </p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {categories.map((category) => (
          <section id={category} key={category}>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-slate-800">{category}</h2>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedContent[category].map((item) => (
                <Link 
                  href={`/wiki/${item.slug}`} 
                  key={item.slug}
                  className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-sm font-bold text-slate-500 uppercase group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                      {item.slug.slice(0, 2)}
                    </div>
                    <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-full">
                      {item.levels.length} Módulos
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {item.trackTitle}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>

                  <div className="flex items-center text-xs font-bold text-indigo-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    ACESSAR CONTEÚDO →
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

      </main>
    </div>
  );
}