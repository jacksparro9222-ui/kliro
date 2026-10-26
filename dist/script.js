const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');
menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  primaryNav.classList.toggle('open', open);
});
primaryNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  primaryNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Open menu');
}));
document.querySelector('#year').textContent = String(new Date().getFullYear());
document.querySelector('#project-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const service = String(data.get('service') || '').trim();
  const project = String(data.get('project') || '').trim();
  const subject = encodeURIComponent(`Project enquiry — ${service}`);
  const body = encodeURIComponent(`Hi Klirolabs,\n\n${project}\n\nService: ${service}\nName: ${name}\nEmail: ${email}`);
  window.location.href = `mailto:hello@klirolabs.com?subject=${subject}&body=${body}`;
});
