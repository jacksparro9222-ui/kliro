const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menu.classList.toggle('open', open);
});
menu?.querySelectorAll('a').forEach(anchor => anchor.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-group')) document.querySelectorAll('.nav-group[open]').forEach(group => group.removeAttribute('open'));
});
document.querySelector('#contact-form')?.addEventListener('submit', async event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const endpoint = form.getAttribute('action');
  if (endpoint) {
    const button = form.querySelector('button[type="submit"]');
    const status = form.querySelector('.form-status');
    button.disabled = true;
    status.hidden = false;
    status.className = 'form-status';
    status.textContent = 'Sending your enquiry…';
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error('Formspree could not accept the enquiry');
      form.reset();
      status.classList.add('is-success');
      status.textContent = 'Thanks — your enquiry has been sent. We’ll be in touch by email.';
    } catch {
      status.classList.add('is-error');
      status.textContent = 'We couldn’t send your enquiry. Please try again or email hello@klirolabs.com.';
    } finally {
      button.disabled = false;
    }
    return;
  }
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const company = String(data.get('company') || '').trim();
  const service = String(data.get('service') || '').trim();
  const project = String(data.get('project') || '').trim();
  const subject = encodeURIComponent(`Project enquiry: ${service}`);
  const body = encodeURIComponent(`Hi Klirolabs,\n\n${project}\n\nProject type: ${service}\nName: ${name}\nCompany: ${company || 'Not provided'}\nWork email: ${email}`);
  window.location.href = `mailto:hello@klirolabs.com?subject=${subject}&body=${body}`;
});
