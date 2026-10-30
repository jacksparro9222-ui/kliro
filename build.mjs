import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { services, industries } from './site-content.mjs';

const root = join(import.meta.dirname, 'dist');
const origin = process.env.SITE_ORIGIN || 'https://klirolabs-studio.jacksparro9222.chatgpt.site';
const servicePath = slug => `/services/${slug}/`;
const industryPath = slug => `/industries/${slug}/`;
const serviceBySlug = Object.fromEntries(services.map(item => [item.slug, item]));
const industryBySlug = Object.fromEntries(industries.map(item => [item.slug, item]));
const esc = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const link = (href, label, cls = '') => `<a href="${href}"${cls ? ` class="${cls}"` : ''}>${esc(label)} <span aria-hidden="true">↗</span></a>`;
const cta = (label = 'Discuss your project') => `<a class="btn btn-primary" href="/contact/">${esc(label)} <span aria-hidden="true">↗</span></a>`;
const eyebrow = (label, light = false) => `<p class="eyebrow${light ? ' light' : ''}"><span class="eyebrow-rule"></span>${esc(label)}</p>`;

function nav() {
  const navItems = list => list.map(item => `<a href="${item.href}"><span>${esc(item.title)}</span><small>${esc(item.short)}</small></a>`).join('');
  return `<header class="site-header" id="top"><div class="shell header-inner">
    <a class="brand" href="/" aria-label="Klirolabs home"><img src="/assets/klirolabs-logo.png" alt="Klirolabs" width="2172" height="724"></a>
    <button class="menu-toggle" type="button" aria-label="Open navigation" aria-controls="site-nav" aria-expanded="false"><span></span><span></span></button>
    <nav id="site-nav" class="site-nav" aria-label="Main navigation">
      <details class="nav-group"><summary>Services <span aria-hidden="true">⌄</span></summary><div class="nav-panel"><strong>WHAT WE BUILD</strong>${navItems(services.map(item => ({...item, href: servicePath(item.slug)})))}</div></details>
      <details class="nav-group"><summary>Industries <span aria-hidden="true">⌄</span></summary><div class="nav-panel compact"><strong>WHERE WE FOCUS</strong>${navItems(industries.map(item => ({...item, href: industryPath(item.slug)})))}</div></details>
      <a href="/case-studies/">Case studies</a><a href="/about/">About</a><a href="/process/">Process</a>
      <a class="nav-contact" href="/contact/">Let's talk <span aria-hidden="true">↗</span></a>
    </nav></div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="shell footer-grid"><div class="footer-identity"><a class="brand" href="/" aria-label="Klirolabs home"><img src="/assets/klirolabs-logo.png" alt="Klirolabs" width="2172" height="724"></a><p>Websites and software engineered for serious growth.</p><a class="footer-mail" href="mailto:hello@klirolabs.com">hello@klirolabs.com ↗</a></div><div><h2>Services</h2>${services.map(item => `<a href="${servicePath(item.slug)}">${esc(item.title)}</a>`).join('')}</div><div><h2>Explore</h2>${industries.map(item => `<a href="${industryPath(item.slug)}">${esc(item.title)}</a>`).join('')}<a href="/case-studies/">Case studies</a><a href="/process/">Our process</a></div><div><h2>Company</h2><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/contact/">Discuss a project</a></div></div><div class="shell footer-bottom"><span>© ${new Date().getFullYear()} Klirolabs. All rights reserved.</span><span>Built with purpose. Ready for what’s next.</span><a href="#top">Back to top ↑</a></div></footer>`;
}

function layout({path, title, description, main, kind = 'page'}) {
  const full = `${origin}${path}`;
  const structured = path === '/' ? [
    { '@context': 'https://schema.org', '@type': 'Organization', name: 'Klirolabs', url: origin, logo: `${origin}/assets/klirolabs-logo.png`, email: 'hello@klirolabs.com' },
    { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Klirolabs', url: origin }
  ] : [{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
    { '@type': 'ListItem', position: 2, name: title.replace(/ \| Klirolabs$/, ''), item: full }
  ] }];
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#f7f8fc"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${full}"><meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${full}"><meta property="og:image" content="${origin}/assets/klirolabs-logo.png"><meta name="twitter:card" content="summary_large_image"><link rel="icon" type="image/svg+xml" href="/assets/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="/assets/site.css"><script type="application/ld+json">${JSON.stringify(structured).replace(/</g, '\\u003c')}</script><script>window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };</script><script defer src="/_vercel/insights/script.js"></script><script src="/assets/site.js" defer></script></head><body data-kind="${kind}"><a class="skip-link" href="#main">Skip to content</a>${nav()}<main id="main">${main}</main>${footer()}</body></html>`;
}

function graphic(type = 'platform') {
  return `<div class="product-art ${type}" aria-hidden="true"><div class="art-halo"></div><div class="art-window"><div class="art-toolbar"><span class="art-dots"><i></i><i></i><i></i></span><span>klirolabs / digital craft</span><span>⌘</span></div><div class="art-body"><div class="art-sidebar"><b>✦</b><i></i><i></i><i></i></div><div class="art-main"><small>IDEAS INTO IMPACT</small><strong>Build what<br><em>matters.</em></strong><div class="art-module"><i></i><i></i><i></i><i></i></div></div></div></div><span class="art-float">✦ &nbsp; Designed to move you forward</span></div>`;
}

function hero({crumb, eyebrowText, title, accent, intro, visual = 'platform', home = false}) {
  const heading = home ? `<h1>${esc(title)} <em>${esc(accent)}</em></h1>` : `<h1>${esc(title)}<br><em>${esc(accent)}</em></h1>`;
  return `<section class="hero${home ? ' home-hero' : ''}"><div class="shell hero-grid"><div class="hero-copy">${crumb ? `<div class="breadcrumb"><a href="/">Home</a><span>/</span><span>${esc(crumb)}</span></div>` : ''}${eyebrow(eyebrowText)}${heading}<p class="hero-intro">${esc(intro)}</p><div class="hero-actions">${cta()}${home ? link('/case-studies/', 'Explore our work', 'secondary-link') : link('/process/', 'How we work', 'secondary-link')}</div></div>${graphic(visual)}</div><div class="shell hero-tail"><span>${home ? 'DIGITAL ENGINEERING STUDIO' : esc(eyebrowText)}</span><span>STRATEGY / DESIGN / DEVELOPMENT</span></div></section>`;
}

function sectionHead(kicker, title, text = '') { return `<div class="section-head">${eyebrow(kicker)}<h2>${title}</h2>${text ? `<p>${esc(text)}</p>` : ''}</div>`; }
function issueCards(items, className = '') { return `<div class="issue-grid ${className}">${items.map(([heading, text], i) => `<article class="issue-card"><span class="card-index">0${i + 1} /</span><h3>${esc(heading)}</h3><p>${esc(text)}</p></article>`).join('')}</div>`; }
function capabilityCards(items) { return `<div class="capability-grid">${items.map(([heading, text], i) => `<article class="capability-card"><span class="capability-symbol">${['↗','◈','⌘','✦'][i % 4]}</span><span class="card-index">0${i + 1}</span><h3>${esc(heading)}</h3><p>${esc(text)}</p></article>`).join('')}</div>`; }
function serviceLinks(slugs) { return slugs.map(slug => { const item = serviceBySlug[slug]; return `<a class="related-card" href="${servicePath(slug)}"><span>SERVICE ↗</span><h3>${esc(item.title)}</h3><p>${esc(item.short)}</p><b aria-hidden="true">↗</b></a>`; }).join(''); }
function industryLinks(slugs) { return slugs.map(slug => { const item = industryBySlug[slug]; return `<a class="related-card" href="${industryPath(slug)}"><span>INDUSTRY ↗</span><h3>${esc(item.title)}</h3><p>${esc(item.short)}</p><b aria-hidden="true">↗</b></a>`; }).join(''); }
function callout(title = 'Have a project in mind?', text = 'Tell us what you are trying to achieve. We will help shape a practical next step.') { return `<section class="callout"><div class="shell callout-inner"><div>${eyebrow('START A CONVERSATION', true)}<h2>${esc(title)}</h2><p>${esc(text)}</p></div><a class="btn btn-orange" href="/contact/">Discuss your project <span aria-hidden="true">↗</span></a></div></section>`; }

function homePage() {
  const main = `${hero({eyebrowText:'WEBSITE & SOFTWARE DEVELOPMENT',title:'Websites and software engineered for',accent:'serious growth.',intro:'Klirolabs helps ambitious companies design, build and modernize high-performance websites, custom software and digital platforms.',home:true})}
  <section class="outcome-section"><div class="shell outcome-inner"><div class="outcome-heading">The right digital solution should change what is possible for your business.</div><div class="outcome-list"><span>Generate more qualified enquiries</span><span>Replace manual workflows</span><span>Make products easier to use</span><span>Modernize with confidence</span></div></div></section>
  <section class="section services-section" id="services"><div class="shell">${sectionHead('WHAT WE DO','Six ways to move <em>forward.</em>','From a stronger digital presence to software that transforms daily work, we connect the right expertise to the problem.')}
  <div class="service-list">${services.map((item,i)=>`<a class="service-row" href="${servicePath(item.slug)}"><span>0${i+1}</span><div><h3>${esc(item.title)}</h3><p>${esc(item.short)}</p></div><b aria-hidden="true">↗</b></a>`).join('')}</div></div></section>
  <section class="section perspective-section"><div class="shell perspective-grid"><div>${eyebrow('THE WORK BEHIND THE WORK',true)}<h2>Useful before<br><em>impressive.</em><br>Impressive by design.</h2></div><div><p>Strong digital work starts with a clear understanding of your business, your users and the decisions the product must support.</p><p>We connect strategy, experience design and engineering so the result is coherent from the first conversation through launch and improvement.</p>${link('/process/','Explore our process','light-link')}</div></div></section>
  <section class="section industries-section"><div class="shell">${sectionHead('INDUSTRIES','Built for different <em>realities.</em>','The same technology should work differently for a manufacturer, a retailer and a growing SaaS company.')}
  <div class="industry-grid">${industries.map((item,i)=>`<a class="industry-card" href="${industryPath(item.slug)}"><span>0${i+1} / INDUSTRY</span><h3>${esc(item.title)}</h3><p>${esc(item.short)}</p><b aria-hidden="true">↗</b></a>`).join('')}</div></div></section>
  <section class="section evidence-section"><div class="shell evidence-grid"><div>${eyebrow('OUR WORK')}<h2>Proof belongs in the <em>details.</em></h2><p>Real case studies should explain the challenge, the decisions made and the outcomes achieved. We are preparing our project stories with that standard of detail.</p>${link('/case-studies/','Visit case studies','text-arrow')}</div><div class="evidence-visual"><span>CHALLENGE</span><i></i><span>THINKING</span><i></i><span>DELIVERY</span><i></i><strong>OUTCOME ↗</strong></div></div></section>
  <section class="section process-preview"><div class="shell">${sectionHead('OUR PROCESS','A clear path from idea to <em>impact.</em>')}
  <div class="process-line">${[['01','Discover'],['02','Design'],['03','Build'],['04','Launch'],['05','Improve']].map(([n,t])=>`<div><span>${n}</span><strong>${t}</strong></div>`).join('')}</div>${link('/process/','See how we work','text-arrow')}</div></section>${callout('Let’s make the next move count.','Whether you need a new website, a custom platform or a way to improve what already exists, start with a conversation.')}`;
  return layout({path:'/',title:'Klirolabs | Enterprise Websites & Custom Software',description:'Klirolabs designs, builds and modernizes enterprise websites, custom software and digital platforms for ambitious companies.',main,kind:'home'});
}

function servicePage(item) {
  const main = `${hero({crumb:`Services / ${item.title}`,eyebrowText:item.eyebrow,title:item.title,accent:item.accent,intro:item.intro,visual:'service'})}
  <section class="section"><div class="shell">${sectionHead('THE CHALLENGE','When the current way <em>holds you back.</em>','We start with the business problem, not a preferred technology or a predetermined solution.')}${issueCards(item.problems)}</div></section>
  <section class="section tinted-section"><div class="shell">${sectionHead('WHAT WE CAN BUILD','The work that makes a <em>difference.</em>')}${capabilityCards(item.deliverables)}</div></section>
  <section class="section approach-band"><div class="shell split-content"><div>${eyebrow('OUR APPROACH')}<h2>Built with the whole picture in mind.</h2></div><div><p>${esc(item.approach)}</p><a class="text-arrow" href="/process/">Explore our delivery process <span aria-hidden="true">↗</span></a></div></div></section>
  <section class="section consideration-section"><div class="shell split-content"><div>${eyebrow('THE DETAILS THAT MATTER')}<h2>Thought through from the start.</h2></div><ul>${item.considerations.map(point=>`<li><span>✦</span>${esc(point)}</li>`).join('')}</ul></div></section>
  <section class="section related-section"><div class="shell">${sectionHead('CONNECTED EXPERTISE','Explore what comes <em>together.</em>')}<div class="related-grid">${serviceLinks(item.related)}${industryLinks(item.industries)}</div></div></section>
  <section class="section faq-section"><div class="shell faq-grid"><div>${eyebrow('COMMON QUESTIONS')}<h2>Good questions lead to better projects.</h2></div><div>${item.faqs.map(([q,a])=>`<details class="faq-item"><summary>${esc(q)} <span>+</span></summary><p>${esc(a)}</p></details>`).join('')}</div></div></section>${callout(`Let’s talk about ${item.title.toLowerCase()}.`,'Share the challenge you are facing and we will explore the right first step together.')}`;
  return layout({path:servicePath(item.slug),title:`${item.title} | Klirolabs`,description:item.description,main,kind:'service'});
}

function industryPage(item) {
  const main = `${hero({crumb:`Industries / ${item.title}`,eyebrowText:item.eyebrow,title:item.title,accent:item.accent,intro:item.intro,visual:'industry'})}
  <section class="section"><div class="shell">${sectionHead('THE INDUSTRY CONTEXT','Built for the way your world <em>works.</em>','Real value comes from understanding the handoffs, decisions and constraints behind the interface.')}${issueCards(item.challenges)}</div></section>
  <section class="section tinted-section"><div class="shell">${sectionHead('POSSIBLE SOLUTIONS','Where digital can do <em>more.</em>')}${capabilityCards(item.solutions)}</div></section>
  <section class="section perspective-section"><div class="shell perspective-grid"><div>${eyebrow('OUR PERSPECTIVE',true)}<h2>Technology should fit the operation.</h2></div><div><p>${esc(item.lens)}</p>${link('/process/','See how we approach delivery','light-link')}</div></div></section>
  <section class="section related-section"><div class="shell">${sectionHead('RELEVANT SERVICES','The capabilities behind the <em>solution.</em>')}<div class="related-grid">${serviceLinks(item.services)}</div></div></section>${callout(`Let’s discuss your ${item.title.toLowerCase()} project.`,'Tell us what your customers, partners or teams need to do better. We will start with the problem and work toward a useful plan.')}`;
  return layout({path:industryPath(item.slug),title:`${item.title} | Klirolabs`,description:item.description,main,kind:'industry'});
}

function casesPage() {
  const main = `${hero({crumb:'Case studies',eyebrowText:'WORK / PROOF / OUTCOMES',title:'Case studies',accent:'with substance.',intro:'A strong project story should show the problem, the choices made and the change delivered. Our documented case studies are in preparation.',visual:'cases'})}
  <section class="section"><div class="shell">${sectionHead('HOW WE SHOW OUR WORK','More than a gallery of <em>screens.</em>','We will publish client work only when we can describe it accurately and have permission to share it.')}
  ${capabilityCards([['The starting point','The business challenge, users and constraints that shaped the work.'],['The decisions','Why the experience and engineering approach made sense.'],['What was delivered','The scope, important workflows and implementation details.'],['The outcome','Verified results and lessons, when they can be shared.']])}</div></section>
  <section class="section tinted-section"><div class="shell pending-work"><div>${eyebrow('PROJECT STORIES')}<h2>Project stories are being <em>prepared.</em></h2><p>We will not present speculative examples as completed client work. If you are evaluating Klirolabs for a specific need, tell us the context and we can discuss our approach directly.</p>${cta('Discuss relevant work')}</div><div class="pending-visual"><span>01 / CONTEXT</span><span>02 / DECISIONS</span><span>03 / DELIVERY</span><strong>04 / VERIFIED IMPACT</strong></div></div></section>
  <section class="section related-section"><div class="shell">${sectionHead('EXPLORE OUR FOCUS','Find the work relevant to <em>you.</em>')}<div class="related-grid">${serviceLinks(['enterprise-web-development','custom-software-development','ecommerce-development'])}${industryLinks(['manufacturing','retail-ecommerce','saas-technology'])}</div></div></section>${callout('Have a challenge worth solving?','Start with your business goal and the constraints around it. We can explore what a strong outcome would look like.')}`;
  return layout({path:'/case-studies/',title:'Case Studies & Project Approach | Klirolabs',description:'Explore how Klirolabs thinks about digital project challenges, delivery decisions and verifiable outcomes. Client case studies are in preparation.',main,kind:'cases'});
}

function aboutPage() {
  const main = `${hero({crumb:'About',eyebrowText:'ABOUT KLIROLABS',title:'A digital partner',accent:'built around possibility.',intro:'Klirolabs creates custom websites and software for organizations ready to make their next digital move count.',visual:'about'})}
  <section class="section about-story"><div class="shell split-content"><div>${eyebrow('WHAT WE BELIEVE')}<h2>Good work begins with a better question.</h2></div><div><p>A request for a website or a software platform often points to a deeper need: a clearer story, a smoother operation, a more useful customer experience or a product ready for growth.</p><p>We bring design thinking and engineering together to understand that need and build a response that fits the business behind it.</p></div></div></section>
  <section class="section tinted-section"><div class="shell">${sectionHead('OUR PRINCIPLES','How we approach the <em>work.</em>')}${capabilityCards([['Business before buzzwords','Start with the outcome and the people involved, then choose the right tools.'],['Clarity in every decision','Make trade-offs visible so the project moves forward with purpose.'],['Design and engineering together','Treat the experience and its implementation as one connected system.'],['Useful beyond launch','Consider the people who will operate, maintain and improve what we build.']])}</div></section>
  <section class="section perspective-section"><div class="shell perspective-grid"><div>${eyebrow('WHY KLIROLABS',true)}<h2>Small details.<br>Important outcomes.</h2></div><div><p>We believe a great digital partnership is defined by thoughtful questions, honest planning and care in execution. That is the standard we want every Klirolabs project to meet.</p>${link('/process/','Explore our process','light-link')}</div></div></section>
  <section class="section related-section"><div class="shell">${sectionHead('EXPLORE','See where we can <em>help.</em>')}<div class="related-grid">${serviceLinks(['enterprise-web-development','custom-software-development','product-design-ux'])}</div></div></section>${callout('Let’s get to know your project.','Tell us where you are today and what you hope to change. We will help identify a useful way forward.')}`;
  return layout({path:'/about/',title:'About Klirolabs | Digital Design & Engineering',description:'Learn how Klirolabs approaches custom websites and software through business understanding, purposeful design and careful engineering.',main,kind:'about'});
}

function processPage() {
  const phases = [
    ['01','Discover','Understand the problem.','We learn about your goals, audiences, workflows, constraints and what success would mean.','Shared goals, priorities and an initial scope.'],
    ['02','Design','Make the important decisions visible.','We shape the information structure, journeys and interface before the full build.','Clear flows, design direction and validated assumptions.'],
    ['03','Build','Turn a plan into a working product.','We develop in useful stages, review the work and address quality throughout.','A working website or software product with documented decisions.'],
    ['04','Launch','Prepare for real use.','We review key journeys, content, performance and operational handover.','A coordinated release and a clear ownership plan.'],
    ['05','Improve','Learn and keep moving.','We use feedback and measurement to prioritize the next improvements.','An informed roadmap for ongoing value.']
  ];
  const main = `${hero({crumb:'Process',eyebrowText:'HOW WE WORK',title:'A clear path',accent:'from idea to impact.',intro:'Good projects move forward when the right decisions are made at the right time. Our process keeps business needs, user experience and engineering connected.',visual:'process'})}
  <section class="section process-detail"><div class="shell">${sectionHead('THE JOURNEY','Five stages. One shared <em>direction.</em>')}
  <div class="phase-list">${phases.map(([n,name,lead,body,output])=>`<article class="phase"><span>${n} /</span><div><h3>${name}</h3><strong>${lead}</strong></div><div><p>${body}</p><small>WHAT YOU TAKE FORWARD</small><b>${output}</b></div></article>`).join('')}</div></div></section>
  <section class="section tinted-section"><div class="shell">${sectionHead('WORKING TOGETHER','What keeps a project <em>healthy.</em>')}${issueCards([['Clear priorities','A shared view of the most important outcomes helps teams make better trade-offs.'],['Visible decisions','Design, scope and technical choices are easier to manage when their reasoning is explicit.'],['Useful feedback','Regular review keeps the work connected to the people who will use and own it.']])}</div></section>
  <section class="section related-section"><div class="shell">${sectionHead('START WHERE YOU ARE','The process fits the <em>challenge.</em>','A redesign, a new product and a modernization effort will need different levels of discovery and validation.')}<div class="related-grid">${serviceLinks(['enterprise-web-development','custom-software-development','software-modernization'])}</div></div></section>${callout('Ready to explore the first step?','You do not need a complete brief. Tell us what you are trying to change and we can begin from there.')}`;
  return layout({path:'/process/',title:'Our Design & Development Process | Klirolabs',description:'Discover the five-stage Klirolabs process for planning, designing, building, launching and improving websites and software.',main,kind:'process'});
}

function contactPage() {
  const main = `<section class="contact-hero"><div class="shell contact-layout"><div class="contact-copy"><div class="breadcrumb"><a href="/">Home</a><span>/</span><span>Contact</span></div>${eyebrow('LET’S BUILD SOMETHING',true)}<h1>Tell us what<br>you’re <em>building.</em></h1><p>Whether you have a detailed brief or the beginning of an idea, start with the challenge. We’ll take it from there.</p><a class="contact-address" href="mailto:hello@klirolabs.com">hello@klirolabs.com <span aria-hidden="true">↗</span></a><div class="contact-note"><span>✦</span> Websites. Software. The next important move.</div></div>
  <form id="contact-form" class="contact-form"><div class="form-heading"><span>PROJECT ENQUIRY</span><strong>Let’s start a conversation.</strong></div><div class="form-pair"><label>Your name <input name="name" autocomplete="name" required placeholder="Your name"></label><label>Work email <input name="email" type="email" autocomplete="email" required placeholder="you@company.com"></label></div><div class="form-pair"><label>Company <input name="company" autocomplete="organization" placeholder="Company name"></label><label>Project type <select name="service" required><option value="" disabled selected>Select a service</option>${services.map(item=>`<option>${esc(item.title)}</option>`).join('')}<option>Not sure yet</option></select></label></div><label>What are you looking to achieve? <textarea name="project" rows="5" required placeholder="Tell us about your goals, current challenges or the idea you want to explore."></textarea></label><button class="btn btn-orange" type="submit">Prepare enquiry <span aria-hidden="true">↗</span></button><p class="form-note">This prepares an email to hello@klirolabs.com in your email app. Review it there before sending.</p></form></div></section>
  <section class="section contact-extras"><div class="shell">${sectionHead('BEFORE WE TALK','A little context helps us start <em>well.</em>')}${issueCards([['The goal','What would a successful project make easier or better?'],['The starting point','Is this a new idea, an existing product or an urgent challenge?'],['The constraints','Any timing, systems or requirements we should understand early?']])}</div></section>`;
  return layout({path:'/contact/',title:'Contact Klirolabs | Discuss Your Project',description:'Discuss a custom website, software platform, e-commerce experience or modernization project with Klirolabs.',main,kind:'contact'});
}

const pages = [{path:'/',html:homePage()},...services.map(item=>({path:servicePath(item.slug),html:servicePage(item)})),...industries.map(item=>({path:industryPath(item.slug),html:industryPage(item)})),{path:'/case-studies/',html:casesPage()},{path:'/about/',html:aboutPage()},{path:'/process/',html:processPage()},{path:'/contact/',html:contactPage()}];
for (const page of pages) {
  const directory = join(root, page.path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), page.html, 'utf8');
}
await writeFile(join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(page=>`<url><loc>${origin}${page.path}</loc></url>`).join('')}</urlset>`, 'utf8');
await writeFile(join(root, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`, 'utf8');
console.log(`Built ${pages.length} static pages.`);
