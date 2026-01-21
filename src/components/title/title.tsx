type Props = {
    text: string
}

export function Title({text}: Props) {
    return(
        <div className="w-full flex items-center py-3">
            <h1 className="text-xl md:text-2x1 lg:text-3xl w-full flex justify-center items-center">{text}</h1>
        </div>
    );
}