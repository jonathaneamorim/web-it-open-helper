import { List } from "@/components/list/list";
import { url } from "inspector";

export default function Programming() {

    const listProgramming = [
    { 
      name: "Databases",
      link: "/programming/databases"
    },
    {
      name: "git",
      link: "/programming/git"
    },
    {
      name: "Docker",
      link: "/programming/docker"
    },
    {
      name: "Html",
      link: "/programming/html"
    }
  ];

    return(
        <div>
            <List 
                variant="primary" 
                hasListTitle={true} 
                listTitle="Lista de Conteudos de programação"
                items={listProgramming} />
        </div>
    );
}