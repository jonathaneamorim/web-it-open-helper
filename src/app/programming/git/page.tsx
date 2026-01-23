import Image from "next/image";

export default function Git() {
  return (
    <div>
      <p>
        # GIT HELPER

## Básico 
- O que é controle de versão e como ele funciona?
	- Controle de versão, como o próprio nome já diz, tem a finalidade de controlar a versões de um projeto ou código, armazenando versões sólidas do projeto e permitindo o trabalho simultâneo entre os programadores e sincronização de alterações quando necessário.
	
- Quais são os 3 estados possíveis dos arquivos?
	- Modified: Quando o arquivo sofre modificações mas não foi preparado para ser incluído no repositório GIT.
	- Staged: O arquivo foi marcado para ser adicionado ao próximo arquivo. (GIT ADD)
	- Committed: As alterações foram registradas no repósitorio GIT. (GIT COMMIT)
	
- Como iniciar um repositório GIT em um projeto?
	- Para iniciar um repositório GIT em uma máquina local, é possível utilizar o comando GIT INIT.
	
- Como visualizar o histórico de mudanças?
	- Para visualizar o histórico de alterações é possível utilizar o comando GIT DIFF
	
- Como adicionar arquivos a um commit já realizado (amened), tirar um arquivo do estado de Staged (reset) e descartar modificações em um arquivo Modified (checkout)?
	- Adicionar arquiovos a um commit já realizado: 
		- Para realizar esta tarefa é necessário ter um commit realizado antes, colocar algum arquivo na área de preparação (staging). Feito esses passos agora é só executar o commando git commit --amend que os arquivos que estão na área de staging entrarão no ultimo commit realizado, sem criar um novo commit.
	- Tirar um arquivo da área de preparação (staging):
		- Para retirar arquivos da área de staging basta utilizar o comando GIT RESTORE --staged [filename or .]. Para remover arquivos da área de staging é necessario ter arquivo na área de stagin.
	- Descartar modificações em um arquivo:
		- Para descartar as modificações relizadas em um arquivo "modified" basta utilizar o comando GIT CHECKOUT -- [filename]
			- DETALHE IMPORTANTE: Esse comando funcionará somente se o arquivo não tiver sido alocando no ambiente de preparação (staging), caso ele estiver, basta removê-lo com o o camando GIT RESTORE --STAGED [filename], após isso remover as alterações. Caso ele tenha sofrido um commit já não será mais possível remover as alterações.

## Médio
- O que é um repositório remoto?
	- Um repositório remoto trata-se de um repositório GIT em um servidor na nuvem como (github, bitbucket, GitLab etc). Geralmente esse repositório é utilizado como uma versão centralizada para todos os integrantes do projeto, inserindo, clonando ou atualizando informações.

- Como clonar um repositório remoto?
	- Para clonar um repositório remoto é necessário copiar a URL HTTPS ou SSH e executar o comando GIT CLONE [URL]. Executando esse comando será criado uma cópia do repositório (incluindo historico de versões) na máquina local.

- Como adicionar um repositorio remoto no projeto?
	- Existem duas formas de realizar esse feito:
		- Criando um repositório em nuvem e clonando na máquina local.
		- Criano um repositório em nuvem e local, aplicando o GIT INIT no local, adicionando a origem do repositorio com o comando GIT REMOTE ADD ORIGIN [url] e inserindo as informações de acesso no primeiro GIT PUSH realizado.

- Como puxar todas as modificações no repositório remoto?
	- Para atualizar o repositório local "puxando" todas as atualizações do repositorio remoto, basta utilizar o comando GIT PULL.
	
- Como subir as modificações locais para o repositório remoto?
	- Para Atualizar o repositório remoto com itens do repositório local, basta alocar o HEAD na branch que deseja atualizar e executar o comando GIT PUSH
	
- O que é branch e como usá-la?
	- Assim como em sua tradução literal (Ramo), uma branch se trata de uma ramificação de uma outra branch (master, main, etc.). Criando uma referência a um ponto do repositorio de uma branch que poder ser alterada sem interferir na branch principal (GIT CHECKOUT -b [branchName] | git branch [branchname], git checkout [branchname]). Ao fim das alterações é possível mesclar as informações indo para a branch de destino (main, master etc) e executar o comando GIT MERGE. 
	
- Como realizar a merge de branchs?
	- Pare realizar o merge de branchs(branch x para branch y), basta ir até a branch y e executar o comando git merge x;  
		- Ao realizar o merge de branchs podem acabar ocorrendo conflitos que devem ser resolvidos (merge conflict).

- O que é rebase e como usá-lo?
	- O GIT REBASE assim como o GIT merge servem para mesclar alterações de um repositório GIT, mas de maneira diferente. O GIT REBASE reescreve o histórico de commits, o sobrepondo a outro.
	
# GitTutorial
Guia completo sobre o sistema de controle de versão Git e plataformas de hospedagem como GitHub, GitLab e Bitbucket. Aprenda a criar repositórios, fazer commits, gerenciar branches, merges e resolver conflitos. Ideal para iniciantes e desenvolvedores que querem aprimorar seus conhecimentos em versionamento e colaboração.


## Principais tópicos

### Basico 
- Controle de versão | Teoria | Criador | Motivo
- Estados de arquivos
    - MODIFIED | STAGED | COMMITED
- GIT INIT | GIT REMOTE | GIT CONFIG | GIT IGNORE | GIT CLONE
    - Flags 
    - Metodos de clonagem HTTP/SSH
- GIT LOG | GIT STATUS | GIT DIFF | GIT SHOW
    - Flags de Comandos
    - Método ADOG
- GIT ADD | GIT COMMIT | GIT RM --CACHED
    - Adicionar e remover arquivos da area de STAGED
    - GIT COMMIT --AMEND
- GIT PUSH
    - origins
### Intermediário 
- GIT PULL 
    - Flags
- GIT BRANCH 
    - Explicar bem a parte de ramificação 
- GIT CHECKOUT
    - Flags
    - Git checkout --
    - Git checkout -b
- GIT MERGE
    - Flags
- GIT REBASE 
    - Explicar bem essa parte pois é bem confusa
### Avançado
- GIT STASH
    - GIT STASH POP
    - Flags
- Reescrever historico de commits com o Rebase
- GIT RESET
- MERGE CONFLICT
- GIT 

### Conteudo extra
- TAGS
- GIT FLOW 
- Padrão de commit
- Fork
- Code Review
- Source Control
- VIM


# Backup

## Básico
- O que é controle de versão e como ele funciona?
	- Controle de versão, como o próprio nome já diz, tem a finalidade de controlar a versões de um projeto ou código, armazenando versões sólidas do projeto e permitindo o trabalho simultâneo entre os programadores e sincronização de alterações quando necessário.
	
- Quais são os 3 estados possíveis dos arquivos?
	- Modified: Quando o arquivo sofre modificações mas não foi preparado para ser incluído no repositório GIT.
	- Staged: O arquivo foi marcado para ser adicionado ao próximo arquivo.`GIT ADD`
	- Committed: As alterações foram registradas no repósitorio GIT. `GIT COMMIT`
	
- Como iniciar um repositório GIT em um projeto?
	- Para iniciar um repositório GIT em uma máquina local, é possível utilizar o comando `GIT INIT`.
	
- Como visualizar o histórico de mudanças?
	- Para visualizar o histórico de alterações é possível utilizar o comando `GIT DIFF`
	
- Como adicionar arquivos a um commit já realizado (amened), tirar um arquivo do estado de Staged (reset) e descartar modificações em um arquivo Modified (checkout)?
	- Adicionar arquiovos a um commit já realizado: 
		- Para realizar esta tarefa é necessário ter um commit realizado antes, colocar algum arquivo na área de preparação (staging). Feito esses passos agora é só executar o commando `git commit --amend` que os arquivos que estão na área de staging entrarão no ultimo commit realizado, sem criar um novo commit.
	- Tirar um arquivo da área de preparação (staging):
		- Utilizar o comando `GIT RM —cached [filename or .]`
	- Descartar modificações em um arquivo:
		- Para descartar as modificações relizadas em um arquivo "modified" basta utilizar o comando `GIT CHECKOUT -- [filename]`
			- DETALHE IMPORTANTE: Esse comando funcionará somente se o arquivo não tiver sido alocando no ambiente de preparação (staging), caso ele estiver, basta removê-lo com o o camando `GIT RM —cached [filename or .]`, após isso remover as alterações. Caso ele tenha sofrido um commit já não será mais possível remover as alterações.
***
## Médio
- O que é um repositório remoto?
	- Um repositório remoto trata-se de um repositório GIT em um servidor na nuvem como (github, bitbucket, GitLab, etc.). Geralmente esse repositório é utilizado como uma versão centralizada para todos os integrantes do projeto, inserindo, clonando ou atualizando informações.

- Como clonar um repositório remoto?
	- Para clonar um repositório remoto é necessário copiar a URL *HTTPS* ou *SSH* e executar o comando `GIT CLONE [URL]`. Executando esse comando será criado uma cópia do repositório (incluindo historico de versões) na máquina local.

- Como adicionar um repositorio remoto no projeto?
	- Existem duas formas de realizar esse feito:
		- Criando um repositório em nuvem e clonando na máquina local.
		- Criando um repositório em nuvem e outro repositório no computador local, aplicando o `GIT INIT` no local, adicionando a origem do repositorio com o comando `GIT REMOTE ADD ORIGIN [url]` e inserindo as informações de acesso no primeiro `GIT PUSH` realizado.

- Como puxar todas as modificações no repositório remoto?
	- Para atualizar o repositório local "puxando" todas as atualizações do repositorio remoto, basta utilizar o comando `GIT PULL`.
	
- Como subir as modificações locais para o repositório remoto?
	- Para Atualizar o repositório remoto com itens do repositório local, basta alocar o HEAD na branch que deseja atualizar e executar o comando `GIT PUSH`
	
- O que é branch e como usá-la?
	- Assim como em sua tradução literal (Ramo), uma branch se trata de uma ramificação de uma outra branch (master, main, etc.). Criando uma referência a um ponto do repositorio de uma branch que poder ser alterada sem interferir na branch principal (`GIT CHECKOUT -b [branchName]` | `git branch [branchname]`, `git checkout [branchname]`). Ao fim das alterações é possível mesclar as informações indo para a branch de destino (main, master etc) e executar o comando `GIT MERGE`. 
	
- Como realizar a merge de branchs?
	- Pare realizar o merge de branchs(por exemplo branch x para branch y), basta ir até a branch y e executar o comando `git merge x`;  
		- Ao realizar o merge de branchs podem acabar ocorrendo conflitos que devem ser resolvidos (merge conflict).

- O que é rebase e como usá-lo?
	- O `GIT REBASE (branch referencia)` tem como principal função manter um historico linear de commits, realocando a posição de branchs no historico de commits para a frente do ultimo commit de onde o mesmo se baseia. Ele auxilia a manter um historico consistente de commits e evitar commits desnecessários. Geralmente utilizado quando o mesmo projeto é modificado por diferentes pessoas.
    	- Exemplo de um repositório onde o rebase não foi utilizado:
![Image](/assets/repositorio_s_rebase.png)
		- Exemplo do mesmo repositório que utilizando o rebase antes de realizar o merge:
![Image](/assets/repositorio_c_rebase.png)
	- Durante o comando rebase podem ocorrer confiltos então é importante se atentar.
	- O rebase também pode ser uma outra alternativa ao git merge, o qual mantem um historico linear.
***
## Avançado
- O que é o GIT STASH e quando utilizá-lo?
	- Vamos utilizar a seguinte situação:
		- Estou trabalhando em um cartão x, porém em dado momento meu superior me pede para fazer outro cartão mais urgente.
	- Tendo essa informação eu percebo que preciso parar o que estou fazendo e ir para outra branch, mas nesse deslocamento, caso eu não queira realizar um commit pelo fato de não ter finalizado o cartão x, se eu trocar de branch com arquivos alterados, essas alterações seguirão para a branch onde estou indo, o que eu não quero que aconteça.
	- Sabendo disso eu preciso manter minhas alterações na branch x para poder me deslocar para a branch y sem que as alterações sigam para a branch y.
	- Nesse caso cabe utilizar o commando  `GIT STASH`, ao utilizá-lo o git salvará temporariamente suas alterações e voltará a branch para o estado de sem alterações.
	- Caso deseje que a branch retorne ao estado onde haviam as alterações basta utilizar o `GIT STASH POP`.

- Como reescrever o histórico de commits com o `GIT REBASE`?
  - O `GIT REBASE` também possibilita que o usuário realize alterações no histórico de commits na branch em que foi chamado.
  - Para utilizá-lo basta ir até a branch que deseja modificar o histórico de commits e digitar `GIT REBASE -I HEAD~[Quantidade  de ultimos commits que deseja modificar]`
    - Exemplo: `git rebase -i HEAD~5`
  - Ao utilizar o comando aparecerá um editor de texto com algo parecido com isso
	```
	pick abc1234 Commit 1
	pick def5678 Commit 2
	pick ghi91011 Commit 3
	pick jkl12345 Commit 4
	pick mno67890 Commit 5
	```
  - Neste editor você pode alterar o commits utilizando as seguintes palavras-chave no lugar de 'pick':
	```
	Manter o pick caso queira manter o commit como está.
	Alterar pick para edit se quiser editar um commit específico. (Pode causar conflito)
	Alterar pick para squash ou s para combinar o commit com o anterior. (Pode causar conflito)
	Alterar pick para reword se quiser apenas alterar a mensagem de commit.
	Alterar pick para drop para excluir um commit.
	```
  - Nesse processo pode ocorrer conflito devido a alterar a estrutura do commit. Se isso acontecer o git pausará o rebase para que sejam resolvido os conflitos manualmente. Ao finalizar, existem duas possibilidades:
	- `GIT REBASE --CONTINUE` para continuar o processo de alteração.
	- `GIT REBASE --ABORT` para abortar o processo de alteração.
- O que é git reset e quando usá-lo?
    - O `GIT RESET` assim como rebase permite alterar o histórico de commits.
    - Com ele é possível desfazer mudanças ou limpar o estádo do seu repositório.
    - Existem 3 modos principais de uso do `git reset` são eles:
      - `git reset --soft `commit``:
        - Esse comando reseta o ponteiro HEAD para o commit especificado, mas MANTEM as alterações no ambiente de staging (index), ou seja, as mudanças ficam prontas para serem commitadas novamente. Os arquivos MODIFIED também entram no ambiente de staging
      - `git reset --mixed `commit`` (Padrão):
        - Move o HEAD para um commit anterior e desfaz as alterações no staging, mas mantem as alterações no diretório de trabalho (MODIFIED).
      - `git reset --hard `commit``
        - Descartar todas as alterações e voltar a um estado limpo (HARD RESET para outro commit [Alterações serão apagadas (tanto na *staging* quanto no *modified*) e os commits que vem após o voltado serão apagados]). (Cuidado ao utilizar!!!!!)
    - Resumindo
      - --soft: Mover commits sem perder as alterações
      - --mixed (padrão): Desfazer commits, mas manter as mudanças no diretorio de trabalho
      - --hard: Descartar todas as alterações e voltar a um estado limpo (comando irreversivel).
    - Não utilizar em branchs compartilhadas pois ele reescreve o histórico de commits.
- O que são conflitos e como corrigí-los? 
  - Quando é realizado um processo de mesclagem de branchs `MERGE`, `REBASE` etc., e nas duas branchs que serão mescladas existem alterações realizadas na mesma linha ou no mesmo bloco de código, o git não consegue decidir automaticamente qual alteração se manterá na versão.
    - Causas de conflito:
		- Alteração no mesmo arquivo e mesma linha de código;
		- Exclusão de um arquivo em uma branch e modificação em outra;
		- Mudanças incompatíveis;
  - Quando ocorre um conflito o git interrompe a ação e exibe uma mensagem informando que o processo falhou devido a conflito. (hint: Resolve all conflicts manually, mark them as resolved with) - (Automatic merge failed; fix conflicts and then commit the result.)
    - Quando houver a interrupção do processo o git permitirá que seja resolvido o conflito e continuar o processo de mesclagem ou abortar o processo
      - --abort: abortar o processo
      - --continue: continuar o processo
  - É possível resolver os conflitos através do terminal `VIM` ou através do próprio vscode

--

Curiosidades
- Aprender sobre como usar o VIM - (Criar um pequeno tutorial)
- Quando for realizar um comando para alterar branch ou que o git solicite a mudança de branch ou a localização de uma branch, utilizar o código da branch ao invés do HEAD~1. A não ser que precise voltar a branch para o commti anterior ai vale usar o HEAD~1
- Sempre que for realizar algum processo no repositório local (merge, rebase, reset etc), sempre se certificar que a branch main/master está atualizada (git pull)
- Cuidado ao utilizar o git reset principalmente com a notação —HARD.
- GIT ADOG (git log —all —decorate —oneline —graph)   
![Adog image](/assets/I%20DON'T%20DO%20GIT%20LOG%20ALL%20THE%20TIME,.jpg) 
    - Eu não uso o git log o tempo todo, mas quando uso, apenas lembro (um dog)
    - Para configurar um git log padrão para sempre fazer as anotações basta utilizar
        - Git config —global alias.adog “log —all —decorate —oneline —graph” 
  
![Adog image](/assets/commit_adog.png)
- Quando utilizar o comando git reset por padrão será o —mixed (quando não especifica vai o padrão). Por isso na programação (principalmente backend) temos que se atentar ao estado padrão dos elementos por exemplo:
    - Em js se você declarar uma variável e não inicializa-la o padrão será undefined
        - `let x; console.log(x);` Saída `undefined` 
    - Em java se uma variável for declarada mas não inicializado o valor padrão será 0 no caso do INT;
    - Algumas APIs também contam com esses sistema de valor padrão (descobrir na documentação)

- Perguntas
    - Vocês fazem push direto na master/main ou push na branch da feature e cria um pull request?
        - Push pra develop.
        - Depois de aprovado pra master.
    - Clonagem de repositórios utilizam metodo HTTP ou SSH?
    - É rotina utilizar o git rebase para manter um fluxo linear de comitts na monks?
    - Diferença de usar o Restore e o checkout ou o reset? (pesquisar)
    - Quando utilizamos o git reset —soft `branch` os arquivos do diretório de trabalho que não estão no ambiente de staging entram.
Revert
      </p>
    </div>
  );
}
