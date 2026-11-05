export const phaseTwoServices = [
  {
    slug: 'customer-dealer-portal-development', title: 'Customer and dealer portal development', short: 'Give customers and channel partners a useful place to work.',
    seoTitle: 'Customer & Dealer Portal Development | Klirolabs', eyebrow: '07 / CONNECTED PORTALS',
    accent: 'Make every interaction easier.',
    intro: 'Replace scattered emails and disconnected tools with a secure portal shaped around the tasks your customers, dealers and teams actually need to complete.',
    description: 'Customer and dealer portal development for account access, product information, quotes, orders, service requests and connected business workflows.',
    problems: [
      ['Information is scattered', 'Customers and partners search through inboxes, spreadsheets and shared drives for current documents or order details.'],
      ['The same requests repeat', 'Your team manually answers routine questions about availability, pricing, status or support.'],
      ['Every account is different', 'Dealers, distributors and customers need different permissions, catalogues and actions.']
    ],
    deliverables: [
      ['Account and role design', 'Appropriate access for customers, dealers, administrators and internal teams.'],
      ['Self-service journeys', 'Useful flows for documents, enquiries, quotes, orders, cases or account information.'],
      ['Connected data', 'Planned integrations with CRM, ERP, product and order systems where reliable interfaces exist.'],
      ['Operational handover', 'Admin tools, testing and clear ownership for the people who will run the portal.']
    ],
    journey: [
      ['Map each audience', 'Identify what each account type should see, change and request.'],
      ['Release the core workflow', 'Start with one high-value task, such as document access, quote requests or order status.'],
      ['Connect and improve', 'Add dependable integrations and refine the portal with real usage.']
    ],
    approach: 'We begin with the relationship between your customers, channel partners and internal team. The portal design follows their permissions and work, while integration decisions follow the quality and ownership of your existing data.',
    considerations: ['Authentication and account lifecycle', 'Role-based access to sensitive information', 'Data accuracy and system ownership', 'Support and adoption after launch'],
    faqs: [
      ['What is the difference between a customer portal and a dealer portal?', 'A customer portal usually supports direct account tasks such as service, documents or order status. A dealer portal may add channel-specific catalogues, prices, quote flows, territory rules and partner resources. The right structure depends on your model.'],
      ['Can a portal connect to our ERP or CRM?', 'Potentially. We review available APIs, data quality, update frequency and access rules before defining what should sync and how failures will be handled.'],
      ['Can we launch without every integration?', 'Yes. A focused first release can support a useful workflow while more complex connections are planned and validated.']
    ], related: ['business-process-automation', 'custom-software-development'], industries: ['manufacturing', 'retail-ecommerce']
  },
  {
    slug: 'business-process-automation', title: 'Business process automation', short: 'Reduce repetitive work and make handoffs more reliable.',
    seoTitle: 'Business Process Automation Services | Klirolabs', eyebrow: '08 / WORKFLOW AUTOMATION',
    accent: 'Give your team time back.',
    intro: 'Turn manual handoffs, repeated data entry and unclear approvals into dependable workflows that support the people doing the work.',
    description: 'Business process automation and internal operations platforms designed around approvals, data flow, reporting and existing systems.',
    problems: [
      ['Work is copied between tools', 'Teams re-enter the same information and spend time checking which version is correct.'],
      ['Approvals disappear into inboxes', 'Requests stall because ownership, status and next steps are hard to see.'],
      ['Exceptions are invisible', 'A process looks fine until an unusual order, account or approval exposes a gap.']
    ],
    deliverables: [
      ['Workflow discovery', 'A map of triggers, decisions, exceptions, owners and the data each step needs.'],
      ['Internal operations platforms', 'Purpose-built interfaces for requests, approvals, task queues and reporting.'],
      ['System connections', 'Carefully scoped integrations that reduce duplicate entry and keep records in sync.'],
      ['Controls and visibility', 'Permissions, audit history and useful status views where the process requires them.']
    ],
    journey: [
      ['Measure the current process', 'Find the delays, rework and errors worth addressing first.'],
      ['Design for exceptions', 'Define what should happen when information is missing or a request needs human judgment.'],
      ['Automate in stages', 'Release a narrow workflow, validate it with users and expand when the handoffs are reliable.']
    ],
    approach: 'We do not automate a broken process without understanding it. We clarify where judgment should remain with people, which system owns each record and what a safe exception path looks like.',
    considerations: ['System of record and data quality', 'Human review points', 'Error handling and recovery', 'Permissions and audit needs'],
    faqs: [
      ['Do we need to replace our current software?', 'Usually not. An internal platform or integration can connect existing tools, but the best option depends on their interfaces and the quality of the data they hold.'],
      ['Which process should we automate first?', 'Start with a frequent, well-understood process that has measurable delays or errors and a clear owner. We assess the exceptions before committing to automation.'],
      ['Can people still approve or change a decision?', 'Yes. Many useful automations prepare information and route work while leaving consequential decisions with the right person.']
    ], related: ['custom-software-development', 'customer-dealer-portal-development'], industries: ['manufacturing', 'retail-ecommerce']
  },
  {
    slug: 'mvp-development', title: 'MVP development', short: 'Launch a focused first product and learn from real use.',
    seoTitle: 'MVP Development Services | Klirolabs', eyebrow: '09 / PRODUCT LAUNCH',
    accent: 'Learn sooner. Build smarter.',
    intro: 'Turn a product idea into a useful first release with a clear audience, essential workflow and a plan to learn what should come next.',
    description: 'MVP development for startups and established businesses: product discovery, UX, a focused first release and a practical roadmap for iteration.',
    problems: [
      ['The idea is too broad', 'Many possible features compete for a first release without a clear user problem.'],
      ['Assumptions are untested', 'The team needs to learn whether people can and will use the proposed workflow.'],
      ['Speed threatens quality', 'A rushed build may be hard to operate, measure or extend.']
    ],
    deliverables: [
      ['Product definition', 'A specific audience, core problem, success signals and a prioritized first scope.'],
      ['UX and prototype', 'The essential journey made tangible for review before full development.'],
      ['First usable release', 'A working product with the minimum capabilities needed to deliver real value.'],
      ['Learning plan', 'Feedback, measurement and an informed backlog for the next iteration.']
    ],
    journey: [
      ['Define the question', 'Decide what the first release needs to prove or disprove.'],
      ['Build the smallest useful flow', 'Include the complete core task, not an oversized list of partial features.'],
      ['Observe and decide', 'Use feedback and usage to keep, change or remove assumptions.']
    ],
    approach: 'An MVP is a learning tool, but it must still work for the people who use it. We focus scope around a complete user task and make trade-offs about reliability, security and future change explicit.',
    considerations: ['Who the first users are', 'One complete core workflow', 'Data and security needs', 'What evidence will guide the next release'],
    faqs: [
      ['How is an MVP different from a prototype?', 'A prototype helps test an experience or idea before production. An MVP is a usable first product released to real users so the team can learn from actual behavior.'],
      ['How many features should the first release include?', 'Enough to complete the essential task well. The scope depends on the user problem, integrations and what you need to learn.'],
      ['Can the MVP grow into a larger product?', 'Yes, when architecture and handover are planned for likely next steps without building every future feature up front.']
    ], related: ['product-design-ux', 'custom-software-development'], industries: ['saas-technology']
  },
  {
    slug: 'website-redesign', title: 'Website redesign', short: 'Improve the experience while protecting what already works.',
    seoTitle: 'Website Redesign Services | Klirolabs', eyebrow: '10 / WEBSITE EVOLUTION',
    accent: 'Make the next version count.',
    intro: 'Refresh a website that no longer reflects your business, serves your buyers or supports the way your team publishes and measures content.',
    description: 'Website redesign services covering content architecture, UX, visual design, development, SEO migration and launch planning.',
    problems: [
      ['The story is outdated', 'Your services and positioning have moved on, while the website still presents an older business.'],
      ['Visitors cannot find a path', 'Navigation, content and calls to action make important decisions harder than they should be.'],
      ['Publishing is a struggle', 'The current site is slow to update, inconsistent or difficult to measure.']
    ],
    deliverables: [
      ['Current-site audit', 'Review of content, user journeys, technical health and search performance.'],
      ['New structure and design', 'Clear information architecture and responsive visual patterns aligned with your brand.'],
      ['Rebuild and migration', 'Editable templates, integrations and a deliberate content migration plan.'],
      ['Launch protection', 'Redirects, metadata, analytics checks and quality review across priority pages.']
    ],
    journey: [
      ['Keep what performs', 'Find valuable content, search entry points and conversion paths worth preserving.'],
      ['Fix the journey', 'Restructure pages around audience questions and the next action.'],
      ['Launch carefully', 'Check redirects, forms, tracking, mobile use and content before switching over.']
    ],
    approach: 'A redesign is more than a new visual layer. We connect business positioning, content, search structure and publishing needs so the new site solves the causes of friction.',
    considerations: ['Existing rankings and redirects', 'Content ownership and migration', 'Accessibility and performance', 'CMS workflows and measurement'],
    faqs: [
      ['Will a redesign hurt our search rankings?', 'A redesign can affect visibility if URLs, content or internal links change without a plan. We map valuable pages, prepare redirects and check technical SEO before and after launch. Rankings cannot be guaranteed.'],
      ['Can you keep our current brand?', 'Yes. We can improve structure and usability within an established identity or work with a broader brand refresh.'],
      ['Do we need to rewrite every page?', 'Not necessarily. An audit helps identify which pages to retain, improve, consolidate or retire based on their purpose and performance.']
    ], related: ['enterprise-web-development', 'product-design-ux'], industries: ['retail-ecommerce', 'saas-technology']
  },
  {
    slug: 'dedicated-development-team', title: 'Dedicated development team', short: 'Add focused design and engineering capacity to your roadmap.',
    seoTitle: 'Dedicated Development Team | Klirolabs', eyebrow: '11 / TEAM ENGAGEMENT',
    accent: 'Build with shared ownership.',
    intro: 'Bring in a focused delivery team to move an important product or platform forward with clear goals, working rhythms and ownership.',
    description: 'Dedicated development team engagement for ongoing website and software delivery, with defined roles, collaboration and transparent priorities.',
    problems: [
      ['The roadmap outpaces capacity', 'Important work waits because your internal team is already committed.'],
      ['Handoffs slow delivery', 'Requirements, design and engineering decisions move through too many disconnected conversations.'],
      ['Ownership is unclear', 'A long-running engagement needs priorities, decision makers and a practical way to measure progress.']
    ],
    deliverables: [
      ['Engagement design', 'Define the skills, responsibilities and collaboration model around the work.'],
      ['Shared delivery cadence', 'Regular planning, reviews and visible priorities with your stakeholders.'],
      ['Product and engineering work', 'Design, development and quality work tied to an agreed roadmap.'],
      ['Knowledge continuity', 'Documented decisions and handover so the product remains understandable.']
    ],
    journey: [
      ['Agree on the mission', 'Clarify outcomes, scope, decision rights and the work already in progress.'],
      ['Shape the team', 'Match roles and working cadence to the needs of the product.'],
      ['Review and adapt', 'Assess delivery, quality and changing priorities together at regular intervals.']
    ],
    approach: 'The value of a dedicated team depends on integration with your people and decisions. We establish a clear product owner, a shared backlog and a practical review rhythm before scaling the engagement.',
    considerations: ['Decision maker and product ownership', 'Access and onboarding', 'Definition of done and quality', 'Documentation and continuity'],
    faqs: [
      ['Is this the same as hiring individual contractors?', 'A dedicated team is organized around a shared delivery goal and working rhythm. The exact roles and commercial arrangement should be defined for your project.'],
      ['Can the team work with our employees?', 'Yes. We would agree on responsibilities, communication, review points and access so work can move through one clear process.'],
      ['How do we know what is being delivered?', 'We recommend visible priorities, regular demonstrations and agreed measures of progress and quality.']
    ], related: ['custom-software-development', 'maintenance-optimization'], industries: ['saas-technology', 'manufacturing']
  },
  {
    slug: 'software-project-rescue', title: 'Software project rescue', short: 'Find a credible path forward when delivery has stalled.',
    seoTitle: 'Software Project Rescue & Recovery | Klirolabs', eyebrow: '12 / PROJECT RECOVERY',
    accent: 'Get clarity before the next move.',
    intro: 'When a build is late, unstable or difficult to finish, start with an honest assessment of the product, code, dependencies and decisions still ahead.',
    description: 'Software project rescue and recovery: assess a stalled build, stabilize critical issues, reset scope and plan a practical path to launch or handover.',
    problems: [
      ['The finish line keeps moving', 'Scope and priorities have changed without a clear view of what is complete.'],
      ['Confidence has eroded', 'Defects, missing tests or fragile integrations make every release feel risky.'],
      ['Knowledge is missing', 'The original team has changed or important product and technical decisions are undocumented.']
    ],
    deliverables: [
      ['Independent assessment', 'Review of product goals, codebase, environments, dependencies and delivery status.'],
      ['Stabilization priorities', 'A ranked view of critical defects, security concerns and operational risks.'],
      ['Recovery plan', 'A realistic scope, sequence and decision points for the next release.'],
      ['Targeted delivery support', 'Focused implementation, testing and handover where the assessment supports it.']
    ],
    journey: [
      ['Secure the current state', 'Confirm access, backups, ownership and what is running today.'],
      ['Separate fact from assumption', 'Test key journeys and inspect the work against the remaining scope.'],
      ['Choose a recovery route', 'Stabilize, narrow, refactor or rebuild only after the trade-offs are visible.']
    ],
    approach: 'A rescue should begin with evidence rather than a promise to finish by an arbitrary date. We identify what works, what is risky and what is missing, then recommend a staged plan the stakeholders can evaluate.',
    considerations: ['Access to source and environments', 'Data and backup integrity', 'Critical user journeys', 'Stakeholder decisions and handover'],
    faqs: [
      ['Do you need to rebuild the whole product?', 'Not always. The assessment may support targeted stabilization or a smaller release. A rebuild is considered when the current foundation cannot responsibly support the goal.'],
      ['Can you take over code written by another team?', 'Potentially. We first review the repository, deployment process, documentation, tests and access so we can describe the risks accurately.'],
      ['Can you guarantee a launch date before the assessment?', 'No responsible recovery plan should promise a date without understanding the remaining work and critical risks. We can establish a credible plan after the assessment.']
    ], related: ['software-modernization', 'dedicated-development-team'], industries: ['saas-technology', 'manufacturing']
  }
];
