const header = document.querySelector('.mega-header');
const menuButton = document.querySelector('.mega-toggle');
const menu = document.querySelector('.mega-nav');
const groups = [...document.querySelectorAll('.mega-item')];
const mobileNav = window.matchMedia('(max-width: 820px)');

function syncMenuLayout() {
  groups.forEach(group => {
    const categories = [...group.querySelectorAll('.mega-category')];
    const views = [...group.querySelectorAll('.mega-view')];
    const viewColumn = group.querySelector('.mega-views');
    views.forEach((view, index) => {
      if (mobileNav.matches) categories[index].after(view);
      else viewColumn.append(view);
    });
  });
}
syncMenuLayout();

function selectCategory(group, index) {
  const wasOpen = group.querySelectorAll('.mega-category')[index].classList.contains('is-active');
  const selected = mobileNav.matches && wasOpen ? -1 : index;
  group.querySelectorAll('.mega-category').forEach((button, position) => {
    const active = position === selected;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-expanded', String(active));
    button.querySelector('span').textContent = active ? '−' : '+';
  });
  group.querySelectorAll('.mega-view').forEach((view, position) => { view.hidden = position !== selected; });
}

function closeNav(restoreFocus = false) {
  const trigger = groups.find(group => group.classList.contains('is-open'))?.querySelector('.mega-trigger');
  groups.forEach(group => {
    group.classList.remove('is-open');
    group.querySelector('.mega-trigger').setAttribute('aria-expanded', 'false');
    group.querySelector('.mega-panel').hidden = true;
  });
  menu?.classList.remove('is-open', 'has-section');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
  document.body.classList.remove('nav-open');
  if (restoreFocus) (mobileNav.matches ? menuButton : trigger)?.focus();
}

function openGroup(group) {
  groups.forEach(item => {
    const active = item === group;
    item.classList.toggle('is-open', active);
    item.querySelector('.mega-trigger').setAttribute('aria-expanded', String(active));
    item.querySelector('.mega-panel').hidden = !active;
  });
  if (mobileNav.matches) menu.classList.add('has-section');
}

menuButton?.addEventListener('click', () => {
  if (menu.classList.contains('is-open')) return closeNav();
  menu.classList.add('is-open');
  menuButton.setAttribute('aria-expanded', 'true');
  menuButton.setAttribute('aria-label', 'Close navigation');
  document.body.classList.add('nav-open');
});

groups.forEach(group => {
  const trigger = group.querySelector('.mega-trigger');
  trigger.addEventListener('click', () => {
    if (group.classList.contains('is-open') && !mobileNav.matches) closeNav();
    else openGroup(group);
  });
  trigger.addEventListener('pointerenter', event => {
    if (!mobileNav.matches && event.pointerType === 'mouse') openGroup(group);
  });
  group.querySelector('.mega-back').addEventListener('click', () => {
    group.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
    group.querySelector('.mega-panel').hidden = true;
    menu.classList.remove('has-section');
    trigger.focus();
  });
  group.querySelectorAll('.mega-category').forEach((button, index) => {
    button.addEventListener('click', () => selectCategory(group, index));
    button.addEventListener('pointerenter', event => {
      if (!mobileNav.matches && event.pointerType === 'mouse') selectCategory(group, index);
    });
  });
});

header?.addEventListener('pointerleave', event => {
  if (!mobileNav.matches && event.pointerType === 'mouse') closeNav();
});
document.addEventListener('click', event => {
  if (!event.target.closest('.mega-header')) closeNav();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && (menu?.classList.contains('is-open') || groups.some(group => group.classList.contains('is-open')))) {
    event.preventDefault();
    closeNav(true);
  }
});
menu?.querySelectorAll('a').forEach(anchor => anchor.addEventListener('click', () => closeNav()));
mobileNav.addEventListener('change', () => { closeNav(); syncMenuLayout(); });
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
