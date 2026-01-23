type Links = {
    name: string,
    url: string
}

type Props = {
    links: Links[]
}

export function HeaderSecondary({links}: Props) {
    return(
        <nav>
            <h1>secondary</h1>
        </nav>
    );
}