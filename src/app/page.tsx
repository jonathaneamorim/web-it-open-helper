import { List } from "@/components/list/list";
import Listing from "@/components/list/list.primary";

export default function Home() {

  const list = [
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
      <h1>IT Open Helper</h1>
      <p className="">Este é um reposítorio que tem o objetivo de centralizar, organizar e guardar minhas informações a respeito de diversos campos da tecnologia</p>
       <ul className="list-decimal">
          <List variant={"primary"} listTitle={"Programação"} hasListTitle={true} items={list} />
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