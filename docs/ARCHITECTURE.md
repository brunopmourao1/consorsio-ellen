# Arquitetura do Sistema: Consórcio Ellen

## 1. Stack Tecnológica
- **Linguagem**: JavaScript (ES6+).
- **Framework**: [React.js](https://reactjs.org/) via [Vite](https://vitejs.dev/).
- **Estilização**: CSS Modules ou Vanilla CSS (variáveis nativas).
- **Ícones**: Lucide React ou ícones customizados via SVG (fidelidade Stitch).

## 2. Estrutura de Pastas Proposta
```text
ellen/
├── docs/               # Documentação do projeto (PRD, Arquitetura, etc.)
├── public/             # Ativos estáticos e imagens abstratas de luxo
├── src/
│   ├── assets/         # Fontes locais e assets de estilo
│   ├── components/     # UI Kit atômico
│   │   ├── layout/     # Nav, Footer, Container
│   │   ├── ui/         # Buttons, Cards, Inputs, FadeIn (Animations)
│   ├── hooks/          # Hooks customizados
│   ├── pages/          # Home, Especialista, Soluções, Blog, Contato, Legal
│   ├── styles/         # global.css, tokens.css (CSS Vars do Stitch)
│   ├── utils/          # Helpers para animações e formatações
│   ├── App.jsx         # Roteamento Central
│   ├── main.jsx        # Entry point
└── index.html
```

## 3. Estratégia de Navegação (Routing)
- Utilização de `react-router-dom` para navegação entre páginas.
- Implementação de sub-rotas para `/solucoes` e gerenciamento de artigos no `/blog`.
- Otimização de "Scroll restoration" para que a troca de página sempre inicie no topo.

## 4. Fluxo de Dados e Estado
- **Formulários**: Estado local via `useState`.
- **Animações**: Utilização da `Intersection Observer API` via hook customizado `useIntersectionObserver` para gatilhar os fade-ins Velvet quando o elemento entra na viewport.

## 5. Estratégia de Assets (Imagens)
- **Placeholders**: Referenciados em `src/assets/images/placeholders/`.
- **Icons**: Mantidos como componentes funcionais SVG para controle total de cores via CSS (especialmente o Dourado Champanhe `#C5A059`).
