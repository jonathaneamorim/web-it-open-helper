import { HeaderPrimary } from "./header.primary"
import { HeaderSecondary } from "./header.secondary"

type Links = {
    url: string,
    name: string
}

type HeaderProps = 
    | {
        variant: "primary",
        links: Links[]
    }
    | {
        variant: "secondary",
        links: Links[]
    }

export function Header(props: HeaderProps) {  
    switch(props.variant) {
        case "primary":
            return(
                <HeaderPrimary links={props.links} />
            );
        case "secondary":
            return(
                <HeaderSecondary links={props.links} />
            );
    }
};