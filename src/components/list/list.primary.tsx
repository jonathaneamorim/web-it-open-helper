import Link from "next/link";
import { ListingItem } from "./list"; 

type Props = {
  listTitle?: string; 
  items?: ListingItem[];
};

export default function ListPrimary({ listTitle, items = [] }: Props) {
  if (!items.length) return null;

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col">
      
      {listTitle && (
        <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {listTitle}
          </h2>
        </div>
      )}

      <ul className="flex flex-col">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.url}
              className="group flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200 border-b border-slate-50 last:border-0"
            >
              {item.name}
              
              <span className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200 text-blue-400">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}