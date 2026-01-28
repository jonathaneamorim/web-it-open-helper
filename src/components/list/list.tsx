import ListPrimary from "./list.primary"
import ListSecondary from "./list.secondary";
import ListSumary from "./list.sumary";

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
    | {
            variant: "sumary",
            items: ListingItem[];
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
        case "sumary":
            return (
                <ListSumary 
                    items={props.items}
                />
            );
    }
}