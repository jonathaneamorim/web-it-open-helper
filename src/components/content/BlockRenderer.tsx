import React from 'react';
import { TopicBlock } from "@/data/registry";

const formatText = (text: string | undefined) => {
  if (!text) return null;
  
  const parts = text.split(/(\*\*.*?\*\*)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-bold text-slate-900 inline">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

export const BlockRenderer = ({ block }: { block: TopicBlock }) => {
  switch (block.type) {
    case "paragraph":
      return (
        <div className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base break-words">
          {formatText(block.content)}
        </div>
      );

    case "subtitle":
      return (
        <h4 className="text-md font-bold text-slate-800 mt-6 mb-3 border-b border-slate-100 pb-1">
          {formatText(block.content)}
        </h4>
      );

    case "code":
      return (
        <div className="mb-6 rounded-lg overflow-hidden border border-slate-300 bg-slate-900 shadow-sm group w-full max-w-full">
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
        <ul className="list-disc list-outside space-y-2 mb-4 text-slate-700 ml-5">
          {block.items?.map((item, idx) => (
            <li key={idx} className="text-sm sm:text-base leading-relaxed pl-1">
              {formatText(item)}
            </li>
          ))}
        </ul>
      );

    case "link":
      return (
        <div className="mb-3">
          <a
            href={block.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 -ml-2 rounded-md transition-colors font-medium text-sm break-all"
          >
            <span className="mr-2 text-lg flex-shrink-0">🔗</span>
            {block.label}
          </a>
        </div>
      );

    case "image":
      return (
        <figure className="my-6 w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={block.src} 
            alt={block.alt} 
            className="w-full h-auto rounded-lg border border-slate-200 shadow-sm" 
          />
          {block.alt && (
             <figcaption className="text-center text-xs text-slate-500 mt-2 italic px-4">
                {block.alt}
             </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
};