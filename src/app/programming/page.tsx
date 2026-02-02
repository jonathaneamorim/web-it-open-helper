import Link from "next/link";
import { contentRegistry } from "@/data/registry";

export default function ProgrammingHub() {
  const topics = Object.entries(contentRegistry).map(([slug, data]) => ({
    slug,
    title: data.trackTitle,
    description: data.description,
    levelCount: data.levels.length,
    totalTopics: data.levels.reduce((acc, level) => acc + level.topics.length, 0),
  }));

  const getTheme = (slug: string) => {
    const themes: Record<string, string> = {
      javascript: "bg-yellow-50 text-yellow-600 border-yellow-200 hover:border-yellow-400 icon-yellow-500",
      docker: "bg-blue-50 text-blue-600 border-blue-200 hover:border-blue-400 icon-blue-500",
      git: "bg-orange-50 text-orange-600 border-orange-200 hover:border-orange-400 icon-orange-500",
      html: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-500 icon-orange-600",
      css: "bg-sky-50 text-sky-600 border-sky-200 hover:border-sky-400 icon-sky-500",
      markdown: "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400 icon-slate-800",
    };
    return themes[slug] || "bg-indigo-50 text-indigo-600 border-indigo-200 hover:border-indigo-400 icon-indigo-500";
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Knowledge Base
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Selecione uma tecnologia abaixo para acessar guias, comandos e referências técnicas.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => {
            const theme = getTheme(topic.slug);
            
            return (
              <Link 
                href={`/programming/${topic.slug}`} 
                key={topic.slug}
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col h-full bg-white ${theme.split(' ').slice(2, 4).join(' ')}`}
              >
                
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold uppercase transition-colors ${theme.split(' ').slice(0, 2).join(' ')}`}>
                    {topic.slug.slice(0, 2)}
                  </div>
                  
                  <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-full border border-slate-100">
                    {topic.totalTopics} Tópicos
                  </span>
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {topic.title}
                  </h2>
                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {topic.description || "Guia de referência técnica."}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                  <span className="text-slate-500 font-medium">
                    {topic.levelCount} Módulos
                  </span>
                  <span className="flex items-center font-semibold text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Acessar <span className="ml-1">→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {topics.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400">Nenhum conteúdo encontrado no registro.</p>
          </div>
        )}
      </div>
    </div>
  );
}