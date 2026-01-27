export default function SearchNavigation() {
    return (
        <div>
            <h1>Search Navigation Page</h1>
            <p>table</p>

            <p>
                # Guia de Pesquisa Avançada (Operadores Booleanos)

                Utilize estes comandos nos principais navegadores para obter resultados mais precisos:

                | Operador | Função | Exemplo |
                | :--- | :--- | :--- |
                | **Aspas (" ")** | Pesquisa uma frase exata e na mesma ordem. | `"receita de bolo de cenoura"` |
                | **OR** | Pesquisa por uma opção ou outra (ou ambas). | `notebook Dell OR Lenovo` |
                | **Hífen (-)** | Exclui palavras específicas dos resultados. | `receitas -açúcar` |
                | **Asterisco (*)** | Funciona como um curinga para variações de palavras. | `como * uma casa` |
                | **Dois pontos (..)** | Pesquisa dentro de um intervalo numérico (datas/valores). | `notebook R$2000..R$4000` |
                | **Símbolos ($)** | Pesquisa preços em moedas específicas. | `smartphone $500` |

                ---
                *Dica: Você pode combinar vários operadores para refinar ainda mais a sua busca.*
            </p>
        </div>
    );
}