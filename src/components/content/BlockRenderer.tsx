import { TopicBlock } from "@/data/registry";

export const BlockRenderer = ({ block }: { block: TopicBlock }) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
          {block.content}
        </p>
      );

    case "subtitle":
      return (
        <h4 className="text-md font-bold text-slate-800 mt-6 mb-3 border-b border-slate-100 pb-1">
          {block.content}
        </h4>
      );

    case "code":
      return (
        <div className="mb-6 rounded-lg overflow-hidden border border-slate-300 bg-slate-900 shadow-sm group">
          <div className="bg-slate-950 px-4 py-1.5 text-xs text-slate-400 font-mono border-b border-slate-800 flex justify-between items-center">
            <span className="uppercase">{block.language || "text"}</span>
            <div className="flex space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            </div>
          </div>
          <pre className="p-4 overflow-x-auto custom-scrollbar">
            <code className="text-sm font-mono text-green-400 whitespace-pre">
              {block.content}
            </code>
          </pre>
        </div>
      );

    case "list":
      return (
        <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700 ml-1">
          {block.items?.map((item, idx) => {
            const parts = item.split(/(\*\*.*?\*\*)/g);
            return (
              <li key={idx} className="text-sm sm:text-base leading-relaxed">
                <span className="-ml-1 inline-block">
                {parts.map((part, i) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} className="text-slate-900 font-semibold">{part.replace(/\*\*/g, '')}</strong>;
                  }
                  return part;
                })}
                </span>
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
            className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 -ml-2 rounded-md transition-colors font-medium text-sm"
          >
            <span className="mr-2 text-lg">🔗</span>
            {block.label}
          </a>
        </div>
      );

    case "image":
      return (
        <figure className="my-6">
          <img 
            src={block.src} 
            alt={block.alt} 
            className="w-full h-auto rounded-lg border border-slate-200 shadow-sm" 
          />
          {block.alt && (
             <figcaption className="text-center text-xs text-slate-500 mt-2 italic">{block.alt}</figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
};