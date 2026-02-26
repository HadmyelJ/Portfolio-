const translations = {
  en: {
    nav: { home: 'Home',SampleAuth:'Sample AuTH', about: 'About', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    hero: {
      title: 'Welcome to My Portfolio',
      subtitle: 'Creative Developer | Problem Solver | Tech Enthusiast',
      view: 'View My Work',
      contact: 'Get In Touch'
    },
    footer: { line1: '© 2026 My Portfolio. All Rights Reserved.', line2: 'Designed with ❤️ and built with code.' },
    about: {
      title: 'About Me',
      p1: "Welcome! I'm a passionate developer with a keen eye for creating beautiful and functional web experiences. With expertise in modern web technologies, I love turning ideas into reality.",
      p2: 'My journey in tech has been driven by a curiosity to learn and grow. I believe in writing clean, maintainable code and creating solutions that make a real impact.',
      p3: "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the creative process of building something new.",
      p4: "I'm committed to continuous learning and staying up-to-date with the latest industry trends and best practices. Let's connect and build something amazing together!"
    },
    projects: {
      title: 'Featured Projects',
      p1: { title: 'Project One', desc: 'A responsive web application built with modern technologies to solve real-world problems.' },
      p2: { title: 'Project Two', desc: 'An elegant UI/UX design implementation with attention to detail and user experience.' },
      p3: { title: 'Project Three', desc: 'A high-performance application optimized for speed and scalability across all platforms.' },
      p4: { title: 'Project Four', desc: 'A mobile-first progressive web app with offline capabilities and stunning animations.' },
      p5: { title: 'Project Five', desc: 'A developer tools project featuring automation and productivity enhancements for teams.' },
      p6: { title: 'Project Six', desc: 'An analytics dashboard providing real-time insights and data visualization capabilities.' }
    },
    skills: {
      title: 'My Skills',
      s1: { title: 'Frontend Development', desc: 'HTML, CSS, JavaScript, React, Responsive Design' },
      s2: { title: 'Backend Development', desc: 'Node.js, Python, Django, Database Design, REST APIs' },
      s3: { title: 'Tools & Technologies', desc: 'Git, Docker, VS Code, GitHub' },
      s4: { title: 'Databases', desc: 'MongoDB, MySQL, Firebase' },
      s5: { title: 'Soft Skills', desc: 'Problem Solving, Communication, Team Collaboration, Time Management, Leadership' },
      s6: { title: 'Other Skills', desc: 'UI/UX Design, Web Performance Optimization, Testing, Agile, Scrum' }
    },
    contact: {
      title: "Let's Work Together",
      p: "I'm always open to new opportunities and collaborations. Feel free to reach out!",
      email: 'Email Me',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      locationTitle: 'Location',
      location: 'Current living in London, Uk. Planing to move to Zürich, Switzerland'
    },
    AuthSample:{
      title:'Authentication Example',
      p1: 'This is a sample page to demonstrate authentication features.',
      p2: 'Here you can implement login, registration, and other auth-related functionalities',
      createAccount: 'Create Account',
      signInTitle: 'Sign in',
      signupOrEmail: 'or use your email for registration',
      orUseAccount: 'or use your account',
      forgotPassword: 'Forgot your password?',
      signUpButton: 'Sign Up',
      signInButton: 'Sign In',
      overlayWelcomeBack: 'Welcome Back!',
      overlayWelcomeBackText: 'To keep connected with us please login with your personal info',
      overlayHello: 'Hello, Friend!',
      overlayHelloText: 'Enter your personal details and start journey with us',
      namePlaceholder: 'Name',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Password'
    }
  },
  pt: {
    nav: { home: 'Início',SampleAuth: 'Exmplo AuTH', about: 'Sobre', projects: 'Projetos', skills: 'Habilidades', contact: 'Contato' },
    hero: {
      title: 'Bem-vindo ao Meu Portfólio',
      subtitle: 'Desenvolvedor Criativo | Solucionador de Problemas | Entusiasta de Tecnologia',
      view: 'Ver Meus Trabalhos',
      contact: 'Entrar em Contato'
    },
    footer: { line1: '© 2026 Meu Portfólio. Todos os direitos reservados.', line2: 'Feito com ❤️ e construído com código.' },
    about: {
      title: 'Sobre Mim',
      p1: 'Bem-vindo! Sou um desenvolvedor apaixonado com um olhar atento para criar experiências web bonitas e funcionais. Com expertise em tecnologias web modernas, adoro transformar ideias em realidade.',
      p2: 'Minha jornada na tecnologia tem sido movida pela curiosidade de aprender e crescer. Acredito em escrever código limpo, sustentável e em criar soluções que gerem impacto real.',
      p3: 'Quando não estou codificando, você pode me encontrar explorando novas tecnologias, contribuindo para projetos open-source ou aproveitando o processo criativo de construir algo novo.',
      p4: 'Estou comprometido com o aprendizado contínuo e em me manter atualizado com as últimas tendências e boas práticas da indústria. Vamos nos conectar e construir algo incrível juntos!'
    },
    projects: {
      title: 'Projetos em Destaque',
      p1: { title: 'Projeto Um', desc: 'Uma aplicação web responsiva construída com tecnologias modernas para resolver problemas do mundo real.' },
      p2: { title: 'Projeto Dois', desc: 'Uma implementação de UI/UX elegante com atenção aos detalhes e à experiência do usuário.' },
      p3: { title: 'Projeto Três', desc: 'Uma aplicação de alto desempenho otimizada para velocidade e escalabilidade em todas as plataformas.' },
      p4: { title: 'Projeto Quatro', desc: 'Um PWA mobile-first com capacidades offline e animações impressionantes.' },
      p5: { title: 'Projeto Cinco', desc: 'Um projeto de ferramentas para desenvolvedores com automação e melhorias de produtividade para equipes.' },
      p6: { title: 'Projeto Seis', desc: 'Um painel de analytics que fornece insights em tempo real e recursos de visualização de dados.' }
    },
    skills: {
      title: 'Minhas Habilidades',
      s1: { title: 'Desenvolvimento Frontend', desc: 'HTML, CSS, JavaScript, React, Design Responsivo' },
      s2: { title: 'Desenvolvimento Backend', desc: 'Node.js, Python, Django, Design de Banco de Dados, REST APIs' },
      s3: { title: 'Ferramentas & Tecnologias', desc: 'Git, Docker, VS Code, GitHub' },
      s4: { title: 'Bancos de Dados', desc: 'MongoDB, MySQL, Firebase' },
      s5: { title: 'Habilidades Interpessoais', desc: 'Resolução de Problemas, Comunicação, Colaboração em Equipe, Gestão do Tempo, Liderança' },
      s6: { title: 'Outras Habilidades', desc: 'UI/UX Design, Otimização de Performance, Testes, Agile, Scrum' }
    },
    contact: {
      title: 'Vamos Trabalhar Juntos',
      p: 'Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!',
      email: 'Enviar Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      locationTitle: 'Localização',
      location: 'Atualmente morando em Londres, Reino Unido. Pretendo me mudar para Zurique, Suíça'
    },

    AuthSample:{
      title:'Exemplo de Autenticação',
      p1: 'Esta é uma página de exemplo para demonstrar os recursos de autenticação.',
      p2: 'Aqui você pode implementar funcionalidades de login, cadastro e outras relacionadas à autenticação.',
    createAccount: 'Criar Conta',    signInTitle: 'Entrar',    signupOrEmail: 'ou use seu e-mail para se registrar',    orUseAccount: 'ou use sua conta',    forgotPassword: 'Esqueceu sua senha?',    signUpButton: 'Cadastrar',    signInButton: 'Entrar',    overlayWelcomeBack: 'Bem-vindo de volta!',    overlayWelcomeBackText: 'Para continuar conectado conosco, por favor faça login com suas informações pessoais',    overlayHello: 'Olá, Amigo!',    overlayHelloText: 'Insira seus dados pessoais e comece sua jornada conosco',    namePlaceholder: 'Nome',    emailPlaceholder: 'Email',    passwordPlaceholder: 'Senha'
      

    }
  }
};

function applyTranslations(lang) {
  if (!translations[lang]) lang = 'en';
  document.documentElement.lang = (lang === 'pt') ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const parts = key.split('.');
    let value = translations[lang];
    for (const p of parts) {
      if (value && Object.prototype.hasOwnProperty.call(value, p)) value = value[p];
      else { value = undefined; break; }
    }
    if (value !== undefined) el.innerHTML = value;
  });

  // handle placeholder translations if specified
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const parts = key.split('.');
    let value = translations[lang];
    for (const p of parts) {
      if (value && Object.prototype.hasOwnProperty.call(value, p)) value = value[p];
      else { value = undefined; break; }
    }
    if (value !== undefined) el.setAttribute('placeholder', value);
  });
  const cb = document.querySelector('.cb');
  if (cb) cb.checked = (lang === 'en');
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'en';
  applyTranslations(saved);
  document.querySelectorAll('.cb').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const lang = e.target.checked ? 'en' : 'pt';
      setLang(lang);
      // When user toggles, update all checkboxes on the page (if multiple)
      document.querySelectorAll('.cb').forEach(other => { other.checked = e.target.checked; });
    });
  });
});

// Expose for quick debugging
window.setLang = setLang;
