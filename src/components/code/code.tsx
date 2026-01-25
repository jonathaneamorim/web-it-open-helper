import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

type Props = {
    code: string,
    language: string
}   


export function Code({code, language = "js"}: Props) {

    const markdown = [
        "```" + language,
        code,
        "```",
    ].join("\n");

    return(
        <div className="bg-gray-500">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {markdown}
            </ReactMarkdown>
        </div>
    );
}