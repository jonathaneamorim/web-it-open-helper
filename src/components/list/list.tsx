import ListPrimary from "./list.primary"
import ListSecondary from "./list.secondary";

type ListingItem = {
    name?: string,
    url?: string
}

type ListProps = 
    |   {
            variant: "primary",
            hasListTitle?: boolean;
            listTitle?: string;
            items?: ListingItem[];
        }
    |   {
            variant: "secondary",
            hasListTitle?: boolean;
            listTitle?: string;
            items?: ListingItem[];
        }

export function List(props: ListProps) {
    switch(props.variant) {
        case "primary":
            return (
                <ListPrimary 
                    hasListTitle={props.hasListTitle}
                    listTitle={props.listTitle}
                    items={props.items}
                />
            );
        case "secondary": 
            return (
                <ListSecondary 
                    hasListTitle={props.hasListTitle}
                    listTitle={props.listTitle}
                    items={props.items}
                />
            );
    }
}