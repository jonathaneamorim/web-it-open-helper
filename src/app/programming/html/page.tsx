import htmlData from "@/data/programming/html.json";
import CodeListItem from "@/components/CodeListItem";

export default function HtmlPage() {
  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            HTML - Referência Completa
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 opacity-80">
            Guia de referência rápida com todas as tags e atributos HTML
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {htmlData.sections.map((section) => (
            <CodeListItem
              key={section.id}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
}