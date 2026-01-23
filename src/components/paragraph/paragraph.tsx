type Props = {
    text: string
}

export function Paragraph({text}: Props) {
    return(
        <div className="w-full p-4 mb-4">
            <p className="w-full text-base md:text-lg">{text}</p>
        </div>
    );
}