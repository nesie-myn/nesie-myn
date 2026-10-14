const projects = {
  'trt-web': {
    kicker: 'SELECTED WORK / TRT WEBSITE', title: 'Making enterprise IT easier to understand',
    lead: 'A website should help a visitor understand the business, recognize what matters to them, and know what to do next.',
    role: 'Website content, page flow, and visual direction', status: 'Ongoing website revamp',
    body: '<h3>The context</h3><p>TRT supports enterprise IT infrastructure. Communicating that clearly means translating technical breadth into a coherent story for a business audience.</p><h3>My contribution</h3><p>I’m working on website content and layout revisions, including the homepage and service pages. The work connects messaging, section order, visual hierarchy, and brand consistency.</p><ul><li>Structure pages around what a visitor needs to understand.</li><li>Make service descriptions more direct and easier to scan.</li><li>Use Figma to develop and refine page layouts.</li><li>Connect visual choices to TRT’s enterprise identity.</li></ul><div class="detail-callout">The goal: a clearer path from technical information to customer understanding.</div><h3>What this work is teaching me</h3><p>Good page flow is a business decision as much as a design decision. The sequence of information shapes how visitors understand the offer.</p>',
    foot: 'This work is ongoing. The cover is an illustrative study, not a screenshot of the live website. No conversion or revenue results are claimed.'
  },
  'trt-brand': {
    kicker: 'SELECTED WORK / TRT BRAND GUIDELINES', title: 'Building a more consistent brand',
    lead: 'A strong visual direction matters. A direction that other people can apply consistently matters even more.',
    role: 'Brand guidelines and visual design', status: 'Brand Guidelines v2.0 · In development',
    body: '<h3>The context</h3><p>Enterprise marketing spans presentations, digital content, collateral, and website pages. A practical brand foundation helps those touchpoints feel connected.</p><h3>My contribution</h3><p>I’m developing TRT’s brand guidelines with a premium enterprise visual direction: navy and blue foundations, clear typography, restrained technical imagery, and selective orange accents.</p><ul><li>Document visual choices so they are easier to repeat.</li><li>Apply the same hierarchy and visual language across materials.</li><li>Connect design guidance to the situations the team actually encounters.</li><li>Build toward a usable first version and refine it through real work.</li></ul><div class="detail-callout">A brand system earns its place when it makes the next piece of work easier.</div><h3>Why it matters to me</h3><p>I’m interested in design that becomes a shared capability. Guidelines should help a team make better decisions without needing to recreate the reasoning every time.</p>',
    foot: 'The guidelines are in development. The cover is an illustrative visual study; internal brand documents and proprietary materials are not reproduced here.'
  },
  'elaundry': {
    kicker: 'SELECTED WORK / eLAUNDRY', title: 'Making everyday services feel clear',
    lead: 'Small business marketing brings every message close to a real customer question: what is the service, how does it work, and what should I do next?',
    role: 'Branding and customer communication', status: 'Ongoing family-business contribution',
    body: '<h3>The context</h3><p>I contribute to our family’s eLaundry business, where brand identity and service communication meet everyday customer needs.</p><h3>My contribution</h3><p>My work includes branding materials, flyers, loyalty-card communication, service explanations, customer FAQs, and social messaging.</p><ul><li>Use a consistent teal and pink visual identity.</li><li>Make service and pricing communication easier to understand.</li><li>Keep customer-facing materials practical and recognizable.</li><li>Think through the questions that come before an inquiry or visit.</li></ul><div class="detail-callout">Clear communication is part of the service experience.</div><h3>A different scale, the same discipline</h3><p>This work gives me a practical setting for connecting marketing, customer experience, and what I’m learning in my MBA. The distance between an idea and the day-to-day business is short.</p>',
    foot: 'I contribute to the family business; this is not a claim of sole ownership or authorship. The project cover is an illustrative brand study. No business performance results are claimed.'
  }
};
const notes = {
  evidence: {
    kicker: 'FIELD NOTES / ENTERPRISE MARKETING', title: 'Trust grows where evidence is easy to find.',
    lead: 'The most useful marketing helps a buyer make a decision with more confidence.',
    body: '<p>In enterprise technology, clear language is only a starting point. A buyer also needs to understand how the business works, what support looks like, and why the offer is relevant to their situation.</p><p>That changes the job of the content. A service page should explain the service. A case study should show the problem and the contribution. A presentation should make the reasoning visible.</p><h3>Make the next question easier to answer.</h3><p>Before adding another headline, I want to ask what a visitor still needs to know. Is the scope clear? Can they understand the process? Is there something concrete behind the promise?</p><p>A strong claim creates an expectation. Evidence helps someone assess whether that expectation is reasonable.</p><div class="detail-callout">Make the proof easier to understand, and easier to find.</div><h3>What I want to carry into my work</h3><p>Lead with clarity, support the message with appropriate evidence, and resist filling gaps with bigger language. The goal is a useful conversation with a better-informed customer.</p>'
  },
  systems: {
    kicker: 'FIELD NOTES / BRAND & SYSTEMS', title: 'A brand is useful when other people can use it.',
    lead: 'Consistency is easier to build when the reasoning behind the design is available to the people doing the work.',
    body: '<p>A polished design can solve today’s request. A usable brand foundation can also help with the next presentation, page, or piece of collateral.</p><p>That is why I’m interested in the practical side of guidelines: a clear hierarchy, repeatable layouts, a sensible color palette, and examples that match real situations.</p><h3>Design for the handoff.</h3><p>If every asset depends on one person remembering every choice, consistency becomes difficult to maintain. The system should reduce the number of decisions the next person has to guess.</p><p>A good template explains its purpose through its structure. A useful guideline answers the question someone is likely to have while creating a piece of work.</p><div class="detail-callout">The next person should inherit a foundation, not a puzzle.</div><h3>Start small enough to use.</h3><p>I prefer a practical first version that can be applied now, then refined. A system develops value through use. Its usefulness matters as much as its completeness.</p>'
  },
  customer: {
    kicker: 'FIELD NOTES / CUSTOMER EXPERIENCE', title: 'Start with the customer’s next question.',
    lead: 'The most useful improvement is often the piece of information someone was about to ask for.',
    body: '<p>Working across enterprise marketing and our family’s laundry business has given me two very different settings for the same question: what does the customer need to understand next?</p><p>The answer might be a service boundary, a pricing explanation, a process, or a clear next step. The content should meet that need in language the customer can use.</p><h3>Look at the experience in sequence.</h3><p>Someone first notices a business, then tries to understand it, then considers taking action. A page or flyer works better when the information follows that sequence.</p><p>This gives design a concrete job. Hierarchy tells the reader where to begin. Structure connects one question to the next. The call to action makes the next step clear.</p><div class="detail-callout">Before adding more content, find the missing answer.</div><h3>Keep the improvement practical.</h3><p>I want to build experiences that feel easier to navigate, then use the questions and feedback that follow to improve them. It starts with paying attention to what people are trying to do.</p>'
  }
};

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  mobileNav.hidden = true;
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
window.matchMedia('(min-width:701px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

const dialog = document.querySelector('#detail-dialog');
const detailContent = document.querySelector('#detail-content');
let lastTrigger;
function openDetail(data, project, trigger) {
  if (!data) return;
  lastTrigger = trigger;
  const facts = project ? `<div class="detail-facts"><div><span>My contribution</span>${data.role}</div><div><span>Project status</span>${data.status}</div></div>` : '';
  const foot = project ? `<p class="detail-status">${data.foot}</p>` : '<p class="detail-status">A working principle, written for this portfolio. These notes reflect the direction I’m building toward.</p>';
  detailContent.innerHTML = `<p class="detail-kicker">${data.kicker}</p><h2 id="detail-title">${data.title}</h2><p class="detail-lead">${data.lead}</p>${facts}<div class="detail-body">${data.body}</div>${foot}<button class="detail-back">${project ? 'Back to selected work' : 'Back to field notes'} <span aria-hidden="true">↗</span></button>`;
  detailContent.querySelector('.detail-back').addEventListener('click', () => dialog.close());
  // This link comes from portfolio-links.js. A Google Drive URL opens the shared file;
  // it does not upload or embed it. The file must have appropriate viewing permissions.
  const materialUrl = project && window.PORTFOLIO_LINKS?.[trigger.dataset.project];
  if (materialUrl) {
    try {
      const parsed = new URL(materialUrl);
      if (parsed.protocol === 'https:') {
        const link = document.createElement('a');
        link.href = parsed.href;
        link.textContent = 'View project materials ↗';
        link.className = 'text-link';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        detailContent.querySelector('.detail-body').appendChild(link);
      }
    } catch { /* Invalid links stay hidden until corrected in portfolio-links.js. */ }
  }
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
  document.querySelector('.dialog-close').focus();
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openDetail(projects[button.dataset.project], true, button)));
document.querySelectorAll('[data-note]').forEach(button => button.addEventListener('click', () => openDetail(notes[button.dataset.note], false, button)));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); if (lastTrigger) lastTrigger.focus(); });
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});

const copyButton = document.querySelector('.copy-email');
const toast = document.querySelector('#toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3200);
}
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.email);
    showToast('Email copied. Let’s start a conversation.');
  } catch {
    showToast('Email: alva.eisenjoy@gmail.com');
  }
});
document.querySelector('#copyright-year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const navLinks = document.querySelectorAll('.desktop-nav a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('active', link.hash === '#' + entry.target.id));
    });
  }, {rootMargin: '-10% 0px -60% 0px', threshold: 0});
  ['work', 'approach', 'about', 'notes'].forEach(id => observer.observe(document.getElementById(id)));
}
