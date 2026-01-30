import cssData from "@/data/programming/css.json";
import CodeListItem from "@/components/CodeListItem";

export default function CssPage() {
  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">

        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-(--foreground)">
            CSS - Referência Completa
          </h1>
          <p className="text-sm sm:text-base text-(--foreground) opacity-80">
            Guia de referência rápida com seletores, propriedades e media queries
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {cssData.sections.map((section) => (
            <div key={section.id}>

              {section.example && (
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-(--foreground)">
                    {section.title}
                  </h2>
                  
                  {section.description && (
                    <p className="text-sm sm:text-base text-(--foreground) mb-3">
                      {section.description}
                    </p>
                  )}
                  
                  <pre className="bg-(--foreground) p-3 sm:p-4 rounded border border-gray-300 overflow-x-auto">
                    <code className="text-xs sm:text-sm font-mono text-(--background) whitespace-pre">
                      {section.example}
                    </code>
                  </pre>
                </div>
              )}
              
              {section.items && section.items.length > 0 && (
                <CodeListItem
                  title={!section.example ? section.title : undefined}
                  items={section.items}
                />
              )}
            </div>
          ))}
        </div>

        {cssData.links && cssData.links.length > 0 && (
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-(--foreground)">
              Links Úteis
            </h2>
            <ul className="space-y-2">
              {cssData.links.map((link, index) => (
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