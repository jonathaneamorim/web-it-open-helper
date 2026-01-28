type Props = {
    listTitle?: string;
    items?: string[];
};

export default function ListSecondary({ listTitle, items }: Props) {
    return (
        <div>
            { listTitle && <h2>{listTitle}</h2>}
            <ul>
                {items && items.map((item) => ( <li key={item}>{item}</li> ))}
            </ul>
        </div>
    );
}