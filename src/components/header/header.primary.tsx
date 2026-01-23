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
               <div className="flex w-full h-full items-center justify-between mx-20">
                    <div className="dark:text-black">
                        <Title text="IT Open Helper" />
                    </div>
                    <ul className="flex dark:text-black gap-5">
                        { links && links.map(link => (
                            <li key={link.name} className="border px-10 py-2"><a href={link.url}>{link.name}</a></li>
                        ))}
                    </ul>
                </div>
               </div>
        </nav>
    );
}