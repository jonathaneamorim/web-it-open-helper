import { HeaderPrimary } from "./header.primary"
import { HeaderSecondary } from "./header.secondary"

type Links = {
    url: string,
    name: string
}

type HeaderProps = {
    variant: "primary" | "secondary",
}

export function Header(props: HeaderProps) {  
    switch(props.variant) {
        case "primary":
            return(
                <HeaderPrimary />
            );
        case "secondary":
            return(
                <HeaderSecondary  />
            );
    }
};