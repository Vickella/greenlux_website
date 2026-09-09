(function () {
  'use strict';

  const page = document.body.dataset.page || 'home';
  const imagePath = 'assets/images/';
  const phone = '263788997670';
  const openWeatherKey = 'bfd7d15e4d142c6c9e49e6d317bbca00';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent('Hello GreenLux. I would like assistance with an energy or electrical project.')}`;
  const navItems = [
    ['Home', 'index.html', 'home'],
    ['Services', 'services.html', 'services'],
    ['Solutions', 'programs.html', 'solutions'],
    ['Projects', 'gallery.html', 'projects'],
    ['Energy Planning', 'energy-planning.html', 'planning'],
    ['About', 'about.html', 'about'],
    ['Contact', 'contact.html', 'contact']
  ];
  const services = [
    ['Solar energy', 'Load-led solar systems for homes, workplaces, productive farms and industrial facilities, with panels, inverters and storage designed as one system.', 'solar-installation-technician.webp'],
    ['Electrical engineering', 'Distribution, protection, wiring, lighting and upgrades planned for safe operation, maintainability and the demands of your property.', 'electrical-engineering-panel.webp'],
    ['Industrial automation', 'Control panels, motor control, sensors and electrical integration that support dependable, efficient production environments.', 'industrial-automation.webp'],
    ['Borehole solutions', 'Borehole drilling, pump selection and power integration shaped around depth, water demand and the realities of the site.', 'borehole-drilling.webp'],
    ['Plumbing and water', 'Geysers, storage, PVC and poly pipework, pumping and distribution brought together into a practical water system.', 'geyser-plumbing-installation.webp'],
    ['Maintenance', 'Inspection, fault-finding, preventive care and upgrades that reduce downtime and help installed equipment perform for longer.', 'solar-maintenance-technician.webp'],
    ['House tubing and wiring', 'Neat, compliant domestic tubing, circuits, distribution and lighting planned around how the finished home will be used.', 'electrical-engineering-panel.webp'],
    ['Hot-water systems', 'Electric and solar geyser installations, controls and plumbing designed for dependable, efficient everyday hot water.', 'geyser-plumbing-installation.webp'],
    ['Solar system design', 'Load assessment, generation modelling, inverter sizing and battery autonomy planning before equipment is specified.', 'solar-inverter-battery-system.webp']
  ];

  function header() {
    return `<header class="site-header">
      <div class="container nav-wrap">
        <a class="logo" href="index.html" aria-label="GreenLux Electrical Engineering home">
          <img src="${imagePath}logo-greenlux-transparent.png" alt="GreenLux Electrical Engineering">
        </a>
        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-navigation"><span></span></button>
        <nav class="nav-links" id="primary-navigation" aria-label="Primary navigation">
          ${navItems.map(item => `<a class="${page === item[2] ? 'active' : ''} ${item[2] === 'contact' ? 'nav-cta' : ''}" href="${item[1]}"${page === item[2] ? ' aria-current="page"' : ''}>${item[0]}</a>`).join('')}
        </nav>
      </div>
    </header>`;
  }

  function footer() {
    return `<footer class="site-footer" id="site-footer">
      <div class="footer-main">
        <div class="container footer-grid">
          <div>
            <a class="logo" href="index.html" aria-label="GreenLux home"><img src="${imagePath}logo-greenlux-transparent.png" alt="GreenLux Electrical Engineering"></a>
            <p class="brand-copy">Integrated solar, electrical and water infrastructure engineered for the way Zimbabwean homes, enterprises and farms really operate.</p>
          </div>
          <div><h3>Explore</h3><nav class="footer-links" aria-label="Footer navigation"><a href="about.html">About GreenLux</a><a href="services.html">Services</a><a href="programs.html">Solutions</a><a href="gallery.html">Projects</a><a href="energy-planning.html">Energy planning</a></nav></div>
          <div><h3>Core expertise</h3><nav class="footer-links" aria-label="Services"><a href="contact.html?service=Solar%20energy">Solar energy</a><a href="contact.html?service=Electrical%20engineering">Electrical engineering</a><a href="contact.html?service=Industrial%20automation">Industrial automation</a><a href="contact.html?service=Borehole%20solutions">Boreholes and water</a><a href="contact.html?service=Maintenance">Maintenance</a></nav></div>
          <div><h3>Start a conversation</h3><p>Call or WhatsApp</p><p><a class="footer-contact" href="tel:+263788997670">078 899 7670</a></p><a class="btn btn-primary" href="contact.html">Request a site visit</a></div>
        </div>
      </div>
      <div class="container footer-bottom"><span class="footer-copyright">&copy; 2026 GreenLux Electrical Engineering (Pvt) Ltd</span><span class="footer-credit">Designed by <a href="https://veritycore.co.zw" target="_blank" rel="noopener noreferrer">VerityCore Consultancy</a></span></div>
    </footer>
    <a class="whatsapp" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" aria-label="Chat with GreenLux on WhatsApp" title="Chat with GreenLux">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.8 7.3L3.5 20l1.2-4A8.5 8.5 0 1 1 20.5 11.5Z"></path><path d="M8.5 8.5c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.5.6c.8 1.5 1.8 2.4 3.3 3.1l.6-.5c.2-.2.4-.2.7-.1l1.3.6c.3.1.4.3.4.5v.5c0 .3-.1.6-.5.8-.5.2-1.1.3-1.7.1-2.1-.6-4.9-3.3-5.9-5.4-.3-.7-.3-1.4 0-2.2Z"></path></svg>
    </a>`;
  }

  function serviceCards(limit = services.length) {
    return `<div class="grid grid-3">${services.slice(0, limit).map((service, index) => `<article class="card service-card">
      <img class="service-image" loading="lazy" src="${imagePath + service[2]}" alt="${service[0]} capability">
      <div class="service-heading"><span class="service-index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><h3>${service[0]}</h3></div>
      <p>${service[1]}</p><a class="text-link" href="contact.html?service=${encodeURIComponent(service[0])}">Discuss this service</a>
    </article>`).join('')}</div>`;
  }

  function pageHero(eyebrow, title, copy, photo, actions = '', position = 'center') {
    return `<section class="page-hero" style="--hero-position:${position}"><img src="${imagePath + photo}" alt="" aria-hidden="true"><div class="container"><div class="hero-copy"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${copy}</p>${actions}</div></div></section>`;
  }

  function trustStrip() {
    return `<aside class="trust-strip" aria-label="GreenLux approach"><div class="container trust-grid">
      <div><span class="eyebrow">One accountable partner</span><strong>Designed as a complete system</strong></div>
      <div><strong>Load-led</strong><span>Specifications shaped by real demand</span></div>
      <div><strong>Site-aware</strong><span>Decisions grounded in actual conditions</span></div>
      <div><strong>Supported</strong><span>Commissioning, maintenance and upgrades</span></div>
    </div></aside>`;
  }

  function home() {
    return `<section class="hero" style="--hero-position:65% center"><img src="${imagePath}solar-installation-technician.webp" alt="GreenLux technician working on a solar installation"><div class="container"><div class="hero-copy"><span class="eyebrow">GreenLux Electrical Engineering</span><h1>Power that performs. <span>Engineering that lasts.</span></h1><p>We design and deliver integrated solar, electrical, automation and water systems for Zimbabwean homes, businesses, farms and industrial operations.</p><div class="actions"><a class="btn btn-primary" href="contact.html">Request a site assessment</a><a class="btn btn-light" href="energy-planning.html">Plan your energy system</a></div><div class="hero-note"><span class="chip">Solar and storage</span><span class="chip">Electrical</span><span class="chip">Automation</span><span class="chip">Boreholes</span><span class="chip">Water systems</span></div></div></div></section>
      ${trustStrip()}
      <section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Integrated capability</span><h2>One engineering conversation. Every critical connection.</h2><p>A reliable installation is more than a collection of components. GreenLux considers generation, protection, controls, water movement and future expansion together—so every part supports the whole.</p></div>${serviceCards(6)}<div class="actions"><a class="btn btn-dark" href="services.html">Explore all services</a></div></div></section>
      <section class="section band"><div class="container split"><div><span class="eyebrow">Built around reality</span><h2>First understand the site. Then engineer the answer.</h2><p>We begin with the load, operating hours, property conditions and priorities of the people who depend on the system. That groundwork guides sensible equipment choices, cleaner installation and support after handover.</p><div class="mini-list"><span>Practical designs shaped around present and future demand</span><span>Clear scope before equipment selection begins</span><span>Testing, commissioning and usable handover information</span></div><a class="text-link" href="about.html">Discover the GreenLux approach</a></div><div class="media"><img loading="lazy" src="${imagePath}engineering-site-planning.webp" alt="Engineering planning being completed on site"><span class="media-caption">Assessment and design before installation</span></div></div></section>
      <section class="section section-soft"><div class="container"><div class="section-head"><span class="eyebrow">Our delivery path</span><h2>Clarity from first conversation to reliable operation.</h2><p>A disciplined process reduces surprises and keeps the system aligned with what the site actually needs.</p></div><div class="grid grid-4 process">${[
        ['Listen and assess', 'We define the problem, inspect the environment and document the load or water requirement.'],
        ['Engineer and specify', 'We shape the architecture, size key components and agree a clear project scope.'],
        ['Install and integrate', 'The system is installed carefully, with each electrical and mechanical interface considered.'],
        ['Test and support', 'We commission, explain operation and remain available for maintenance and future upgrades.']
      ].map(item => `<article class="card"><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('')}</div></div></section>
      <section class="section"><div class="container split split-wide"><div class="media"><img loading="lazy" src="${imagePath}solar-irrigation-water.webp" alt="Solar-powered irrigation and water infrastructure"><span class="media-caption">Energy and water working as one productive system</span></div><div><span class="eyebrow">Solutions by setting</span><h2>From family resilience to productive infrastructure.</h2><p>A home needs quiet continuity. A shop needs uptime. A farm needs dependable pumping, and an industrial site needs safe control. We adapt the engineering to the operating context without compromising the fundamentals.</p><div class="actions"><a class="btn btn-dark" href="programs.html">Explore tailored solutions</a><a class="btn" href="gallery.html">View capabilities</a></div></div></div></section>
      <section class="section band"><div class="container statement"><span class="eyebrow">Begin with the challenge</span><h2>Tell us what must keep running. We will help map the infrastructure behind it.</h2><a class="btn btn-primary" href="contact.html">Start your project conversation</a></div></section>`;
  }

  function servicesPage() {
    return pageHero('Capabilities', 'Engineering expertise across the <span>whole system.</span>', 'From generation and storage to distribution, control and water movement, GreenLux brings connected disciplines into one practical project scope.', 'electrical-engineering-panel.webp', '<div class="actions"><a class="btn btn-primary" href="#services">Explore services</a><a class="btn btn-light" href="contact.html">Discuss your project</a></div>', '58% center') + trustStrip() +
      `<section class="section" id="services"><div class="container"><div class="section-head"><span class="eyebrow">What we deliver</span><h2>Capability where energy, infrastructure and daily life meet.</h2><p>Each service can stand alone or become part of a larger integrated solution. The scope is always shaped around your site, priorities and operating conditions.</p></div>${serviceCards()}</div></section>
      <section class="section band"><div class="container split"><div><span class="eyebrow">Solar engineering</span><h2>Design the energy system before selecting the boxes.</h2><p>Good solar begins with a credible view of the load. We assess consumption, essential circuits, autonomy expectations, available roof or ground area, likely growth and the balance between capital cost and resilience.</p><div class="mini-list"><span>Residential, commercial, industrial and irrigation applications</span><span>Inverter, battery and photovoltaic array sizing</span><span>Backup integration, protection, monitoring and upgrades</span></div><a class="btn btn-primary" href="energy-planning.html">Use the planning tools</a></div><div class="media"><img loading="lazy" src="${imagePath}solar-inverter-battery-system.webp" alt="Integrated solar inverter and battery system"><span class="media-caption">Storage, conversion and protection designed together</span></div></div></section>`;
  }

  function about() {
    return pageHero('About GreenLux', 'Local understanding. <span>Long-term thinking.</span>', 'GreenLux is a Zimbabwean electrical engineering company working toward a more dependable, efficient and sustainable energy future across the region.', 'engineering-site-planning.webp', '<div class="actions"><a class="btn btn-primary" href="contact.html">Talk to GreenLux</a></div>', '58% center') +
      `<section class="section"><div class="container split"><div><span class="eyebrow">Our point of view</span><h2>Reliable infrastructure begins with responsible engineering.</h2><p>We believe clients should understand what they are investing in and why it fits. That means starting with the requirement, considering the full operating environment and resisting shortcuts that transfer risk into the future.</p><p>Our work spans renewable power, electrical distribution, automation and water systems. Across those disciplines, the goal stays constant: infrastructure that is sensible to operate, maintain and expand.</p><div class="quote-block">“Not simply equipment installed, but a system understood.”</div></div><div class="media"><img loading="lazy" src="${imagePath}commercial-solar-rooftop.webp" alt="Commercial rooftop solar installation"><span class="media-caption">Engineering for useful, durable performance</span></div></div></section>
      <section class="section section-soft"><div class="container"><div class="grid grid-2"><article class="card"><span class="eyebrow">Mission</span><h3>Empower people and operations with dependable infrastructure.</h3><p>To engineer safe, efficient and sustainable energy, electrical and water solutions for homes, commerce, agriculture and industry.</p></article><article class="card"><span class="eyebrow">Vision</span><h3>Help shape a more resilient energy future for Africa.</h3><p>To become a trusted regional contributor to intelligently engineered renewable energy and essential infrastructure.</p></article></div></div></section>
      <section class="section band"><div class="container statement"><span class="eyebrow">Values in practice</span><h2>Technical excellence. Safety without compromise. Honest advice. Reliable support. Progress with purpose.</h2><p>These are not decorative words. They guide how we assess, specify, install, communicate and stand behind the work.</p></div></section>`;
  }

  function solutions() {
    const contexts = [
      ['Residential', 'Quiet confidence at home', 'Backup power, solar generation, safe wiring, lighting and water systems aligned with everyday routines and essential household loads.', 'residential-solar-home.webp'],
      ['Commercial', 'Continuity that protects trade', 'Solar, storage and electrical infrastructure focused on operating hours, critical equipment, energy cost and a professional environment.', 'commercial-solar-rooftop.webp'],
      ['Industrial', 'Control for demanding operations', 'Automation, panels, distribution and maintenance shaped around safety, uptime, service access and evolving production needs.', 'industrial-automation.webp'],
      ['Agriculture and irrigation', 'Energy that keeps production moving', 'Boreholes, solar pumping, storage and distribution planned around water demand, field conditions and seasonal operation.', 'solar-irrigation-water.webp']
    ];
    return pageHero('Solutions by setting', 'Engineering matched to <span>how you operate.</span>', 'The right solution changes with the site. We translate different loads, risks and routines into infrastructure that feels purpose-built.', 'solar-irrigation-water.webp', '<div class="actions"><a class="btn btn-primary" href="contact.html">Discuss your site</a></div>', '62% center') +
      `<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Four operating contexts</span><h2>Different environments. The same engineering discipline.</h2><p>We consider what must run, when it must run, the consequence of interruption and how the system will be looked after over time.</p></div><div class="grid grid-2">${contexts.map((item, index) => `<article class="card solution-card"><img loading="lazy" src="${imagePath + item[3]}" alt="${item[0]} energy solution"><div><span class="eyebrow">0${index + 1} / ${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p><a class="text-link" href="contact.html?service=${encodeURIComponent(item[0] + ' solution')}">Discuss your requirements</a></div></article>`).join('')}</div></div></section>
      <section class="section band"><div class="container statement"><span class="eyebrow">A solution, not a bundle</span><h2>Generation, storage, protection, controls and water movement should work together—not compete for attention.</h2><a class="btn btn-primary" href="contact.html">Arrange an assessment</a></div></section>`;
  }

  function projects() {
    const items = [
      ['Solar installation', 'Solar', 'solar-installation-technician.webp', 'On-site installation capability, with careful attention to placement, connections and system integration.'],
      ['Distribution and panels', 'Electrical', 'electrical-engineering-panel.webp', 'Organised distribution, protection and panel work for safer, more serviceable electrical infrastructure.'],
      ['Industrial automation', 'Industrial', 'industrial-automation.webp', 'Controls and industrial electrical capability for operations that depend on consistent performance.'],
      ['Borehole infrastructure', 'Water access', 'borehole-drilling.webp', 'Drilling and borehole development considered as the first link in a dependable water system.'],
      ['Solar water pumping', 'Water systems', 'water-storage-solar-pumping.webp', 'Solar pumping and storage capability for useful water availability beyond the grid.'],
      ['Inspection and care', 'Maintenance', 'solar-maintenance-technician.webp', 'Technical inspection, fault-finding and maintenance that protect performance after installation.']
    ];
    return pageHero('Projects and capabilities', 'See the disciplines behind <span>dependable systems.</span>', 'A closer look at the kinds of solar, electrical, industrial and water infrastructure GreenLux is equipped to plan, install and maintain.', 'solar-maintenance-technician.webp', '<div class="actions"><a class="btn btn-primary" href="contact.html">Discuss your project</a></div>', '64% center') +
      `<section class="section gallery-section"><div class="container"><div class="section-head"><span class="eyebrow">Capability portfolio</span><h2>Practical work across connected systems.</h2><p>The supplied imagery is presented as a clear view of GreenLux capability—not as invented client case studies or unsupported performance claims.</p></div><div class="grid grid-3">${items.map(item => `<article class="card gallery-card"><img loading="lazy" src="${imagePath + item[2]}" alt="GreenLux ${item[0]}"><div><span class="eyebrow">${item[1]}</span><h3>${item[0]}</h3><p>${item[3]}</p></div></article>`).join('')}</div></div></section>
      <section class="section section-soft project-cta"><div class="container split"><div><span class="eyebrow">Your project starts here</span><h2>Bring the site, load and ambition into one conversation.</h2><p>Whether the requirement is a focused repair or a new integrated system, an informed first assessment is the best place to begin.</p><a class="btn btn-dark" href="contact.html">Request a site visit</a></div><div class="media"><img loading="lazy" src="${imagePath}engineering-site-planning.webp" alt="Planning an engineering project on site"></div></div></section>`;
  }

  function contact() {
    return pageHero('Contact GreenLux', 'Let us understand what <span>needs to work.</span>', 'Tell us what you need to power, control, move or protect. We will help identify the next sensible engineering step.', 'engineering-site-planning.webp', '<div class="actions"><a class="btn btn-primary" href="tel:+263788997670">Call 078 899 7670</a></div>', '60% center') +
      `<section class="section"><div class="container split split-wide"><form class="tool" id="contact-form"><span class="eyebrow">Project enquiry</span><h2>Request a site visit.</h2><p>Share the essentials below. Your message will open in WhatsApp for you to review and send.</p><div class="form-grid">
        <div class="field"><label for="name">Full name</label><input id="name" name="name" autocomplete="name" required></div>
        <div class="field"><label for="phone">Phone number</label><input id="phone" name="phone" type="tel" autocomplete="tel" required></div>
        <div class="field"><label for="service">Service interest</label><select id="service" name="service">${services.map(service => `<option>${service[0]}</option>`).join('')}</select></div>
        <div class="field"><label for="location">Project location</label><input id="location" name="location" autocomplete="address-level2" placeholder="e.g. Harare"></div>
        <div class="field full"><label for="message">What do you need help with?</label><textarea id="message" name="message" placeholder="Tell us about the site, current challenge and what you need to keep running." required></textarea></div>
        <div class="full"><button class="btn btn-primary" type="submit">Prepare WhatsApp enquiry</button></div>
      </div><p id="contact-status" class="notice" hidden>Your message is ready in WhatsApp. Review it before sending.</p></form>
      <div class="stack"><article class="card"><span class="eyebrow">Direct contact</span><h3><a href="tel:+263788997670">078 899 7670</a></h3><p>Call or WhatsApp GreenLux for project discussions, troubleshooting and site-assessment enquiries.</p><a class="btn btn-dark" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></article><article class="card"><span class="eyebrow">What happens next</span><h3>A practical first response.</h3><p>We review the requirement, clarify your location and operating needs, then recommend the right conversation, information request or site visit.</p></article><article class="card"><span class="eyebrow">Helpful details</span><h3>Make the first discussion useful.</h3><p>Where possible, include your recent electricity use, equipment loads, desired backup time, site location and a few clear photographs.</p></article></div></div></section>`;
  }

  function planning() {
    return pageHero('Energy planning', 'Make the first estimate <span>more informed.</span>', 'Use live five-day weather data and transparent planning assumptions to explore solar production, system size, savings and simple payback before requesting an engineered assessment.', 'solar-inverter-battery-system.webp', '<div class="actions"><a class="btn btn-primary" href="contact.html">Request a solar assessment</a></div>', '62% center') +
      `<section class="section"><div class="container grid grid-2">
        <form class="tool" id="forecast-form"><span class="eyebrow">Live tool 01</span><h2>Solar energy forecast.</h2><p>Estimate five days of production from OpenWeather cloud, rain and temperature forecast data.</p><div class="field"><label for="forecast-location">Town or city</label><input id="forecast-location" name="location" value="Harare, Zimbabwe" placeholder="Harare, Zimbabwe" required></div><div class="field"><label for="system-size">Solar array size (kW)</label><input id="system-size" name="system-size" type="number" min="0.1" max="1000" step="0.1" placeholder="5" required></div><button class="btn btn-primary" type="submit">Get live forecast</button><div id="forecast-result" aria-live="polite"></div></form>
        <form class="tool" id="roi-form"><span class="eyebrow">Planning tool 02</span><h2>Solar ROI and savings.</h2><p>Start with your bill or monthly consumption, then refine the assumptions to explore a planning scenario.</p><div class="field"><label for="roi-mode">Input mode</label><select id="roi-mode"><option value="bill">Monthly electricity bill (USD)</option><option value="consumption">Monthly consumption (kWh)</option></select></div><div class="field"><label for="roi-input">Monthly value</label><input id="roi-input" type="number" min="0.01" step="0.01" placeholder="150" required></div><div class="field"><label for="tariff">Tariff (USD/kWh)</label><input id="tariff" type="number" min="0.001" step="0.001" value="0.25" required></div><details><summary><strong>Advanced planning assumptions</strong></summary><div class="stack" style="padding-bottom:18px"><div class="field"><label for="sun-hours">Average peak sun hours</label><input id="sun-hours" type="number" min="1" max="10" step="0.1" value="4.5"></div><div class="field"><label for="cost-kw">Installed cost per kW (USD)</label><input id="cost-kw" type="number" min="1" step="1" value="1200"></div><div class="field"><label for="offset">Expected bill offset (%)</label><input id="offset" type="number" min="1" max="100" step="1" value="90"></div></div></details><button class="btn btn-primary" type="submit">Calculate planning estimate</button><div id="roi-result" aria-live="polite"></div></form>
      </div></section><section class="section section-soft"><div class="container"><article class="card"><span class="eyebrow">Read estimates carefully</span><h3>Planning tools narrow the questions. A site assessment makes the decision.</h3><p>Actual system requirements, installed costs, tariffs, solar yield, equipment performance and savings vary with usage profile, orientation, shading, temperature, dust, weather and site conditions. These results are not a quotation or performance guarantee.</p><div class="actions"><a class="btn btn-dark" href="contact.html">Request an accurate assessment</a><a class="btn" href="services.html">Explore solar engineering</a></div></article></div></section>`;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[character]));
  }

  async function loadForecast(location, systemSize, output) {
    output.innerHTML = '<div class="result" aria-busy="true">Finding the location and loading its five-day weather forecast…</div>';
    const geocodeResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(location)}&limit=1&appid=${openWeatherKey}`);
    if (!geocodeResponse.ok) throw new Error(geocodeResponse.status === 401 ? 'The weather service could not authorise this request. Please contact GreenLux.' : 'The weather service is temporarily unavailable. Please try again.');
    const places = await geocodeResponse.json();
    if (!places.length) throw new Error('We could not find that location. Try a nearby town and include the country.');
    const place = places[0];
    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${place.lat}&lon=${place.lon}&units=metric&appid=${openWeatherKey}`);
    if (!forecastResponse.ok) throw new Error('Forecast data is unavailable for that location right now. Please try again shortly.');
    const forecast = await forecastResponse.json();
    const timezoneOffset = forecast.city.timezone || 0;
    const grouped = new Map();
    forecast.list.forEach(entry => {
      const date = new Date((entry.dt + timezoneOffset) * 1000).toISOString().slice(0, 10);
      if (!grouped.has(date)) grouped.set(date, []);
      grouped.get(date).push(entry);
    });
    const days = Array.from(grouped.entries()).slice(0, 5).map(([date, entries]) => {
      const avgCloud = entries.reduce((sum, item) => sum + item.clouds.all, 0) / entries.length;
      const rain = entries.reduce((sum, item) => sum + ((item.rain && item.rain['3h']) || 0), 0);
      const temperatures = entries.map(item => item.main.temp);
      const peakSunHours = Math.max(1.2, 5.8 * (1 - avgCloud * .0065) * (rain > 5 ? .82 : 1));
      return {
        date,
        avgCloud,
        rain,
        low: Math.min(...temperatures),
        high: Math.max(...temperatures),
        energy: systemSize * peakSunHours * .78
      };
    });
    const total = days.reduce((sum, day) => sum + day.energy, 0);
    const placeName = [place.name, place.state, place.country].filter(Boolean).join(', ');
    output.innerHTML = `<div class="result"><div class="result-title">Five-day estimate for ${escapeHtml(placeName)}</div><div class="result-grid">${days.map(day => `<div class="metric"><small>${new Intl.DateTimeFormat('en-ZA', {weekday:'short', day:'numeric', month:'short', timeZone:'UTC'}).format(new Date(`${day.date}T12:00:00Z`))}</small><strong>${day.energy.toFixed(1)} kWh</strong><span>${day.avgCloud.toFixed(0)}% cloud · ${day.low.toFixed(0)}–${day.high.toFixed(0)}°C</span></div>`).join('')}</div><p><strong>Estimated total: ${total.toFixed(1)} kWh</strong></p><p class="notice">Weather-informed estimate using a 78% system performance factor. It is not an irradiance model or output guarantee.</p></div>`;
  }

  function bindInteractions() {
    const toggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.nav-links');
    const closeMenu = () => {
      if (!links || !toggle) return;
      links.classList.remove('open');
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    };
    if (toggle) toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      document.body.classList.toggle('menu-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    if (links) links.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

    const requestedService = new URLSearchParams(location.search).get('service');
    const serviceSelect = document.getElementById('service');
    if (requestedService && serviceSelect) {
      const existing = Array.from(serviceSelect.options).find(option => option.value.toLowerCase() === requestedService.toLowerCase());
      if (existing) serviceSelect.value = existing.value;
      else serviceSelect.add(new Option(requestedService, requestedService, true, true));
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const enquiry = `Hello GreenLux. My name is ${document.getElementById('name').value}. My contact number is ${document.getElementById('phone').value}. I need help with ${document.getElementById('service').value} in ${document.getElementById('location').value || 'Zimbabwe'}. ${document.getElementById('message').value}`;
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(enquiry)}`, '_blank', 'noopener');
      document.getElementById('contact-status').hidden = false;
    });

    const forecastForm = document.getElementById('forecast-form');
    if (forecastForm) forecastForm.addEventListener('submit', async event => {
      event.preventDefault();
      const locationInput = document.getElementById('forecast-location').value.trim();
      const size = Number(document.getElementById('system-size').value);
      const output = document.getElementById('forecast-result');
      if (!locationInput || !Number.isFinite(size) || size <= 0 || size > 1000) {
        output.innerHTML = '<div class="result error">Enter a location and a system size between 0.1 and 1,000 kW.</div>';
        return;
      }
      try { await loadForecast(locationInput, size, output); }
      catch (error) { output.innerHTML = `<div class="result error">${escapeHtml(error.message)}</div>`; }
    });

    const roiForm = document.getElementById('roi-form');
    if (roiForm) roiForm.addEventListener('submit', event => {
      event.preventDefault();
      const mode = document.getElementById('roi-mode').value;
      const input = Number(document.getElementById('roi-input').value);
      const tariff = Number(document.getElementById('tariff').value);
      const sun = Number(document.getElementById('sun-hours').value);
      const costPerKw = Number(document.getElementById('cost-kw').value);
      const offset = Number(document.getElementById('offset').value) / 100;
      const output = document.getElementById('roi-result');
      if (![input, tariff, sun, costPerKw, offset].every(Number.isFinite) || input <= 0 || tariff <= 0 || sun <= 0 || costPerKw <= 0 || offset <= 0 || offset > 1) {
        output.innerHTML = '<div class="result error">Check the assumptions. Values must be positive and bill offset must be between 1% and 100%.</div>';
        return;
      }
      const monthlyKwh = mode === 'bill' ? input / tariff : input;
      const systemSize = monthlyKwh / 30 / sun;
      const investment = systemSize * costPerKw;
      const monthlySaving = monthlyKwh * tariff * offset;
      const annualSaving = monthlySaving * 12;
      const payback = investment / annualSaving;
      const netSaving = annualSaving * 25 - investment;
      output.innerHTML = `<div class="result"><div class="result-title">Planning scenario</div><div class="result-grid"><div class="metric"><small>Indicative array size</small><strong>${systemSize.toFixed(2)} kW</strong></div><div class="metric"><small>Estimated investment</small><strong>$${investment.toFixed(0)}</strong></div><div class="metric"><small>Monthly saving</small><strong>$${monthlySaving.toFixed(0)}</strong></div><div class="metric"><small>Annual saving</small><strong>$${annualSaving.toFixed(0)}</strong></div><div class="metric"><small>Simple payback</small><strong>${payback.toFixed(1)} years</strong></div><div class="metric"><small>25-year net saving</small><strong>$${netSaving.toFixed(0)}</strong></div></div><p class="notice">A simple, undiscounted estimate before financing, degradation, maintenance, tariff changes or battery replacement.</p></div>`;
    });

    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      }), {threshold: .08});
      document.querySelectorAll('.card, .section-head, .media').forEach(element => { element.classList.add('reveal'); observer.observe(element); });
    }
  }

  function render() {
    const pages = {home, services: servicesPage, about, solutions, projects, contact, planning};
    const content = pages[page] || home;
    document.getElementById('site').innerHTML = header() + `<main>${content()}</main>` + footer();
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || /^(?:https?:|tel:|mailto:)/.test(href)) return;
      const cleanHref = href.replace(/^index\.html/, '').replace(/\.html(?=[?#]|$)/, '');
      link.setAttribute('href', cleanHref ? `/${cleanHref.replace(/^\//, '')}` : '/');
    });
    bindInteractions();
  }

  render();
}());
