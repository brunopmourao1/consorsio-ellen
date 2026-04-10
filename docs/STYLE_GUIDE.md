# Guia de Estilo Técnico: Consórcio Ellen

Este guia documenta os tokens de design extraídos do Stitch para garantir a consistência visual absoluta.

## 1. Design Tokens (Variáveis CSS)

### 1.1 Cores (Paleta Boutique)
```css
:root {
  /* Cores Principais */
  --color-primary: #0A192F;         /* Azul Marinho Profundo */
  --color-on-primary: #FFFFFF;
  
  /* Acentos */
  --color-accent: #C5A059;          /* Dourado Champanhe (Golds) */
  --color-accent-dim: #8E733E;      
  
  /* Superfícies */
  --color-background: #FCF9F8;      /* Off-white Estilo Papel Vellum */
  --color-surface: #FCF9F8;
  --color-surface-container: #F0EDED; /* Cinza claro para transições */
  
  /* Textos */
  --color-text-primary: #1B1B1B;    /* Carvão */
  --color-text-secondary: #44474D;
  
  /* Feedback */
  --color-error: #BA1A1A;
}
```

### 1.2 Tipografia (Hierarquia)
- **Títulos (Serifa)**: `Newsreader` (Google Fonts)
  - Estilo: Regular/Medium.
  - Tracking: `-0.02em`.
  - Uso: Headlines, nomes de seções importantes.
- **Corpo e UI (Sans)**: `Manrope` (Google Fonts)
  - Estilo: Light (300) / Regular (400) / Semibold (600).
  - Line-height: `1.6`.
  - Uso: Parágrafos, labels de formulários e botões.

## 2. Regras de Interface (The "Boutique" Rules)

### 2.1 Separação de Seções (The No-Line Rule)
- Forbudden: `border-bottom: 1px solid`.
- Allowed: Mudar a cor do background de `var(--color-background)` para `var(--color-surface-container)`.
- Shadows: Apenas sombras "atmosféricas" (Blur alto, opacidade baixa).
  - Ex: `shadow: 0 10px 30px rgba(27, 27, 27, 0.06);`

### 2.2 Arredondamento (Roundness)
- Padrão: `ROUND_FOUR` (conforme Stitch).
- Valor: `4px` ou `0.25rem`.
- Botões: `md` radius (aprox. `6px`) para um visual afiado e sob medida.

### 2.3 Micro-animações (Velvet)
- **Efeito**: Fade-in progressivo + Slide-up (10px).
- **Curva**: `cubic-bezier(0.2, 0, 0, 1)`.
- **Duração**: `800ms`.
- **Stagger**: Elementos irmãos devem ter um `delay` cumulativo de `100ms`.

## 3. Grid e Layout
- **Containers**: Largura máxima de `1440px`.
- **Gutter**: `32px` no desktop / `20px` no mobile.
- **Asimetria**: Uso de margens negativas ou offsets horizontais (ex: 60% de largura para parágrafos ao lado de títulos em 40%) para evitar o aspecto de "template".
