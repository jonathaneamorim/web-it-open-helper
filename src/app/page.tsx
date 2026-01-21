import { List } from "@/components/list/list";
import { Title } from "@/components/title/title";
import { Paragraph } from "@/components/paragraph/paragraph";


export default function Home() {
  const listProgramming = [
    { 
      name: "Banco de dados",
      link: "/databases"
    },
    {
      name: "Linguagens de programação",
      link: "/"
    },
    {
      name: "Docker",
      link: "/"
    },
    {
      name: "git",
      link: "/git"
    },
    {
      name: "etc",
      link: "/"
    }
  ];


  return (
    <div>
      <Title 
        text={"IT Open Helper"}
      />
      <Paragraph 
        text={"Este é um reposítorio que tem o objetivo de centralizar, organizar e guardar minhas informações a respeito de diversos campos da tecnologia"} 
      />
       <ul className="list-decimal">
          <List variant={"primary"} listTitle={"Programação"} hasListTitle={true} items={listProgramming} />
            <li>Sistemas operacionais</li>
            <ul>
              <li>Linux</li>
              <li>Windows</li>
              <li>MACos</li>
              <li>MACos</li>
              <li>Terminais</li>
              <li>etc</li>
            </ul>

            <li>Navegadores</li>
            <ul>
              <li>Estratégias</li>
              <li>Filtros</li>
              <li>Pesquisa</li>
              <li>Dicas</li>
              <li>Extensões</li>
              <li>etc</li>
            </ul>
       </ul>
    </div>
  );
}