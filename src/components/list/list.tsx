import ListPrimary from "./list.primary";
import ListSecondary from "./list.secondary";
import ListSummary from "./list.summary";

export type ListingItem = {
    name: string;
    url: string; 
}

type BaseListProps = {
    items: ListingItem[];
}

type ListProps = 
    | (BaseListProps & {
        variant: "primary";
        listTitle?: string; 
      })
    | (BaseListProps & {
        variant: "secondary";
        hasListTitle?: boolean;
        listTitle?: string;
      })
    | (BaseListProps & {
        variant: "summary";
      });

export function List(props: ListProps) {
    const { variant, items } = props;

    switch(variant) {
        case "primary":
            const primaryProps = props as Extract<ListProps, { variant: "primary" }>;
            return (
                <ListPrimary 
                    items={items}
                    listTitle={primaryProps.listTitle}
                />
            );

        case "secondary":
            const secondaryProps = props as Extract<ListProps, { variant: "secondary" }>;
            return (
                <ListSecondary 
                    items={items}
                    listTitle={secondaryProps.listTitle}
                />
            );

        case "summary":
            return <ListSummary items={items} />;
            
        default:
            return null;
    }
}