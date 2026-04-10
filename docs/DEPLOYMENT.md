# Estratégia de Deploy e Infraestrutura: Consórcio Ellen

Este documento detalha o plano para colocar o site online, estimativa de custos e o funcionamento da infraestrutura.

## 1. Stack de Nuvem Recomendada
Para um projeto "Boutique" que exige performance extrema (LCP baixo) e custo otimizado, recomendo o modelo **Jamstack**:

- **Hospedagem Frontend**: [Vercel](https://vercel.com/) (Líder de mercado para React/Vite).
- **Domínio**: [Registro.br](https://registro.br/) (Para domínios `.com.br`) ou Cloudflare.
- **E-mails de Contato**: [Resend](https://resend.com/) (Para garantir que os leads do formulário cheguem na caixa de entrada da Ellen).
- **SSL/Segurança**: Incluso nativamente na Vercel (HTTPS automático).

## 2. Estimativa de Custos (Abril 2026)

| Item | Serviço | Custo Mensal | Custo Anual | Observação |
| :--- | :--- | :--- | :--- | :--- |
| **Domínio** | Registro.br | - | R$ 40,00 | Renovação anual para `.com.br` |
| **Hospedagem** | Vercel (Hobby) | Grátis | Grátis | Suporta até 100GB de banda (mais que o suficiente para este site) |
| **E-mails (API)** | Resend (Free) | Grátis | Grátis | Até 3.000 e-mails por mês. |
| **Certificado SSL**| Vercel | Grátis | Grátis | Essencial para o cadeado de segurança. |
| **TOTAL** | | **R$ 0,00** | **R$ 40,00** | **Custo baixíssimo para manter.** |

## 3. Como funciona (O Fluxo de Trabalho)

1.  **Desenvolvimento**: O código é escrito e testado localmente.
2.  **Git (Repositório)**: O código é enviado para um repositório privado (GitHub/GitLab).
3.  **CI/CD (Vercel)**: A Vercel detecta a mudança, "constrói" o site em segundos e o publica globalmente em uma rede de servidores (CDN).
4.  **Atualizações**: Qualquer modificação futura que você solicitar será publicada automaticamente assim que eu terminar o ajuste.

## 4. Manutenção e Futuro
- **Acessos**: Se o site crescer para milhares de acessos simultâneos, a Vercel escala automaticamente.
- **Formulário de Contato**: O Resend enviará os dados do formulário da área `CONTACT` diretamente para o e-mail profissional da Ellen ou WhatsApp.
- **Imagens**: Usaremos otimização nativa do Vite para garantir que as fotos pesadas da cliente não deixem o site lento.

## 5. Próximo Passo do Planejamento
- [ ] Definir o domínio oficial (ex: `consorcioellen.com.br`).
- [ ] Criar a conta no GitHub/Vercel (se necessário).
