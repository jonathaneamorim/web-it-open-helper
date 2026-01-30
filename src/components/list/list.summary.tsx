type ListItem = {
    name?: string,
    link?: string
}

type Props = {
    items?: ListItem[];
};

export default function ListSumary({ items }: Props) {
    return (
        <div>
            <ul>
                {items && items.map((item) => ( 
                    <li key={item.name}><a href={item.link}>{item.name}</a></li> 
                ))
                }
            </ul>
        </div>
    );
}