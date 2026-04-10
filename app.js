// =====================
// VALIDAÇÃO DO FORMULÁRIO
// =====================
document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('formContato'); // ✔ corrigido

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('e-mail').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      // ✔ validação básica
      if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
      }

      // ✔ validação de email correta
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValido.test(email)) {
        alert('Digite um e-mail válido!');
        return;
      }

      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      form.reset();
    });
  }

  // =====================
  // MENU ATIVO NO SCROLL
  // =====================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');
  const headerHeight = document.querySelector('header').offsetHeight;

  window.addEventListener('scroll', function () {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-black'); // remove estilo antigo

      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('text-black'); // destaque
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