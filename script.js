/* ==========================================================================
   HIMANSHU PANDEY — PORTFOLIO APPLICATION ENGINE
   Design: Premium Dark Editorial Tech
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof PORTFOLIO_DATA === 'undefined') {
    console.error('PORTFOLIO_DATA is not defined in config.js!');
    return;
  }

  const data = PORTFOLIO_DATA;

  /* ------------------------------------------------------------------------
     1. SUBTLE EDITORIAL PARTICLE / GRID CANVAS
     ------------------------------------------------------------------------ */
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.min(Math.floor(window.innerWidth / 28), 45);

    class NodeParticle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.8;
        this.isLime = Math.random() > 0.65;
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
        ctx.fillStyle = this.isLime ? 'rgba(199, 255, 94, 0.7)' : 'rgba(242, 240, 232, 0.35)';
        ctx.fill();
      }
    }

    for (let i = 0; i < count; i++) {
      particles.push(new NodeParticle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(199, 255, 94, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }
    animate();
  }

  /* ------------------------------------------------------------------------
     2. RENDER HERO METRICS STRIP
     ------------------------------------------------------------------------ */
  const metricsContainer = document.getElementById('metrics-strip');
  if (metricsContainer && data.personal.metrics) {
    metricsContainer.innerHTML = data.personal.metrics.map(metric => `
      <div class="editorial-card metric-card">
        <div class="metric-value">${metric.value}</div>
        <div class="metric-label">${metric.label}</div>
        <div class="metric-sub">${metric.sub}</div>
      </div>
    `).join('');
  }

  /* ------------------------------------------------------------------------
     3. RENDER TECHNICAL SKILLS (NO PERCENTAGE BARS)
     ------------------------------------------------------------------------ */
  const skillsFilterTabs = document.getElementById('skills-filter-tabs');
  const skillsDomainsGrid = document.getElementById('skills-domains-grid');
  const skillsSearchInput = document.getElementById('skills-search');

  let activeSkillCategory = 'All';

  if (skillsFilterTabs && data.skills) {
    const categories = ['All', ...Object.keys(data.skills)];

    skillsFilterTabs.innerHTML = categories.map((cat, idx) => `
      <button class="skill-tab-btn ${idx === 0 ? 'active' : ''}" data-category="${cat}">${cat}</button>
    `).join('');

    skillsFilterTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.skill-tab-btn');
      if (btn) {
        document.querySelectorAll('.skill-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeSkillCategory = btn.dataset.category;
        renderSkills();
      }
    });
  }

  function renderSkills() {
    if (!skillsDomainsGrid || !data.skills) return;

    const query = skillsSearchInput ? skillsSearchInput.value.trim().toLowerCase() : '';
    let domainsToRender = [];

    Object.entries(data.skills).forEach(([domain, skillsList]) => {
      if (activeSkillCategory === 'All' || activeSkillCategory === domain) {
        const filteredSkills = skillsList.filter(s => 
          s.toLowerCase().includes(query) || domain.toLowerCase().includes(query)
        );

        if (filteredSkills.length > 0) {
          domainsToRender.push({
            domain,
            skills: filteredSkills,
            totalCount: skillsList.length
          });
        }
      }
    });

    if (domainsToRender.length === 0) {
      skillsDomainsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
          <p style="font-family: var(--font-mono); font-size: 0.95rem;">No technical skills found matching "${query}".</p>
        </div>
      `;
      return;
    }

    skillsDomainsGrid.innerHTML = domainsToRender.map(item => `
      <div class="editorial-card skill-domain-card">
        <div class="domain-header">
          <h3 class="domain-title">${item.domain}</h3>
          <span class="domain-badge">${item.skills.length} skills</span>
        </div>
        <div class="skill-tags-cloud">
          ${item.skills.map(skill => `<span class="skill-pill">${skill}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  if (skillsSearchInput) {
    skillsSearchInput.addEventListener('input', renderSkills);
  }
  renderSkills();

  /* ------------------------------------------------------------------------
     4. RENDER FEATURED PROJECTS WITH FILTER TABS
     ------------------------------------------------------------------------ */
  const projectsFilterTabs = document.getElementById('projects-filter-tabs');
  const projectsGrid = document.getElementById('projects-grid');
  const projectModal = document.getElementById('project-modal');

  let activeProjectCategory = 'All';

  if (projectsFilterTabs && data.projects) {
    // Extract unique categories
    const categories = ['All', ...new Set(data.projects.map(p => p.category))];

    projectsFilterTabs.innerHTML = categories.map((cat, idx) => `
      <button class="project-tab-btn ${idx === 0 ? 'active' : ''}" data-category="${cat}">${cat}</button>
    `).join('');

    projectsFilterTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.project-tab-btn');
      if (btn) {
        document.querySelectorAll('.project-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeProjectCategory = btn.dataset.category;
        renderProjects();
      }
    });
  }

  function renderProjects() {
    if (!projectsGrid || !data.projects) return;

    const filtered = data.projects.filter(proj => 
      activeProjectCategory === 'All' || proj.category === activeProjectCategory
    );

    projectsGrid.innerHTML = filtered.map(proj => `
      <div class="editorial-card project-card">
        <div class="project-thumbnail-wrapper">
          <img src="${proj.image}" alt="${proj.title}" class="project-thumbnail" loading="lazy">
          <span class="project-category-tag">${proj.category}</span>
        </div>
        <div class="project-body">
          <h3 class="project-name">${proj.title}</h3>
          <p class="project-desc">${proj.shortDesc}</p>
          <div class="project-tech-list">
            ${proj.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
          </div>
          <div class="project-footer">
            <button class="project-action-link view-project-btn" data-id="${proj.id}">
              <i class="fa-solid fa-layer-group"></i> Architecture Details
            </button>
            <div style="display: flex; gap: 0.85rem; align-items: center;">
              ${proj.live ? `
                <a href="${proj.live}" target="_blank" rel="noopener noreferrer" class="project-action-link" style="color: var(--accent-lime);">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
              ` : ''}
              ${proj.github ? `
                <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="project-action-link" style="color: var(--text-secondary);">
                  <i class="fa-brands fa-github"></i> GitHub
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }
  renderProjects();

  // Project Modal Details
  if (projectsGrid) {
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
      <button class="modal-close-btn" id="close-modal-btn" aria-label="Close modal">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <div style="margin-bottom: 1.25rem;">
        <span class="section-tag" style="margin-bottom: 0.75rem;">${project.category}</span>
        <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text-primary); line-height: 1.25; margin-bottom: 0.5rem;">
          ${project.title}
        </h2>
        <p style="color: var(--text-secondary); font-size: 0.95rem;">${project.shortDesc}</p>
      </div>

      <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 260px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: 1.5rem; border: 1px solid var(--border-subtle);">

      <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--accent-lime); margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
        <i class="fa-solid fa-circle-check"></i> System Architecture & Key Highlights
      </h4>
      <ul style="padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.75; font-size: 0.9rem; margin-bottom: 1.75rem;">
        ${project.highlights.map(h => `<li style="margin-bottom: 0.5rem;">${h}</li>`).join('')}
      </ul>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.65rem;">
          Technology Stack
        </h4>
        <div class="skill-tags-cloud">
          ${project.tech.map(t => `<span class="skill-pill">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        ${project.live ? `
          <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <i class="fa-solid fa-rocket"></i> Launch Live Application
          </a>
        ` : ''}
        ${project.github ? `
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
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
     5. RECRUITER RESUME MODAL TRIGGER
     ------------------------------------------------------------------------ */
  const openResumeModalBtn = document.getElementById('open-resume-modal-btn');
  if (openResumeModalBtn && projectModal) {
    openResumeModalBtn.addEventListener('click', () => {
      const modalContainer = projectModal.querySelector('.modal-container');
      modalContainer.innerHTML = `
        <button class="modal-close-btn" id="close-modal-btn" aria-label="Close modal">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; padding-right: 2.5rem; flex-wrap: wrap; gap: 0.75rem;">
          <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary);">
            Himanshu Pandey — <span class="accent-text">Official Resume</span>
          </h3>
          <div style="display: flex; gap: 0.5rem;">
            <a href="assets/resume.html" target="_blank" class="btn btn-primary" style="padding: 0.45rem 0.95rem; font-size: 0.82rem;">
              <i class="fa-solid fa-up-right-from-square"></i> Open Full Tab
            </a>
          </div>
        </div>
        <iframe src="assets/resume.html" style="width: 100%; height: 72vh; border: none; border-radius: var(--radius-sm); background: #ffffff;"></iframe>
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
     6. RENDER WORK EXPERIENCE
     ------------------------------------------------------------------------ */
  const expContainer = document.getElementById('experience-list');
  if (expContainer && data.experience) {
    expContainer.innerHTML = data.experience.map(exp => `
      <div class="editorial-card experience-card">
        <div class="experience-header">
          <h3 class="experience-role">${exp.role}</h3>
          <span class="experience-period">${exp.period}</span>
        </div>
        <div class="experience-company">
          ${exp.company} • ${exp.location} • <span style="color: var(--accent-lime); font-family: var(--font-mono); font-size: 0.8rem;">[${exp.type}]</span>
        </div>
        <ul class="experience-bullets">
          ${exp.details.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  /* ------------------------------------------------------------------------
     7. RENDER EDUCATION
     ------------------------------------------------------------------------ */
  const eduContainer = document.getElementById('education-grid');
  if (eduContainer && data.education) {
    eduContainer.innerHTML = data.education.map(edu => `
      <div class="editorial-card education-card">
        <div class="edu-period">${edu.period}</div>
        <h3 class="edu-degree">${edu.degree}</h3>
        <div class="edu-institution">${edu.institution} • ${edu.location}</div>
        <p class="edu-details">${edu.details}</p>
      </div>
    `).join('');
  }

  /* ------------------------------------------------------------------------
     8. RENDER CERTIFICATIONS & ACHIEVEMENTS
     ------------------------------------------------------------------------ */
  const certsContainer = document.getElementById('certs-grid');
  if (certsContainer && data.certifications) {
    certsContainer.innerHTML = data.certifications.map(cert => `
      <div class="editorial-card cert-card">
        <div class="cert-icon">
          <i class="fa-solid fa-award"></i>
        </div>
        <div class="cert-body">
          <h4 class="cert-title">${cert.title}</h4>
          <div class="cert-issuer">${cert.issuer} • <span style="color: var(--text-muted);">${cert.badge}</span></div>
          <p class="cert-desc">${cert.highlight}</p>
        </div>
      </div>
    `).join('');
  }

  /* ------------------------------------------------------------------------
     9. CONTACT HUB & COPY ACTIONS
     ------------------------------------------------------------------------ */
  const emailCopyBtn = document.getElementById('copy-email-btn');
  if (emailCopyBtn) {
    emailCopyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(data.personal.email);
      showToast('Email address copied to clipboard: ' + data.personal.email);
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your message has been sent to Himanshu Pandey.');
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
    toast.innerHTML = `<i class="fa-solid fa-check" style="color: var(--accent-lime);"></i> ${msg}`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  /* ------------------------------------------------------------------------
     10. NAVBAR SCROLL SPY & MOBILE MENU
     ------------------------------------------------------------------------ */
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
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
