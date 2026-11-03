# BS Beauty Studio | Bianca Souza

Site cinematográfico do BS Beauty Studio (Vila Marari, São Paulo): Laser Pro Beauty, sobrancelhas, unhas, cílios e massagem.

- O site fica na pasta `site/` (HTML, CSS e JS estáticos, sem build).
- Para ver localmente: `cd site && python -m http.server 4173` e abra http://localhost:4173
- WhatsApp, e-mail do formulário e frames ficam em `site/config.js`.

Site por [Labrego IA](https://labregoia.com.br) · Site Cinematográfico.

## Agenda online

- `site/agendar.html` — clientes escolhem serviço, dia e horário livre (seg–sáb, 10h–19h, passos de 30 min).
- `site/painel.html` — painel da administração (login por link no e-mail): ver o dia, cancelar, bloquear horários.
- Banco: projeto Supabase `bs-beauty-studio` (sa-east-1). Cada serviço é uma agenda própria; conflito bloqueado no banco (exclusion constraint).
- Duração dos serviços: tabela `servicos` (coluna `duracao_min`). Administradores: tabela `admins`.
