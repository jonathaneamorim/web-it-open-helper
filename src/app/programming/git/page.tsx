import gitData from "@/data/programming/git.json";
import CodeListItem from "@/components/CodeListItem";

type SectionItem = {
  code: string;
  description: string;
};

type Section = {
  id: string;
  title: string;
  description?: string; 
  example?: string;    
  items: SectionItem[];
};

type PageData = {
  title: string;
  description: string;
  sections: Section[];
  links?: { title: string; url: string }[];
};

export default function GitPage() {
  const data = gitData as unknown as PageData;

  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">

        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-(--foreground)">
            {data.title}
          </h1>
          <p className="text-sm sm:text-base text-(--foreground) opacity-80">
            {data.description}
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {data.sections.map((section) => (
            <div key={section.id}>

              <div className="mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-(--foreground)">
                  {section.title}
                </h2>
                
                {section.description && (
                  <p className="text-sm sm:text-base text-(--foreground) mb-3">
                    {section.description}
                  </p>
                )}

                {section.id === "conceitos-basicos" && (
                   <div className="my-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                     
                     <p className="text-xs text-center text-slate-500 mt-2">Ciclo de vida dos arquivos no Git</p>
                   </div>
                )}

                {section.id === "branching" && (
                   <div className="my-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                     
                     <p className="text-xs text-center text-slate-500 mt-2">Fluxo de Ramificação (Branching)</p>
                   </div>
                )}

                {section.id === "rebase" && (
                   <div className="my-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                     
                     <p className="text-xs text-center text-slate-500 mt-2">Diferença visual: Merge vs Rebase</p>
                   </div>
                )}
                
                {section.example && (
                    <pre className="bg-(--foreground) p-3 sm:p-4 rounded border border-gray-300 overflow-x-auto mb-4">
                      <code className="text-xs sm:text-sm font-mono text-(--background) whitespace-pre">
                        {section.example}
                      </code>
                    </pre>
                )}

                 {section.items && section.items.length > 0 && (
                    <CodeListItem
                        title={undefined} 
                        items={section.items}
                    />
                )}
              </div>
            </div>
          ))}
        </div>

        {data.links && data.links.length > 0 && (
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-(--foreground)">
              Referência & Joguinhos
            </h2>
            <ul className="space-y-2">
              {data.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    {link.title} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}