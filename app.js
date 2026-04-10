document.addEventListener('DOMContentLoaded', function () {

  // =====================
  // FORMULÁRIO + AGENDAMENTO (WHATSAPP)
  // =====================
  const form = document.getElementById('formContato');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const servico = document.getElementById('servico').value;
      const data = document.getElementById('data').value;
      const hora = document.getElementById('hora').value;
      const mensagem = document.getElementById('mensagem').value.trim();

      // ✅ validação
      if (!nome || !email || !servico || !data || !hora) {
        alert('Preencha todos os campos!');
        return;
      }

      // ✅ validação de email
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValido.test(email)) {
        alert('Digite um e-mail válido!');
        return;
      }

      // ✅ mensagem para WhatsApp
      const texto = `Olá! Quero agendar um atendimento:

🐾 Serviço: ${servico}
📅 Data: ${data}
⏰ Horário: ${hora}

👤 Nome: ${nome}
📧 Email: ${email}
💬 Mensagem: ${mensagem}`;

      const numero = "55483232-4545"; 
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

      window.open(url, '_blank');

      form.reset();
    });
  }

  // =====================
  // MENU ATIVO NO SCROLL
  // =====================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');
  const header = document.querySelector('header');

  const headerHeight = header ? header.offsetHeight : 0;

  window.addEventListener('scroll', function () {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('underline');

      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('underline');
      }
    });
  });

  // =====================
  // ANO DINÂMICO NO FOOTER
  // =====================
  const anoAtual = new Date().getFullYear();
  const footer = document.querySelector('footer p');

  if (footer) {
    footer.innerHTML = `© ${anoAtual} Patas Felizes Pet Shop. Todos os direitos reservados.`;
  }

});