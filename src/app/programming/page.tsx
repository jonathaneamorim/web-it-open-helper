import { List } from "@/components/list/list";

export default function Programming() {

    const listProgramming = [
    { 
      name: "Databases",
      url: "/programming/databases"
    },
    {
      name: "git",
      url: "/programming/git"
    },
    {
      name: "Docker",
      url: "/programming/docker"
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