import jsData from "@/data/programming/javascript.json"; 
import { BlockRenderer } from "@/components/BlockRenderer";

interface Topic {
  title: string;
  blocks: any[];
}

interface Level {
  id: string;
  title: string;
  topics: Topic[];
}

export default function JavascriptPage() {
  const data = jsData as { trackTitle: string; levels: Level[] };

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="container mx-auto max-w-4xl px-4 py-8 sm:px-6">
        
        <header className="mb-10 text-center sm:text-left border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
            {data.trackTitle}
          </h1>
          <p className="text-slate-600 text-lg">
            Guia completo de estudos: do console.log ao Node.js.
          </p>
        </header>

        <div className="space-y-12">
          {data.levels.map((level) => (
            <section key={level.id} className="relative">
              
              <div className="sticky top-16 z-10 bg-slate-50/95 backdrop-blur py-2 mb-6 border-b-2 border-blue-500">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm mr-3 border border-blue-200">
                    {level.id === 'basic' ? '1' : level.id === 'medium' ? '2' : '3'}
                  </span>
                  {level.title}
                </h2>
              </div>

              <div className="grid gap-8">
                {level.topics.map((topic, index) => (
                  <article 
                    key={index} 
                    className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-start">
                      {topic.title}
                    </h3>

                    <div className="content-body">
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
        
        <footer className="mt-16 text-center text-slate-400 text-sm pb-8">
          <p>Trilha de estudos gerada para IT Open Helper.</p>
        </footer>

      </div>
    </div>
  );
}