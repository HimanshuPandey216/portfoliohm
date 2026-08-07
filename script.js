/* ==========================================================================
   HIMANSHU PANDEY - INTERACTIVE PORTFOLIO ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Check if data is available
  if (typeof PORTFOLIO_DATA === 'undefined') {
    console.error('PORTFOLIO_DATA missing from config.js!');
    return;
  }

  const data = PORTFOLIO_DATA;

  /* ------------------------------------------------------------------------
     1. THEME SWITCHER & LOCAL STORAGE
     ------------------------------------------------------------------------ */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme') || 'dark';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'light' 
        ? '<i class="fa-solid fa-moon"></i>' 
        : '<i class="fa-solid fa-sun"></i>';
    }
  }
  setTheme(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
  }

  /* ------------------------------------------------------------------------
     2. DYNAMIC BACKGROUND CANVAS (Constellation / Particles)
     ------------------------------------------------------------------------ */
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 65);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? '#00f2fe' : '#7928ca';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${1 - dist / 120 * 0.8})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  /* ------------------------------------------------------------------------
     3. DYNAMIC TYPING ANIMATION IN HERO
     ------------------------------------------------------------------------ */
  const typedTextEl = document.getElementById('typed-text');
  if (typedTextEl && data.personal.subtitles) {
    const subtitles = data.personal.subtitles;
    let subtitleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentText = subtitles[subtitleIndex];

      if (isDeleting) {
        typedTextEl.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typedTextEl.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2200; // Pause at end of text
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        subtitleIndex = (subtitleIndex + 1) % subtitles.length;
        typeSpeed = 400;
      }

      setTimeout(type, typeSpeed);
    }
    type();
  }

  /* ------------------------------------------------------------------------
     4. RENDER HERO & STATS METRICS
     ------------------------------------------------------------------------ */
  const heroNameEl = document.getElementById('hero-name');
  if (heroNameEl) heroNameEl.textContent = data.personal.name;

  const heroBioEl = document.getElementById('hero-bio');
  if (heroBioEl) heroBioEl.textContent = data.personal.bio;

  const statsContainer = document.getElementById('stats-grid');
  if (statsContainer && data.personal.stats) {
    statsContainer.innerHTML = data.personal.stats.map(stat => `
      <div class="glass-card stat-card">
        <div class="stat-number">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join('');
  }

  /* ------------------------------------------------------------------------
     5. RENDER SKILLS WITH TABS & SEARCH FILTER
     ------------------------------------------------------------------------ */
  const skillTabsContainer = document.getElementById('skills-tabs');
  const skillsGrid = document.getElementById('skills-grid');
  const skillSearchInput = document.getElementById('skills-search');

  let activeCategory = 'All';

  if (skillTabsContainer && data.skills) {
    const categories = ['All', ...Object.keys(data.skills)];

    skillTabsContainer.innerHTML = categories.map((cat, idx) => `
      <button class="skill-tab ${idx === 0 ? 'active' : ''}" data-category="${cat}">${cat}</button>
    `).join('');

    skillTabsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('skill-tab')) {
        document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        activeCategory = e.target.dataset.category;
        renderSkills();
      }
    });
  }

  function renderSkills() {
    if (!skillsGrid || !data.skills) return;

    const query = skillSearchInput ? skillSearchInput.value.toLowerCase() : '';
    let filteredSkills = [];

    Object.entries(data.skills).forEach(([category, skillsList]) => {
      if (activeCategory === 'All' || activeCategory === category) {
        skillsList.forEach(skill => {
          if (skill.name.toLowerCase().includes(query) || category.toLowerCase().includes(query)) {
            filteredSkills.push({ ...skill, category });
          }
        });
      }
    });

    if (filteredSkills.length === 0) {
      skillsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 2rem;">
          No matching technical skills found for "${query}".
        </div>
      `;
      return;
    }

    skillsGrid.innerHTML = filteredSkills.map(skill => `
      <div class="glass-card skill-card">
        <div class="skill-card-icon">
          <i class="fa-solid ${skill.icon || 'fa-code'}"></i>
        </div>
        <div class="skill-info">
          <div class="skill-name">${skill.name}</div>
          <div class="skill-bar-bg">
            <div class="skill-bar-fill" style="width: ${skill.level}%;"></div>
          </div>
        </div>
      </div>
    `).join('');
  }

  if (skillSearchInput) {
    skillSearchInput.addEventListener('input', renderSkills);
  }
  renderSkills();

  /* ------------------------------------------------------------------------
     6. RENDER FEATURED PROJECTS & MODAL POPUP
     ------------------------------------------------------------------------ */
  const projectsGrid = document.getElementById('projects-grid');
  const projectModal = document.getElementById('project-modal');

  if (projectsGrid && data.projects) {
    projectsGrid.innerHTML = data.projects.map(proj => `
      <div class="glass-card project-card">
        <div class="project-img-wrapper">
          <img src="${proj.image}" alt="${proj.title}" class="project-img" loading="lazy">
          <span class="project-category-badge">${proj.category}</span>
        </div>
        <div class="project-content">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-subtitle">${proj.subtitle}</p>
          <div class="project-tech-tags">
            ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <div class="project-footer-actions">
            <button class="project-link-btn view-project-btn" data-id="${proj.id}">
              <i class="fa-solid fa-layer-group"></i> Architecture Details
            </button>
            ${proj.github ? `
              <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
                <i class="fa-brands fa-github"></i> Repository
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `).join('');

    projectsGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.view-project-btn');
      if (btn) {
        const projId = btn.dataset.id;
        const project = data.projects.find(p => p.id === projId);
        if (project) openProjectModal(project);
      }
    });
  }

  function openProjectModal(project) {
    if (!projectModal) return;
    const modalContainer = projectModal.querySelector('.modal-container');

    modalContainer.innerHTML = `
      <button class="modal-close-btn" id="close-modal-btn">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div style="margin-bottom: 1.5rem;">
        <span class="section-tag">${project.category}</span>
        <h2 class="section-title" style="margin-top: 0.5rem;">${project.title}</h2>
        <p style="color: var(--text-secondary);">${project.subtitle}</p>
      </div>

      <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 260px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1.5rem;">

      <h4 style="font-weight: 800; font-size: 1.1rem; margin-bottom: 1rem; color: var(--accent-cyan);">
        <i class="fa-solid fa-circle-check"></i> Key Engineering Highlights
      </h4>
      <ul style="padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem;">
        ${project.highlights.map(h => `<li style="margin-bottom: 0.5rem;">${h}</li>`).join('')}
      </ul>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-weight: 800; font-size: 1rem; margin-bottom: 0.75rem;">Technology Stack</h4>
        <div class="project-tech-tags">
          ${project.tech.map(t => `<span class="tech-tag" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        ${project.github ? `
          <a href="${project.github}" target="_blank" class="btn btn-primary">
            <i class="fa-brands fa-github"></i> View GitHub Repository
          </a>
        ` : ''}
        <button class="btn btn-secondary" id="close-modal-btn-2">Close Window</button>
      </div>
    `;

    projectModal.classList.add('active');

    const closeBtns = modalContainer.querySelectorAll('#close-modal-btn, #close-modal-btn-2');
    closeBtns.forEach(b => b.addEventListener('click', () => projectModal.classList.remove('active')));
  }

  /* ------------------------------------------------------------------------
     6.5 RECRUITER RESUME MODAL TRIGGER
     ------------------------------------------------------------------------ */
  const openResumeModalBtn = document.getElementById('open-resume-modal-btn');
  if (openResumeModalBtn && projectModal) {
    openResumeModalBtn.addEventListener('click', () => {
      const modalContainer = projectModal.querySelector('.modal-container');
      modalContainer.innerHTML = `
        <button class="modal-close-btn" id="close-modal-btn">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; padding-right: 2.5rem;">
          <h3 class="section-title" style="margin: 0; font-size: 1.4rem;">Himanshu Pandey — <span class="gradient-text">Resume Preview</span></h3>
          <a href="assets/resume.html" target="_blank" class="btn btn-primary" style="padding: 0.45rem 1rem; font-size: 0.85rem;">
            <i class="fa-solid fa-up-right-from-square"></i> Open Full Screen
          </a>
        </div>
        <iframe src="assets/resume.html" style="width: 100%; height: 70vh; border: none; border-radius: var(--radius-md); background: #ffffff;"></iframe>
      `;
      projectModal.classList.add('active');
      modalContainer.querySelector('#close-modal-btn').addEventListener('click', () => projectModal.classList.remove('active'));
    });
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) projectModal.classList.remove('active');
    });
  }

  /* ------------------------------------------------------------------------
     7. RENDER TIMELINE (EXPERIENCE & EDUCATION)
     ------------------------------------------------------------------------ */
  const expTimeline = document.getElementById('experience-timeline');
  if (expTimeline && data.experience) {
    expTimeline.innerHTML = data.experience.map(exp => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="glass-card timeline-card">
          <div class="timeline-header">
            <h4 class="timeline-role">${exp.role}</h4>
            <span class="timeline-badge">${exp.type}</span>
          </div>
          <div class="timeline-company">${exp.company} • ${exp.location}</div>
          <div class="timeline-period"><i class="fa-regular fa-calendar"></i> ${exp.period}</div>
          <ul class="timeline-bullets">
            ${exp.details.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  const eduTimeline = document.getElementById('education-timeline');
  if (eduTimeline && data.education) {
    eduTimeline.innerHTML = data.education.map(edu => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="glass-card timeline-card">
          <h4 class="timeline-role">${edu.degree}</h4>
          <div class="timeline-company">${edu.institution}</div>
          <div class="timeline-period"><i class="fa-regular fa-calendar"></i> ${edu.period}</div>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">${edu.coursework}</p>
        </div>
      </div>
    `).join('');
  }

  /* ------------------------------------------------------------------------
     8. RENDER CERTIFICATIONS GRID
     ------------------------------------------------------------------------ */
  const certsGrid = document.getElementById('certs-grid');
  if (certsGrid && data.certifications) {
    certsGrid.innerHTML = data.certifications.map(cert => `
      <div class="glass-card cert-card">
        <div class="cert-icon">
          <i class="fa-solid fa-award"></i>
        </div>
        <div class="cert-body">
          <h4 class="cert-title">${cert.title}</h4>
          <div class="cert-issuer">${cert.issuer}</div>
          <p class="cert-desc">${cert.highlight}</p>
        </div>
      </div>
    `).join('');
  }

  /* ------------------------------------------------------------------------
     9. CONTACT FORM & COPY TO CLIPBOARD
     ------------------------------------------------------------------------ */
  const emailCopyBtn = document.getElementById('copy-email-btn');
  if (emailCopyBtn) {
    emailCopyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(data.personal.email);
      showToast('Email address copied to clipboard!');
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Himanshu will respond to your message shortly.');
      contactForm.reset();
    });
  }

  function showToast(msg) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--accent-cyan);"></i> ${msg}`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  /* ------------------------------------------------------------------------
     10. NAVBAR SCROLL SPY & MOBILE HAMBURGER
     ------------------------------------------------------------------------ */
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll spy for active section highlight
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const link = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (link) link.classList.add('active');
      } else {
        if (link) link.classList.remove('active');
      }
    });
  });

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }
});
