export default function Home() {
  return (
    <div>
      <h1>IT Open Helper</h1>
      <p>Este é um reposítorio que tem o objetivo de centralizar, organizar e guardar minhas informações a respeito de diversos campos da tecnologia</p>
       <ul className="list-disc">
            <li className="text-red-50">Programação</li>
            <ul>
              <li>Banco de dados</li>
              <li>Linguagens de programação</li>
              <li>Docker</li>
              <li><a href="/git">git</a></li>
              <li>etc</li>
            </ul>

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