import { Code } from "@/components/code/code";
import { Paragraph } from "@/components/paragraph/paragraph";
import { Title } from "@/components/title/title";

export default function linux() {
    return(
        <div>
            <Title 
                text="🐧 Guia de Comandos Linux (Fedora/Geral)"
            />
            <Paragraph 
                text="Instalação e Execução de Arquivos .run"
            />
            <ul>
                <li className="flex">Permissão total: <Code code="chmod +x arquivo.run" language="bash" type="inline" /></li>
                <li className="flex">Executar: <Code code="sudo ./[arquivo.run]" language="bash" type="inline" /></li>
                <li className="">Alternativa recomendada (tornar executável): 
                    <ul>
                        <li><Code code="chmod +x arquivo.run" language="bash" type="inline" /></li>
                        <li><Code code="sudo ./arquivo.run" language="bash" type="inline" /></li>
                    </ul>
                </li>
            </ul>

            <Paragraph 
                text="Gestão de Arquivos e Pastas"
            />
            <ul>
                <li className="flex">Criar arquivo vazio: <Code code="touch [nome.extensao]" language="bash" type="inline" /></li>
                <li className="flex">Ler conteúdo de arquivo: <Code code="cat [nome]" language="bash" type="inline" /></li>
                <li className="flex">Extrair .tar.gz: <Code code="tar -xzf [arquivo.tar.gz]" language="bash" type="inline" /></li>
                <li className="flex">Extrair .tar.xz: <Code code="tar -xvf [arquivo.tar.xz]" language="bash" type="inline" /></li>
                <li className="flex">Excluir pasta e subpastas: <Code code="rm -rf [pasta]" language="bash" type="inline" /></li>
                <li className="flex">Ocultar/Exibir arquivos ocultos: <Code code="ls -a" language="bash" type="inline" /> - <Code code="ls -la" language="bash" type="inline" /></li>
            </ul>
        </div>
    );
}