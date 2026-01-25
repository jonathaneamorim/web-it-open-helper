import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

type Props = {
    code: string,
    language: string,
    type: string
}   

export function Code({code, type, language = "js"}: Props) {
    let formattedCode = "";

    if(type === "inline") {
        formattedCode = `\`${code}\``;
    } else {
        formattedCode = [
            "```" + language,
            code,
            "```",
        ].join("\n").replace(/\n/gi, "&nbsp; \n");
    }

    return(
       <div className="mx-3">
            <ReactMarkdown 
                rehypePlugins={[rehypeHighlight]}
                children={formattedCode}
            />
       </div>
    );
}