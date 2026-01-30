import Link from "next/link";
import { ListingItem } from "./list";

type Props = {
  listTitle?: string;
  items?: ListingItem[];
};

export default function ListSecondary({ listTitle, items = [] }: Props) {
  if (!items.length) return null;

  return (
    <div className="flex flex-col w-full py-2">
      {listTitle && (
        <h3 className="px-2 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
          {listTitle}
        </h3>
      )}

      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.url}
              className="flex items-center px-2 py-1.5 text-sm text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-3 group-hover:bg-blue-500 transition-colors" />
              
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}