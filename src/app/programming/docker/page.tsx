import dockerData from "@/data/programming/docker.json";
import CodeListItem from "@/components/CodeListItem";

export default function DockerPage() {
  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-(--foreground)">
            {dockerData.title}
          </h1>
          <p className="text-sm sm:text-base text-(--foreground) opacity-80">
            {dockerData.description}
          </p>
        </div>

        {/* Loop de Seções */}
        <div className="space-y-6 sm:space-y-8">
          {dockerData.sections.map((section) => (
            <div key={section.id}>

              {/* Título da Seção */}
              <div className="mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-(--foreground)">
                  {section.title} [Image of docker architecture diagram]
                </h2>
                
                {section.description && (
                  <p className="text-sm sm:text-base text-(--foreground) mb-3">
                    {section.description}
                  </p>
                )}
                
                {/* Bloco de Código de Exemplo (Só renderiza se tiver 'example' no JSON) */}
                {section.example && (
                    <pre className="bg-(--foreground) p-3 sm:p-4 rounded border border-gray-300 overflow-x-auto mb-4">
                      <code className="text-xs sm:text-sm font-mono text-(--background) whitespace-pre">
                        {section.example}
                      </code>
                    </pre>
                )}

                 {/* Lista de Comandos (CodeListItem) */}
                 {section.items && section.items.length > 0 && (
                    <CodeListItem
                        // Se não tiver exemplo acima, não passamos título pro componente filho pra não duplicar
                        title={undefined} 
                        items={section.items}
                    />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé com Links */}
        {dockerData.links && dockerData.links.length > 0 && (
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-(--foreground)">
              Links Úteis
            </h2>
            <ul className="space-y-2">
              {dockerData.links.map((link, index) => (
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