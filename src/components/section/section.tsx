type ListingItem = {
    name?: string,
    url?: string
}

type SectionProps = 
    |   {
            variant: "SectionListing",
            hasListTitle?: boolean;
            listTitle?: string;
            items?: ListingItem[];
        }

export function Section(props: SectionProps){
        switch(props.variant) {
        case "SectionListing":
            return (
                <section>
                   
                </section>
            )
    }
}