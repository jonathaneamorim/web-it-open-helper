# 🚀 IT Open Helper

<div align="center">

<img src="public/android-chrome-192x192.png" alt="IT Open Helper Logo" width="120" height="120" />

**Sua enciclopédia interativa de tecnologia.**
*Sistemas Operacionais • Programação • DevOps • Softwares*

[Demo Online](https://open-helper.vercel.app/) · [Reportar Bug](https://github.com/jonathaneamorim/web-it-open-helper/issues) · [Solicitar Feature](https://github.com/jonathaneamorim/web-it-open-helper/issues)

---

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

## 📖 Sobre o Projeto

O **IT Open Helper** é uma plataforma open-source projetada para centralizar e democratizar o conhecimento na área de TI. 

Diferente de wikis tradicionais, nossa plataforma oferece uma experiência de leitura fluida, com animações suaves (**Scroll Snap**), navegação intuitiva e design moderno. O objetivo é criar trilhas de aprendizado rápidas e diretas sobre ferramentas essenciais, linguagens de programação e configuração de ambiente.

### ✨ Destaques
- **🎨 Arquitetura Universal:** Uma única página dinâmica (`/wiki/[slug]`) renderiza qualquer conteúdo.
- **⚡ Performance:** Construído com Next.js App Router e Server Components.
- **🎬 Animações:** Transições de entrada e efeitos de scroll com Framer Motion.
- **📱 Responsivo:** Layout adaptável para Mobile, Tablet e Desktop.
- **📂 JSON Driven:** Todo o conteúdo é gerenciado por arquivos JSON simples.

---

## 🛠️ Tecnologias

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Fontes:** [Geist Sans & Mono](https://vercel.com/font)

---

## 🚀 Rodando Localmente

Clone o projeto e instale as dependências:

```bash
# Clone o repositório
git clone https://github.com/jonathaneamorim/web-it-open-helper.git

# Entre na pasta
cd it-open-helper

# Instale as dependências
npm install
# ou yarn, pnpm, bun
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse `http://localhost:3000` no seu navegador para ver o resultado.

---

## 🤝 Como Contribuir (Adicione Conteúdo!)

A melhor parte deste projeto é que **você não precisa ser um expert em React** para contribuir. O conteúdo é separado do código. Quer adicionar um guia sobre Python? Ou talvez sobre Kubernetes?

Siga estes 3 passos simples:

### 1. Crie o arquivo de dados
Crie um arquivo `.json` dentro da pasta `src/data/` (ex: `src/data/programming/python.json`).

<details>
<summary>📋 Clique para ver o Modelo do JSON</summary>

```json
{
  "trackTitle": "Guia de Python",
  "category": "Programação",
  "description": "Aprenda a linguagem mais popular para Data Science e Backend.",
  "levels": [
    {
      "id": "basico",
      "title": "Fundamentos",
      "topics": [
        {
          "title": "Hello World",
          "blocks": [
            {
              "type": "paragraph",
              "content": "Python é conhecido por sua sintaxe limpa."
            },
            {
              "type": "code",
              "language": "python",
              "content": "print('Olá Mundo')"
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "title": "Documentação Oficial",
      "url": "[https://docs.python.org](https://docs.python.org)"
    }
  ]
}
```
</details>

### 2. Registre o conteúdo
Abra o arquivo `src/data/registry.ts`, importe seu JSON e adicione ao objeto `contentRegistry`.

```typescript
import pythonData from "./programming/python.json";

export const contentRegistry: Record<string, PageContent> = {
  // ... outros itens
  "python": pythonData as unknown as PageContent, // A chave "python" será a URL: /wiki/python
};
```

### 3. Abra um Pull Request
Envie suas alterações! O sistema irá automaticamente:
1. Adicionar seu guia na Home Page.
2. Criar a categoria (se ela não existir).
3. Gerar a página completa com navegação e estilos.

---

## 📂 Estrutura de Pastas

```
src/
├── app/
│   ├── wiki/[slug]/    # ⚙️ O Motor Universal (Gera todas as páginas)
│   ├── layout.tsx      # Layout global
│   └── page.tsx        # Home Page com animações
├── components/
│   ├── content/        # Renderizadores de blocos (Texto, Código, Imagem)
│   ├── header/         # Menu de navegação
│   └── ui/             # Componentes visuais (FadeIn, etc)
└── data/
    ├── registry.ts     # 🗺️ Onde tudo é conectado
    ├── programming/    # JSONs de Programação
    ├── softwares/      # JSONs de Softwares
    └── ...
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

<div align="center">
  <br />
  Feito com 💜 por Jonathan e a comunidade Open Source.
</div>