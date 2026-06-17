// ================================
// AGRO FORTE - SCRIPT PRINCIPAL
// Interatividade do site
// ================================


// ================================
// 1. NAVEGAÇÃO SUAVE (SCROLL)
// ================================

const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


// ================================
// 2. DESTAQUE DO MENU ATIVO
// ================================

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {
            links.forEach(link => {
                link.classList.remove('active');

                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});


// ================================
// 3. VALIDAÇÃO DO FORMULÁRIO
// ================================

const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector('textarea').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        alert('Mensagem enviada com sucesso! 🌱');

        form.reset();
    });
}


// Função para validar e-mail
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


// ================================
// 4. EFEITO DE APARECER AO ROLAR
// ================================

const animatedElements = document.querySelectorAll('.card, .item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

animatedElements.forEach(el => observer.observe(el));


// ================================
// 5. PEQUENO EFEITO NO BOTÃO DO BANNER
// ================================

const btn = document.querySelector('.btn');

if (btn) {
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'scale(1.05)';
    });

    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'scale(1)';
    });
}
