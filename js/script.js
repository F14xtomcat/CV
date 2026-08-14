/* ===================== JavaScript (script.js) ===================== */
// Data for projects
const projectsData = [
  {
    id: 'p1',
    title: 'Vehicle Tailgating Prevention System',
    description: 'IoT-based detection and prevention system using networked routers to coordinate distributed hardware.',
    tags: ['IoT', 'Hardware', 'Networking'],
    category: 'iot',
    image: 'images/project-iot.svg',
    liveLink: '#',
    repoLink: 'https://github.com/F14xtomcat'
  },
  {
    id: 'p2',
    title: 'Reading Disability Evaluation System',
    description: 'Locally-hosted, hardware-optimized evaluation system combining ML algorithms with WebRTC for real-time transmission.',
    tags: ['ML', 'WebRTC', 'Networking'],
    category: 'ml',
    image: 'images/project-ml.svg',
    liveLink: '#',
    repoLink: 'https://github.com/F14xtomcat'
  },
  {
    id: 'p3',
    title: 'Hyper-Specific App Development',
    description: 'AI-assisted rapid prototyping using advanced prompt engineering to ship custom apps solo.',
    tags: ['Prompt Engineering', 'AI-Assisted', 'Solo Build'],
    category: 'ai',
    image: 'images/project-ai.svg',
    liveLink: '#',
    repoLink: 'https://github.com/F14xtomcat'
  }
];

// ===== DOM Elements =====
const projectsGrid = document.getElementById('projectsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const scrollTopBtn = document.getElementById('scrollTop');
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

// ===== localStorage for saved projects =====
let savedProjects = JSON.parse(localStorage.getItem('savedProjects')) || [];

// ===== Render projects =====
function renderProjects(filter = 'all') {
  const filtered = filter === 'all' ? projectsData : projectsData.filter(p => p.category === filter);
  projectsGrid.innerHTML = '';
  filtered.forEach(project => {
    const isSaved = savedProjects.includes(project.id);
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" loading="lazy">
      <div class="card-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
        <div class="card-actions">
          <a href="${project.liveLink}" target="_blank" rel="noopener">Live demo</a>
          <a href="${project.repoLink}" target="_blank" rel="noopener">Repository</a>
          <button class="save-btn ${isSaved ? 'saved' : ''}" data-id="${project.id}" onclick="toggleSave('${project.id}')">
            ${isSaved ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}

// ===== Toggle save =====
window.toggleSave = function(id) {
  const index = savedProjects.indexOf(id);
  if (index > -1) {
    savedProjects.splice(index, 1);
  } else {
    savedProjects.push(id);
  }
  localStorage.setItem('savedProjects', JSON.stringify(savedProjects));
  renderProjects(document.querySelector('.filter-btn.active').dataset.filter);
};

// ===== Filter projects =====
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

// ===== Contact form validation =====
function validateName() {
  const name = nameInput.value.trim();
  const regex = /^[A-Za-z\s'-]{2,}$/;
  if (!name) {
    nameError.textContent = 'Name is required.';
    return false;
  } else if (!regex.test(name)) {
    nameError.textContent = 'Name must contain only letters, spaces, apostrophes, or hyphens (min 2 chars).';
    return false;
  }
  nameError.textContent = '';
  return true;
}

function validateEmail() {
  const email = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!email) {
    emailError.textContent = 'Email is required.';
    return false;
  } else if (!regex.test(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    return false;
  }
  emailError.textContent = '';
  return true;
}

function validateMessage() {
  const message = messageInput.value.trim();
  if (!message) {
    messageError.textContent = 'Message is required.';
    return false;
  } else if (message.length < 10) {
    messageError.textContent = 'Message must be at least 10 characters.';
    return false;
  }
  messageError.textContent = '';
  return true;
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();
  if (isNameValid && isEmailValid && isMessageValid) {
    formSuccess.textContent = 'Message sent successfully!';
    contactForm.reset();
    setTimeout(() => { formSuccess.textContent = ''; }, 3000);
  } else {
    formSuccess.textContent = '';
  }
});

// ===== Scroll to top =====
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
  updateScrollbar();
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Scroll progress bar =====
const scrollbar = document.getElementById('scrollbar');
function updateScrollbar() {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  scrollbar.style.width = scrolled + '%';
}
document.addEventListener('scroll', updateScrollbar, { passive: true });
updateScrollbar();

// ===== Mobile menu =====
const menuBtn = document.getElementById('menuBtn');
const mobilenav = document.getElementById('mobilenav');
const closeMenu = document.getElementById('closeMenu');
menuBtn.addEventListener('click', () => mobilenav.classList.add('open'));
closeMenu.addEventListener('click', () => mobilenav.classList.remove('open'));
mobilenav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobilenav.classList.remove('open')));

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll('[data-reveal]');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = (i % 4) * 0.07 + 's';
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// ===== Nav active state =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#navlinks a[data-nav]');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`#navlinks a[href="#${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -45% 0px' });
sections.forEach(s => navObserver.observe(s));

// ===== Fluid blob parallax =====
const hero = document.getElementById('hero');
const blobField = document.getElementById('blobField');
if (window.matchMedia('(hover: hover)').matches) {
  hero.addEventListener('mousemove', (e) => {
    const r = hero.getBoundingClientRect();
    const mx = (e.clientX - r.left) / r.width;
    const my = (e.clientY - r.top) / r.height;
    const dx = (mx - 0.5) * 40;
    const dy = (my - 0.5) * 40;
    blobField.style.transform = `translate(${dx}px, ${dy}px)`;
  });
  hero.addEventListener('mouseleave', () => {
    blobField.style.transform = 'translate(0,0)';
  });
}

// ===== Back to top link in footer =====
document.querySelector('footer span:last-child').style.cursor = 'pointer';
document.querySelector('footer span:last-child').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Initial render =====
renderProjects('all');
