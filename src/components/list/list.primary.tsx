type listingItems = {
    name?: string,
    link?: string
}

type Props = {
    hasListTitle?: boolean;
    listTitle?: string;
    items?: listingItems[];
};

export default function ListPrimary({ hasListTitle, listTitle, items }: Props) {
    return (
        <div className="flex flex-col text-black w-full rounded-lg bg-white shadow-sm border border-slate-200 p-2">
            { hasListTitle && <h2 className="font-medium text-lg w-full text-center">{listTitle}</h2> }
            <ul className="list-circle list-inside flex w-full flex-col gap-1 p-1.5">
                { items && items.map((item => (
                    <li key={item.name}>
                        <a className="flex text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 text-base" 
                           href={item.link}>
                            {item.name}
                        </a>
                    </li>)
                    )) 
                }
            </ul>
        </div>
    );
}