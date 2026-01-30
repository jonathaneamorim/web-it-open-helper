interface CodeItem {
  code: string;
  description: string;
}

interface CodeListItemProps {
  items: CodeItem[];
  title?: string;
}

export default function CodeListItem({ items, title }: CodeListItemProps) {
  return (
    <div className="my-4 sm:my-6">
      {title && (
        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100">
          {title}
        </h2>
      )}
      
      <ul className="space-y-2 sm:space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex flex-col gap-2">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
              <code className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-xs sm:text-sm font-mono text-pink-600 dark:text-pink-400 whitespace-nowrap min-w-0">
                {item.code}
              </code>
            </div>
            
            <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export type { CodeItem };