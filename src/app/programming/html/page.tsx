export default function HtmlPage() {
    return (
        <div>
            <h1>HTML Page</h1>
            <p>{`
            # Anotações referente a trilha de HTML e CSS

# Sumário
- [Anotações referente a trilha de HTML e CSS](#anotações-referente-a-trilha-de-html-e-css)
- [Sumário](#sumário)
  - [TAGs de estrutura básica](#tags-de-estrutura-básica)
  - [Tags estruturais](#tags-estruturais)
  - [Principais atributos de uma tag HTML](#principais-atributos-de-uma-tag-html)
  - [TAGs de texto e manipulação](#tags-de-texto-e-manipulação)
  - [TAG de link](#tag-de-link)
  - [TAGs de multimidia](#tags-de-multimidia)
  - [Estrutura básica do CSS](#estrutura-básica-do-css)
  - [Seletores CSS](#seletores-css)
  - [Seletores de Pseudo-classes](#seletores-de-pseudo-classes)
  - [Seletores de Pseudo-elementos](#seletores-de-pseudo-elementos)
  - [Flex](#flex)
  - [Propriedades](#propriedades)
  - [Media Queries](#media-queries)
  - [Links](#links)

## TAGs de estrutura básica
- `<!DOCTYPE>`: A tag !DOCTYPE informa ao navegador a versão do HTML que está sendo utilizada.
- `<html>`: Esta tag é o elemento básico da estrutura do HTML. Assim sendo, ela conterá todos os elementos do seu documento. Todo documento HTML deve iniciar e finalizar com essa tag;
- `<head>`: Essa tag delimita o cabeçalho do documento. Não possui nenhum valor visível, porém é capaz de transmitir ao navegador diversas informações muito úteis e essenciais a uma boa apresentação do seu documento HTML;
- `<title>`: Essa tag define o título da sua página, o nome que aparecerá na sua aba, janela ou guia. Por esta razão, a tag `<title>` é de grande importância para o SEO;
- `<meta/>`: Essa tag permite inserir metadados ao seu documento.
- `<body>`: Finalmente, a tag que representa o corpo do documento. Em síntese, é nessa tag que todos os elementos visíveis do seu site devem ser inseridos.

## Tags estruturais
- `<header>`: Definem um cabeçalho.
- `<main>`: Conteudo principal da página.
- `<article>`: Definem um artigo. É muito utilizada por blogs.
- `<aside>`: É utilizado para conteúdo secundário, como glossários ou explicações laterais.
- `<footer>`: Define um rodapé para a página.
- `<section>`: Essas tags definem uma sessão para sua página.
- `<article>`: Essas tags definem um artigo da sua página. Nesse sentido, são utilizadas para separar o conteúdo da sua página. Muito utilizado principalmente por blogs ou páginas de conteúdo.
- `<nav>`: Essa tag define um conteúdo de navegação. É muito utilizado em conjunto com listas e na criação de menus.
- `<div>`: Define uma divisão da página. Desta forma, funciona como um container para conteúdo de fluxo. Uma vez que não possui um valor semântico, é muito utilizado para organizar melhor o conteúdo. Anteriormente ao HTML5, era utilizado no lugar das categorias acima.

## Principais atributos de uma tag HTML
- `class=”…“` – Atribui uma classe ao elemento (uma classe pode ser utilizada para um ou mais elementos);
- `id=”…“` – Atribui um id ao elemento (um id deve ser único, ou seja atribuído a um único elemento);
- `hidden` – Oculta o elemento;
- `style=”…”` – Permite incluir elementos CSS (estilos) dentro da tag;
- `lang=”…”` – Define o idioma principal do elemento;
- `title=”…”` – Define o título do elemento;
- `alt=”…”` – Define um texto alternativo e, por isso, é muito utilizado em imagens, auxilia nas práticas de SEO;
- `align=”…”` – Permite definir o padrão de alinhamento desse elemento, como por exemplo: right, center, left e justify;
- `width=”…”` – Define uma largura para o elemento;
- `height=”…”` – Define uma altura para o elemento.

## TAGs de texto e manipulação
- `<p>`: Principal tag de texto, compõe um parágrafo;
- `<h1> - <h6>`: Definem titulos da página HTML.
- `<span>`: Parecido com a tag de paragrafo, geralmente utilizado para pequenas informações. Também pode ser usada como container.
- `<pre>`: Texto pré-formatado. Utilizada para inserir codigo.
- `<strong>`: Representa um trecho de texto com forte importância e deixa o texto em negrito. Uma tag `<strong>` dentro de outra `<strong>` tem mais relevância.
- `<b>`: Estiliza o texto para negrito, sem definir relevâncias.
- `<i>`: Texto em italico sem definir relevâncias.
- `<em>`: Representa uma enfase no texto (Não representa a mesma coisa que o `<i>`).
- `<br/>`: Essa tag não necessita de fechamento, ela executa a função de quebra de linha.
- `<hr/>`: Essa tag não necessita de fechamento, ela forma uma linha horizontal.

## TAG de link
- `<a>`: Essa tag é responsável por fazer a ligação de nossa página a outra.
  - `href="..."`: Atributo para inserir o link que deseja anexar.
  - `target="..."`: Define a forma de abertura do link no navegador.
    - `_self`: Abrir o link na mesma janela/aba (default).
    - `_blank`: Abrir o link em uma nova aba/janela.
    - `_parent`: Abrir o link na janela/aba pai (útil se o link estiver dentro de um `<iframe>`).
    - `_top`: Abrir o link na janela/aba principal, substituindo qualquer estrutura de frames ou iframes.
    - `<nome>`: Abrir o link em uma aba/janela específica com o nome fornecido (ex: target="novaAba"). Se uma aba com esse nome não existir, será criada.
  - `accesskey`: Define uma tecla de atalho para ativar o link. Ex: accesskey="r".
  - `referrerpolicy`: Define qual política de referenciador será usada ao clicar no link. Ex: referrerpolicy="no-referrer".
  - `download`: Indica que o link deve iniciar o download de um arquivo em vez de navegar para ele. Ex: download="arquivo.pdf".
  - `hreflang`: Indica o idioma do recurso vinculado. Ex: hreflang="en".
  - `rel`: Especifica a relação entre a página atual e o destino do link. Ex: rel="noopener noreferrer"

## TAGs de multimidia
- `<img>`: Utilizada para inserir imagem.
- `<iframe>`: Inserir recursos de outras páginas.
- `<video>`: Vem acompanhada da tag `<source src="[location]" type="[type]">`. Utilizada para inserir um vídeo.
- `<audio>`: Vem acompanhada da tag `<source src="[location]" type="[Type]">`. Utilizada para inserir um audio.
```
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.ogg" type="video/ogg">
  Seu navegador não possui suporte para Vídeos.
</video>
```

## Estrutura básica do CSS
- A estrutura básica do css é composto dos seguintes elementos:
```
<seletor> {
  <propriedade>: <valor>;
}

p {
  color: red;
}
```

## Seletores CSS
- `div { style }`: Seleciona todos os elementos div do meu documento HTML.
- `.class { style }`: Seleciona todos os elementos que possuem a classe no documento HTML.
- `#id { style }`: Seleciona o elemento com o id indicado no documento HTML.
- `div > p { style }`: Seletor de filho direto. Seleciona elementos que são filhos diretos de um elemento pai. (Não engloba elementos que não são filhos diretos).
- `div p { style }`: Seletores de Descendente. Seleciona todos os elementos dentro de um elemento pai, incluindo filhos e netos.
- `div.class { style }`: Seleciona especificamente uma classe div que possua a classe .class.
- `h1 + p { style }`: Seletores de Irmão Adjacente. Seleciona o elemento que é o irmão imediato do elemento anterior.
- `h1 ~ p { style }`: Seletores de Irmão Geral. Seleciona todos os elementos que são irmãos do elemento anterior.
- `h1, h2, h3 { style }`: Permite aplicar o mesmo estilo a vários seletores de uma vez.
- `* { style }`: Seleciona todos os elementos da página.
- `div[class] {style}`: Qualquer elemento DIV que contenha o atributo `class`.
- `div[id="test"] {style}`: Qualquer elemento div que contenha em seu id somente o texto "test";
- `div[class~="btn"] {style}`: Basicamente qualquer elemento div que contenha entre suas classes a classe btn.
- `a[href$="pdf"] {style}`: Qualquer elemento link em que seu link termine com pdf.
- `a[href^="http"] {style}`: Qualquer elemento link que inicie com o prefixo http. Neste caso estou definindo todos os links que levam para uma pagina externa.
- `input[type="checkbox"]:checked { style }`: Combinando atributos com outros tipos de seletores.

## Seletores de Pseudo-classes
- `div:hover { style }`: Seleciona o elemento quando está sendo "hovered" (passado o mouse sobre).
- `ul li:first-child { style }`: Aplica a estilização no primeiro elemento `<li>` de qualquer lista do documento HTML. O mesmo se aplica ao contrario, `ul li:last-child { style }`.
- `ul li::nth-last-child(n) { style }`: Seleciona o filho a contar de trás para frente (n);
- `div:only-child { style }`: Seleciona um elemento que é o único filho de seu elemento pai.
- `ul li:nth-child(1) { style }`: Seleciona o primeiro elemento `<li>` de qualquer lista do documento html.
- `li:nth-child(even) { style }`: Seleciona todos os elementos `<li>` impares de qualquer lista. (Para contabilizar números pares e impares ele considera a ordem no documento).
- `li:nth-child(odd) { style }`: Seleciona todos os elementos `<li>` pares de qualquer lista. (Para contabilizar números pares e impares ele considera a ordem no documento).
- `article:nth-of-type(1) {style}`: Selectiona o primeiro elemento do <strong>TIPO</strong> article da pagina.
- `p:nth-last-of-type(n) { style }`: Seleciona o n-ésimo elemento de seu tipo dentro de seu elemento pai, contando de trás para frente.
- `article p:first-of-type {style}`: Aplica a estilização no primeiro elemento do <strong>TIPO PARAGRAFO</strong> de todo elemento article da página ignorando os elementos intermediários. o mesmo se aplica ao contrario, `article p:last-of-type {style}`.
- `p:not(.special) { style }`: Seleciona elementos que não correspondem ao seletor fornecido.
- `input:checked { style }`: Seleciona elementos que estão em um estado "checked", como caixas de seleção.
- `a:active { style }`: Seleciona um elemento no momento em que ele está sendo ativado, como um link sendo clicado.
- `input:focus { style }`: Seleciona um elemento quando ele recebe o foco, como um campo de input sendo selecionado.
- `div:empty { style }`: Seleciona elementos que não contêm nada (sem filhos, incluindo texto ou outros elementos).
- `input:enabled { style }`: Seleciona elementos que estão habilitados (não desabilitados).
- `input:disabled { style }`: Seleciona elementos que estão desabilitados.
- `#section:target { style }`: Seleciona um elemento que corresponde ao fragmento da URL (como um ID de um link de ancoragem). (Ex: Voltar ao topo).
- `input:valid { style }`: Seleciona elementos de formulário com dados válidos (como campos de texto, checkbox, etc., que passaram na validação).
- `input:invalid { style }`: Seleciona elementos de formulário com dados inválidos.
- `input:in-range { style }`: Seleciona elementos de formulário dentro de um intervalo de valores válido (como um campo de número). [exmplificar melhor depois].
- `input:out-of-range { style }`: Seleciona elementos de formulário fora de um intervalo de valores válido.
- `input:required { style }`: Seleciona elementos de formulário que são obrigatórios (marcados com o atributo required).
- `input:optional { style }`: Seleciona elementos de formulário que não são obrigatórios (não possuem o atributo required).
- `input:user-valid { style }`: Seleciona um campo de entrada que foi validado pelo usuário (aplica-se a campos que têm validação interativa no HTML5).
- `input:user-invalid { style }`: Seleciona um campo de entrada que falhou na validação interativa do usuário.

## Seletores de Pseudo-elementos
- `p::before { style }`: Insere conteúdo antes do conteúdo de um elemento.
- `p::after { style }`: Insere conteúdo após o conteúdo de um elemento.
- `p::first-letter { style }`: Estiliza a primeira letra de um elemento.
- `p::first-line { style }`: Estiliza a primeira linha de um elemento.
- `p::selection { style }`: Estiliza a parte de um elemento que está sendo selecionada (como texto destacado pelo usuário).
- `input::placeholder { style }`: Estiliza o texto de espaço reservado (placeholder) em campos de formulário.
- `dialog::backdrop { style }`: Estiliza o fundo de um elemento em contextos como diálogos modais ou janelas de fundo.
- `ul::marker { style }`: Estiliza os marcadores de listas, como bullets ou números em listas ordenadas.

## Flex
- `Justify-content`: Alinha os itens do elemento flexível no eixo horizontal
  - `flex-start`: Alinha os itens no início do contêiner (padrão).
  - `flex-end`: Alinha os itens no final do contêiner.
  - `center`: Alinha os itens no centro do contêiner.
  - `space-between`: Distribui os itens de forma que o primeiro item fique no início e o último no final, com espaços iguais entre eles.
  - `space-around`: Distribui os itens com espaços iguais ao redor de cada item.
  - `space-evenly`: Distribui os itens com espaços iguais entre eles, incluindo as extremidades do contêiner.
---
- `align-items`: Alinha os itens do elemento flexível no eixo vertical.
  - `flex-start`: Alinha os itens no início do contêiner, ao longo do eixo transversal (topo no caso de flex-direction: row).
  - `flex-end`: Alinha os itens no final do contêiner, ao longo do eixo transversal (fundo no caso de flex-direction: row).
  - `center`: Alinha os itens no centro do contêiner ao longo do eixo transversal.
  - `baseline`: Alinha os itens de modo que a linha de base do texto de cada item fique alinhada.
  - `stretch`: Expande os itens para preencher o contêiner ao longo do eixo transversal (padrão).
- `align-self`: Alinha somente um elemento especifico do elemento flexivel. Utiliza os mesmos comandos e conceitos do `align-items`.
---
- `flex-direction`: Define a direção dos itens do elemento flexível.
  - `row (padrão)`: Os itens são dispostos de forma horizontal, da esquerda para a direita (em linguagens que escrevem da esquerda para a direita) ao longo do eixo principal.
  - `row-reverse`: Os itens são dispostos de forma horizontal, mas da direita para a esquerda, invertendo a ordem do valor anterior.
  - `column`: Os itens são dispostos de forma vertical, de cima para baixo, ao longo do eixo principal.
  - `column-reverse`: Os itens são dispostos de forma vertical, mas de baixo para cima, invertendo a ordem de column.
---
- `flex-wrap`: Define a disposição dos itens do elemento flexível, nesse caso, define se haverá quebra de linha caso o elemento chegue a capacidade máxima ou não.
  - `nowrap` (padrão): Os itens não vão quebrar a linha, ou seja, eles ficam todos em uma única linha ou coluna, mesmo que não haja espaço suficiente.
  - `wrap`: Os itens vão quebrar a linha (ou coluna) se necessário, ou seja, eles vão se mover para a próxima linha ou coluna quando o espaço disponível for preenchido.
  - `wrap-reverse`: Os itens também vão quebrar a linha (ou coluna), mas a nova linha (ou coluna) será empilhada na direção oposta (se você usar row, os itens se moverão para baixo, e se usar column, eles se moverão para a direita).
---
- `flex-flow: <flex-direction> <flex-wrap>`: Uma mistura do flex-direction e do flex-wrap no mesmo elemento.
---
- `align-content: <align-items>`: Alinha a disposição dos itens de um elementos que sofreram wrap utilizando a logica do align-items.
---
- `order: <integer>`: Define a ordem dos itens de um elemento flexível.

## Propriedades
- `border-radius: [ <comprimento> | <porcentagem> ]{1,4} [/ [ <comprimento> | <porcentagem> ]{1,4} ]?`: Define a curvatura da borda de um elemento.
- `opacity: <number 0-1>`: Define a opacidade de um elemento.
- `box-sizing: <value>`: Define como o tamanho total de um elemento é calculado considerando seu `padding` e seu `border`.
  - `content-box`: (Default) Quando um elemento com essa propriedade é dimensionado `width | height` apenas o conteudo em seu interior será considerado, excluindo seu `padding` e seu `border` do dimensionamento.
  - `padding-box`: No dimensionamento de um elemento que contenha esse valor não será considerada o `border` incluindo apenas o valor do elemento e o `padding`.
  - `border-box`: No dimensionamento de um elemento que contenha o `border-box` serão incluidos o seu `padding` e seu `border`.
  - `inherit`: Ao utilizar esta propriedade em um elemento ele herda a configuração de `bordex-box` do conteiner pai.
- `position`: Utilizada para definir a posição de um elemento em relação a seu conteiner ou em relação a página.
  - `static`: (Default) São elementos posicionados de acordo com o fluxo normal do documento.
  - `relative`: O elemento é posicionado em relação à sua posição original no fluxo normal do documento. Utilizando as propriedades `top`, `left`, `right` e `bottom` deslocam o elemento a partir da sua posição original, mantendo seu espaço original no layout.
  - `absolute`: O elemento é posicionado em relação ao seu primeiro ancestral posicionado (um elemento diferente de static). Se não houver um elemento pai diferente de static ele fica posicionado em relação ao documento e não afeta o posicionamento de outros elementos na página. Também utiliza as propriedades `top`, `left`, `right` e `bottom` para se posicionar.
  - `sticky`: O elemento fixa em uma posição especifica enquanto a pagina é rolada e quando atinge um limite fica fixo.
  - `fixed`: O elemento é posicionado de acordo com a janela de visualização (viewport), ou seja, o elemento é fixo na tela ao rolar a página. Também é deslocado com as propriedades `top`, `left`, `right` e `bottom`.
- `float: <left> | <right> | <none> | <inherit>`: Propriedade de posicionamento usada para alterar a posição de um elemento no fluxo natural da página e empurrá-lo para a esquerda ou para a direita de seu conteiner. Diferentemente do `position` o `float` permite que o conteudo flua ao seu redor.
- `z-index: <value>`: Essa propriedade é utilizada para controlar a sobreposição (empilhamento) de elementos na página.
  - `valores maiores`: Colocam o elemento mais acima (na frente) de outros.
  - `valores menores`: Colocam o elemento mais abaixo (atras) de outros
  - Observações: 
    - O `z-index` só funciona em elementos com um `position` diferente de static.
    - O `z-index` pode ser negativo, o que coloca o elemento abaixo de outros.
    - Elementos com `z-index` iguais serão empilhados na ordem em que aparecem no código, ou seja, o primeiro elemento será empilhado abaixo do segundo.


## Media Queries
- Limita o escopo dos estilos CSS para serem aplicados somente quando certas condições de midia são atendidas. (Ex: IF-ELSE do navegador). São essenciais para um design responsivo.
- `@media [not | only] <media-type> [and] (<media-condition>)`: Estrutura básica de uma `media query`.
  - Caracteristicas das media queries:
    - `Width` e `Height`: Valida o tamanho da tela em uma certa medida.
      - `max-width`: Aplica o estilo se a largura da tela for menor ou igual ao valor especificado.
      - `min-width`: Aplica o estilo se a largura da tela for maior ou igual ao valor especificado.
      - `max-height`: Aplica o estilo se a altura da tela for menor ou igual ao valor especificado.
      - `min-height`: Aplica o estilo se a altura da tela for maior ou igual ao valor especificado.
      ```
      /* Estilos para telas com largura de 600px ou menos */
      @media (max-width: 600px) {
        body {
          background-color: lightblue;
        }
      }
      ```
    - `orientation`: Valida a orientação da tela. *(Obsoleto quando utilizado de forma independente)*.
      - `portrait`: Aplica o estilo se o dispositivo estiver em orientação vertical. (Ideal para estilização de celular e computador).
      - `landscape`: Aplica o estilo se o dispositivo estiver na orientação horizontal.
      ```
      /* Para dispositivos em orientação retrato (vertical) */
      @media (orientation: portrait) {
        body {
          background-color: lightgreen;
        }
      }
      ```
    - `resolution`: Valida a resolução da tela. (Alta ou baixa densidade de pixels). *(Obsoleto quando utilizado com valores de DPI ou DPCM)*
      - `min-resolution` e `max-resolution`: Especificam limites para a resolução.
      ```
      /* Para telas com resolução de 300 dpi ou mais */
      @media (min-resolution: 300dpi) {
        body {
          font-size: 20px;
        }
      }
      ```
    - `aspect-ratio`: Refere-se a proporção da largura para a altura da tela ou do dispositivo.
      - `min-aspect-ratio` e `max-aspect-ratio`: Permitem aplicar estilos com base na proporção da tela.
      ```
      /* Para dispositivos com aspecto de tela maior que 16:9 */
      @media (min-aspect-ratio: 16/9) {
        body {
          font-size: 18px;
        }
      }
      ```
    - `prefers-color-scheme`: Detecta se o usuário prefere um esquema de cores claro ou escuro (modo claro ou modo escuro).
      ```
        /* Para usuários que preferem um esquema de cores escuro */
        @media (prefers-color-scheme: dark) {
          body {
            background-color: black;
            color: white;
          }
        }
      ```
    - `pointer`: Detectar o tipo de entrada apontada. Util para ajustar o layout em dispositivos com diferentes tipos de ponteiro (mouse, toque, etc).
      - `none`: Sem capacidade de apontar (toque de tela - Smartphones e tablets).
      - `cursor`: Um ponteiro de cursor está disponivel (mouse).
      ```
      /* Para dispositivos com entrada de ponteiro (mouse) */
      @media (pointer: coarse) {
        button {
          font-size: 18px;
        }
      }
      ```
    - `hover`: Detecta se o dispositivo suporta ou não o efeito de passar o ponteiro sobre um elemento
      - `none`: O dispositivo não pode detectar o efeito de passar ou mouse sobre um elemento (Geralmente dispositivos de toque - Smartphones e Tablets).
      - `hover`: O dispositivo pode detectar o efeito de passar o mouse sobre um elemento. (Computadores).
      ```
      /* Para dispositivos que suportam hover */
      @media (hover: hover) {
        a:hover {
          color: red;
        }
      }
      ``` 
## Links
- [CSS Reference](https://tympanus.net/codrops/css_reference/)`}</p>
        </div>
    );
}