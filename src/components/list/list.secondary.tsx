type ListItem = {
    name?: string,
    link?: string
}

type Props = {
    hasListTitle?: boolean;
    listTitle?: string;
    variant?: string,
    items?: ListItem[];
};

export default function ListSecondary({ hasListTitle, listTitle, items }: Props) {
    return (
        <div>
            { hasListTitle && <h2>{listTitle}</h2>}
            <ul>
                {items && items.map((item) => ( <li key={item.name}>{item.name}</li> ))}
            </ul>
        </div>
    );
}