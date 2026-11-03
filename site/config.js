/* Site Cinematográfico · © 2026 Labrego IA · LBG-SC-2026-v1 */
window.SITE = {
  nome: "BS Beauty Studio",
  assinatura: "LBG-SC-20261103-140538068B",

  whatsapp: {
    numero: "5511989880015", // só dígitos, ex.: 5511999998888
    mensagem: "Olá! Vim pelo site e quero reservar meu momento ✨",
  },

  contato: {
    email: "johenartesgraficas@gmail.com",
    // Opcional: chave do Web3Forms (https://web3forms.com). Se vazio, usa FormSubmit.
    web3formsChave: "7fd1863f-4882-43a4-af5a-5fbcd02917f3",
    assunto: "Novo contato pelo site BS Beauty Studio",
  },

  // Agenda online (Supabase). A chave anon é pública por natureza; a segurança fica nas regras (RLS) do banco.
  agenda: {
    url: "https://lthbgyusbbtxsatgzblk.supabase.co",
    chave: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0aGJneXVzYmJ0eHNhdGd6YmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM3Mjc5MDIsImV4cCI6MjEwOTMwMzkwMn0.PgMcH-X9V8zN8KQN_gvmEDf4OSUfX1NDPM-aXWCSNZk",
    abre: "10:00",
    fecha: "19:00",
    passoMin: 30,
    antecedenciaMin: 60,
    diasAFrente: 60,
  },

  frames: {
    total: 150, // valor impresso pelo fatiar_frames.sh
    desktop: "assets/frames/desktop/f_{n}.webp?v=2",
    mobile: "assets/frames/mobile/f_{n}.webp?v=2",
  },
};
