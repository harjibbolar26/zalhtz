<script setup lang="ts">
import {
  ArrowRight,
  Blocks,
  Cable,
  Headphones,
  Network,
  PhoneCall,
  ServerCog,
  ShieldCheck,
  Wrench,
} from "lucide-vue-next";

useSeoMeta({
  title: "ZALHTZ | ICT Infrastructure & Software Solutions",
  ogTitle: "ZALHTZ | ICT Infrastructure & Software Solutions",
  description: "ZALHTZ supplies, installs, repairs and maintains ICT infrastructure, and delivers practical software solutions in collaboration with Oracle Steps.",
  ogDescription: "Connected infrastructure, communication systems and practical business software.",
});

const capabilities = [
  {
    icon: Network,
    title: "Structured networking",
    text: "Network planning, structured cabling, racks, patch panels, switches, routers and organised cable management.",
  },
  {
    icon: ServerCog,
    title: "ICT infrastructure",
    text: "Equipment supply, installation and configuration for dependable day-to-day operations.",
  },
  {
    icon: PhoneCall,
    title: "PABX & intercom",
    text: "Business telephone, intercom, extensions, faceplates and internal communication systems.",
  },
  {
    icon: Wrench,
    title: "Repair & maintenance",
    text: "Site assessment, fault diagnosis, repairs, upgrades and preventive maintenance.",
  },
  {
    icon: Blocks,
    title: "Business software",
    text: "Custom web and mobile applications, operational tools and business process automation.",
  },
  {
    icon: Cable,
    title: "Integration & support",
    text: "APIs, third-party integrations, deployment, optimisation and continuing technical support.",
  },
];

const process = [
  { number: "01", title: "Assess", text: "Understand the site, the operation, the users and the problem to solve." },
  { number: "02", title: "Design", text: "Define a practical infrastructure or software solution with clear responsibilities." },
  { number: "03", title: "Deliver", text: "Install, configure, build and test the agreed solution with visible progress." },
  { number: "04", title: "Support", text: "Maintain the system, resolve issues and plan improvements as needs change." },
];
</script>

<template>
  <div>
    <section class="home-hero">
      <div class="hero-grid-pattern" aria-hidden="true" />
      <div class="container home-hero-inner">
        <div class="hero-copy">
          <span class="eyebrow">ICT INFRASTRUCTURE + SOFTWARE SOLUTIONS</span>
          <h1>Connected infrastructure.<br /><span>Practical software.</span></h1>
          <p>ZALHTZ helps organisations install, repair and maintain dependable ICT systems—and now delivers tailored software and systems integration in collaboration with Oracle Steps.</p>
          <div class="hero-actions">
            <NuxtLink class="button button-primary" to="/solutions#contact">Request an assessment <ArrowRight :size="17" /></NuxtLink>
            <NuxtLink class="text-action" to="/solutions">Explore our solutions <ArrowRight :size="16" /></NuxtLink>
          </div>
          <div class="hero-proof">
            <ShieldCheck :size="21" />
            <span>From the physical network to the workflows that run on it.</span>
          </div>
        </div>

        <div class="network-stage" aria-label="Illustration of a connected ICT network">
          <div class="stage-label">SYSTEM STATUS <span>OPERATIONAL</span></div>
          <div class="stage-orbit orbit-one" />
          <div class="stage-orbit orbit-two" />
          <div class="rack">
            <div class="rack-top"><span /><span /><span /></div>
            <div v-for="row in 6" :key="row" class="rack-unit">
              <i v-for="port in 8" :key="port" :class="{ active: (port + row) % 3 === 0 }" />
            </div>
            <div class="rack-base"><span /><span /></div>
          </div>
          <div class="signal-card signal-card-one"><Network :size="18" /><span>Network</span><b>Connected</b></div>
          <div class="signal-card signal-card-two"><Headphones :size="18" /><span>Comms</span><b>Ready</b></div>
          <div class="signal-card signal-card-three"><Blocks :size="18" /><span>Software</span><b>Integrated</b></div>
          <svg class="stage-lines" viewBox="0 0 620 620" role="presentation" aria-hidden="true">
            <path d="M115 136 C210 136 214 226 310 226" />
            <path d="M495 175 C414 175 410 278 325 278" />
            <path d="M496 464 C420 464 415 370 325 370" />
          </svg>
        </div>
      </div>
      <div class="container capability-strip" aria-label="ZALHTZ delivery capabilities">
        <span>Supply</span><i />
        <span>Install</span><i />
        <span>Repair</span><i />
        <span>Maintain</span><i />
        <span>Build</span><i />
        <span>Support</span>
      </div>
    </section>

    <section class="section intro-section">
      <div class="container split-intro">
        <div>
          <span class="eyebrow">ONE CONNECTED TECHNOLOGY PARTNER</span>
          <h2>From the network rack to the daily workflow.</h2>
        </div>
        <div>
          <p class="large-copy">Good technology begins with a reliable foundation and continues through the systems people use every day.</p>
          <p>ZALHTZ brings hands-on infrastructure experience together with software engineering capability. That means fewer gaps between equipment, connectivity, communication tools and the digital processes your organisation depends on.</p>
        </div>
      </div>
    </section>

    <section class="section capabilities-section">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">WHAT WE DO</span>
          <h2>Practical capability across your technology environment.</h2>
          <p>Plan a new installation, restore an existing environment or connect physical infrastructure with purpose-built software.</p>
        </div>
        <div class="capability-grid">
          <article v-for="(item, index) in capabilities" :key="item.title" class="capability-card">
            <div class="card-top"><component :is="item.icon" :size="26" /><span>0{{ index + 1 }}</span></div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
        <div class="section-action">
          <NuxtLink class="button button-outline" to="/solutions">View detailed solutions <ArrowRight :size="17" /></NuxtLink>
        </div>
      </div>
    </section>

    <section class="field-section">
      <div class="container field-layout">
        <div class="field-copy">
          <span class="eyebrow eyebrow-light">BUILT FOR REAL ENVIRONMENTS</span>
          <h2>Order where there was complexity. Reliability where work happens.</h2>
          <p>ZALHTZ works on the practical details that keep an organisation connected: tracing faults, reorganising equipment, installing structured cabling and leaving systems easier to understand and support.</p>
          <NuxtLink class="text-action text-action-light" to="/solutions#infrastructure">Explore infrastructure services <ArrowRight :size="16" /></NuxtLink>
        </div>
        <div class="field-visuals">
          <article class="field-panel panel-assess">
            <span>01 / ASSESS</span>
            <div class="cable-field" aria-hidden="true">
              <i v-for="line in 7" :key="line" />
            </div>
            <h3>See the whole environment</h3>
            <p>Trace connections, identify risks and define the right remediation path.</p>
          </article>
          <article class="field-panel panel-organise">
            <span>02 / ORGANISE</span>
            <div class="port-field" aria-hidden="true">
              <i v-for="port in 32" :key="port" :class="{ active: port % 5 === 0 }" />
            </div>
            <h3>Install with clarity</h3>
            <p>Structure racks, ports and cabling for cleaner operation and simpler maintenance.</p>
          </article>
          <article class="field-panel panel-support">
            <span>03 / SUPPORT</span>
            <div class="support-bars" aria-hidden="true"><i /><i /><i /><i /></div>
            <h3>Keep systems useful</h3>
            <p>Maintain performance, resolve issues and improve the system over time.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section partnership-section">
      <div class="container partnership-grid">
        <div class="partnership-heading">
          <span class="eyebrow">INFRASTRUCTURE MEETS SOFTWARE</span>
          <h2>One commercial relationship. Two complementary strengths.</h2>
        </div>
        <div class="partner-card partner-zalhtz">
          <span class="partner-number">01</span>
          <h3>ZALHTZ</h3>
          <p>Brings local delivery, ICT infrastructure experience, client coordination and the practical understanding of how technology operates on site.</p>
          <div class="partner-tags"><span>Infrastructure</span><span>Communications</span><span>Field delivery</span></div>
        </div>
        <div class="partner-join" aria-hidden="true"><span>+</span></div>
        <div class="partner-card partner-oracle">
          <span class="partner-number">02</span>
          <h3>Oracle Steps</h3>
          <p>Provides software engineering, product development, solution architecture, integrations and technical implementation for agreed software engagements.</p>
          <div class="partner-tags"><span>Software</span><span>Automation</span><span>Integration</span></div>
          <a href="https://oraclesteps.com" target="_blank" rel="noopener noreferrer">Visit oraclesteps.com <ArrowRight :size="15" /></a>
        </div>
      </div>
    </section>

    <section id="approach" class="section process-section">
      <div class="container">
        <div class="section-heading section-heading-left">
          <span class="eyebrow">HOW WE WORK</span>
          <h2>A clear route from problem to dependable operation.</h2>
        </div>
        <div class="process-grid">
          <article v-for="step in process" :key="step.number">
            <span>{{ step.number }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <ContactBand />
  </div>
</template>
