import { Title } from "../title/title";

type Links = {
    name: string,
    url: string
}

type Props = {
    links: Links[]
}

export function HeaderPrimary({links}: Props) {
    return(
        <nav className="w-full h-16 bg-(--foreground)">
            <div className="lg:container flex w-full h-full lg:mx-auto">
               <div className="flex w-full h-full items-center justify-between mx-20 text-(--background)">
                    <div className="text-(--background)">
                        <a href="/"><Title text="IT Open Helper" /></a>
                    </div>
                    <ul className="flex gap-5">
                        { links && links.map(link => (
                            <li key={link.name}>
                                <a className="px-10 py-2 hover:bg-(--background) hover:text-(--foreground) transition rounded-sm pointer" href={link.url}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
               </div>
        </nav>
    );
}