type Block =
  | { type: "paragraph"; content: string }
  | { type: "subtitle"; content: string }
  | { type: "code"; language: string; content: string }
  | { type: "list"; items: string[] }
  | { type: "link"; label: string; url: string }
  | { type: "image"; src: string; alt: string };

export const BlockRenderer = ({ block }: { block: Block }) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-slate-700 leading-relaxed mb-4">
          {block.content}
        </p>
      );

    case "subtitle":
      return (
        <h4 className="text-md font-bold text-slate-800 mt-6 mb-2 border-b border-slate-200 pb-1">
          {block.content}
        </h4>
      );

    case "code":
      return (
        <div className="mb-6 rounded-lg overflow-hidden border border-slate-300 bg-slate-800 shadow-sm">
          <div className="bg-slate-900 px-4 py-1 text-xs text-slate-400 font-mono border-b border-slate-700 flex justify-between">
            <span>{block.language}</span>
          </div>
          <pre className="p-4 overflow-x-auto">
            <code className="text-sm font-mono text-green-400 whitespace-pre">
              {block.content}
            </code>
          </pre>
        </div>
      );

    case "list":
      return (
        <ul className="list-disc list-inside space-y-1 mb-4 text-slate-700 ml-2">
          {block.items.map((item, idx) => {
             const parts = item.split(/(\*\*.*?\*\*)/g);
             return (
               <li key={idx}>
                 {parts.map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={i} className="text-slate-900 font-semibold">{part.replace(/\*\*/g, '')}</strong>;
                    }
                    return part;
                 })}
               </li>
             )
          })}
        </ul>
      );

    case "link":
      return (
        <div className="mb-3">
          <a
            href={block.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors"
          >
            <span className="mr-2">🔗</span>
            {block.label}
          </a>
        </div>
      );

    case "image":
      return (
        <div className="my-6 p-2 bg-white border border-slate-200 rounded-lg shadow-sm">
          <img 
            src={block.src} 
            alt={block.alt} 
            className="w-full h-auto rounded object-cover max-h-96" 
          />
          <p className="text-xs text-center text-slate-500 mt-2 italic">{block.alt}</p>
        </div>
      );

    default:
      return null;
  }
};