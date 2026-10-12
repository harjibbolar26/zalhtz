<script setup lang="ts">
import {
  ArrowRight,
  Blocks,
  Cable,
  Check,
  Headphones,
  Mail,
  MapPin,
  Network,
  Phone,
  PhoneCall,
  ServerCog,
  Wrench,
} from "lucide-vue-next";

useSeoMeta({
  title: "ICT & Software Solutions | ZALHTZ",
  ogTitle: "ICT & Software Solutions | ZALHTZ",
  description: "Explore ZALHTZ network infrastructure, PABX, equipment maintenance, custom software, integrations and continuing technology support.",
  ogDescription: "Infrastructure, communications, software and support shaped around how your organisation works.",
});

const solutionGroups = [
  {
    id: "infrastructure",
    number: "01",
    icon: Network,
    eyebrow: "NETWORK & ICT INFRASTRUCTURE",
    title: "Build a reliable foundation for connected work.",
    intro: "We assess, organise and install the physical systems that connect people, equipment and information across your workplace.",
    services: [
      "Site and infrastructure assessment",
      "Network planning and structured cabling",
      "Server and communications rack installation",
      "Patch panels, switches, routers and access equipment",
      "Faceplates and cable management",
      "Equipment supply, configuration and replacement",
      "Network reorganisation and expansion",
      "Documentation and handover",
    ],
    note: "Suitable for new offices, network upgrades, equipment-room remediation and organisations consolidating disconnected systems.",
  },
  {
    id: "communications",
    number: "02",
    icon: PhoneCall,
    eyebrow: "COMMUNICATION SYSTEMS",
    title: "Keep teams and locations in clear communication.",
    intro: "Business communication should be simple to use, clearly configured and maintainable as an organisation grows.",
    services: [
      "PABX installation and configuration",
      "Intercom systems",
      "Telephone extensions",
      "Internal communication infrastructure",
      "Faceplates, outlets and endpoint setup",
      "Fault diagnosis and repair",
      "System upgrades and extension",
      "User handover and support",
    ],
    note: "We can work with a new communication setup or trace and improve an existing installation.",
  },
  {
    id: "support",
    number: "03",
    icon: Wrench,
    eyebrow: "MAINTENANCE & TECHNICAL SUPPORT",
    title: "Protect the systems your operation already depends on.",
    intro: "Maintenance is most useful when it prevents disruption, creates clarity and gives the next technical decision a reliable starting point.",
    services: [
      "Preventive maintenance",
      "Network and equipment troubleshooting",
      "Infrastructure remediation",
      "Hardware replacement and upgrades",
      "Performance and connectivity checks",
      "Configuration review",
      "Maintenance documentation",
      "Continuing support arrangements",
    ],
    note: "Support scope, response arrangements and maintenance schedules are agreed for each environment.",
  },
];

const softwareServices = [
  { icon: Blocks, title: "Custom applications", text: "Web and mobile applications shaped around your users, operations and growth plans." },
  { icon: ServerCog, title: "Business systems", text: "Inventory, operations, financial administration and other business management tools." },
  { icon: Cable, title: "Integration & APIs", text: "Connect internal platforms, third-party services and the data that needs to move between them." },
  { icon: Headphones, title: "Modernisation & support", text: "Improve existing software, deploy new capabilities and maintain systems after launch." },
];

const categories = [
  "Network & ICT infrastructure",
  "PABX & communication systems",
  "Repairs & maintenance",
  "Custom software",
  "Systems integration",
  "Technology consulting",
];
const form = reactive({ name: "", email: "", phone: "", category: "", description: "", website: "" });
const errors = reactive<Record<string, string>>({});
const sending = ref(false);
const sent = ref(false);
const sendError = ref("");
const feedback = ref<HTMLElement | null>(null);

function validate() {
  Object.keys(errors).forEach((key) => delete errors[key]);
  if (form.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = "Please enter a valid email address.";
  if (!form.category) errors.category = "Please choose the type of help you need.";
  if (form.description.trim().length < 20) errors.description = "Please share at least 20 characters about your requirements.";
  if (Object.keys(errors).length) {
    nextTick(() => document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
    return false;
  }
  return true;
}

async function submitEnquiry() {
  if (sending.value) return;
  sent.value = false;
  sendError.value = "";
  if (!validate()) return;
  sending.value = true;
  try {
    const result = await $fetch<{ success: boolean }>("/api/contact", { method: "POST", body: { ...form } });
    if (!result.success) throw new Error("Not accepted");
    Object.assign(form, { name: "", email: "", phone: "", category: "", description: "", website: "" });
    sent.value = true;
  } catch (error: any) {
    sendError.value = error?.statusCode === 429
      ? "Too many enquiries have been submitted. Please wait a few minutes or contact us directly."
      : "We could not confirm delivery. Please email u2us@zalhtz.com or call +234 810 967 9984.";
  } finally {
    sending.value = false;
    await nextTick();
    feedback.value?.scrollIntoView({ block: "center", behavior: "smooth" });
  }
}
</script>

<template>
  <div>
    <section class="solutions-hero">
      <div class="container solutions-hero-inner">
        <div>
          <span class="eyebrow eyebrow-light">ZALHTZ SOLUTIONS</span>
          <h1>Technology that works<br />from the ground up.</h1>
        </div>
        <div>
          <p>Infrastructure, communications, software and support shaped around how your organisation actually operates.</p>
          <NuxtLink class="button button-gold" to="#contact">Discuss your requirements <ArrowRight :size="17" /></NuxtLink>
        </div>
      </div>
      <div class="solutions-hero-mark" aria-hidden="true">Z</div>
    </section>

    <section class="solution-nav">
      <div class="container solution-nav-inner">
        <span>EXPLORE</span>
        <a href="#infrastructure">Infrastructure</a>
        <a href="#communications">Communications</a>
        <a href="#support">Support</a>
        <a href="#software">Software</a>
      </div>
    </section>

    <section class="solution-groups">
      <article v-for="group in solutionGroups" :id="group.id" :key="group.id" class="solution-group">
        <div class="container solution-group-grid">
          <aside>
            <span class="solution-number">{{ group.number }}</span>
            <component :is="group.icon" :size="32" />
          </aside>
          <div class="solution-copy">
            <span class="eyebrow">{{ group.eyebrow }}</span>
            <h2>{{ group.title }}</h2>
            <p class="large-copy">{{ group.intro }}</p>
            <div class="solution-list">
              <div v-for="service in group.services" :key="service"><Check :size="17" /><span>{{ service }}</span></div>
            </div>
            <p class="solution-note">{{ group.note }}</p>
          </div>
        </div>
      </article>
    </section>

    <section id="software" class="software-section">
      <div class="container">
        <div class="software-heading">
          <div>
            <span class="eyebrow">SOFTWARE & DIGITAL SOLUTIONS</span>
            <h2>Extend reliable infrastructure into better ways of working.</h2>
          </div>
          <p>For agreed software engagements, ZALHTZ works with Oracle Steps as its software engineering and technology delivery partner. The collaboration brings local commercial coordination and practical ICT experience together with product design, engineering and implementation capability.</p>
        </div>
        <div class="software-grid">
          <article v-for="item in softwareServices" :key="item.title">
            <component :is="item.icon" :size="25" />
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
        <div class="software-detail-grid">
          <div>
            <span class="eyebrow">AVAILABLE CAPABILITIES</span>
            <ul>
              <li>Requirements analysis and solution design</li>
              <li>Custom web and mobile application development</li>
              <li>Business process automation</li>
              <li>Inventory and operations management systems</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>API and third-party service integration</li>
              <li>Existing software optimisation and modernisation</li>
              <li>Testing, deployment and implementation</li>
              <li>Maintenance, upgrades and technical support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="approach" class="section approach-detail">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">HOW AN ENGAGEMENT MOVES</span>
          <h2>Clear decisions before delivery begins.</h2>
          <p>Every assignment starts by agreeing the problem, the responsibilities and what a successful handover should look like.</p>
        </div>
        <div class="approach-line">
          <article><span>01</span><h3>Discover</h3><p>Review the environment, requirements, users and business objective.</p></article>
          <article><span>02</span><h3>Define</h3><p>Agree scope, solution, deliverables, dependencies and delivery plan.</p></article>
          <article><span>03</span><h3>Implement</h3><p>Install or build with structured testing and progress communication.</p></article>
          <article><span>04</span><h3>Handover</h3><p>Confirm acceptance, document the system and prepare ongoing support.</p></article>
        </div>
      </div>
    </section>

    <section id="contact" class="contact-section">
      <div class="container contact-grid">
        <div class="contact-copy">
          <span class="eyebrow">START A CONVERSATION</span>
          <h2>Tell us what needs to work better.</h2>
          <p>Share the site, system or workflow you need help with. We will use the details to understand the request and arrange a practical next step.</p>
          <div class="contact-details">
            <div><Phone :size="20" /><span><b>Call or WhatsApp</b><a href="tel:+2348109679984">+234 810 967 9984</a></span></div>
            <div><Mail :size="20" /><span><b>Email</b><a href="mailto:u2us@zalhtz.com">u2us@zalhtz.com</a></span></div>
            <div><MapPin :size="20" /><span><b>Visit</b><p>5 Olumafodun Street, Ago Palace, Lagos.</p></span></div>
          </div>
          <a class="whatsapp-link" href="https://wa.me/2348109679984" target="_blank" rel="noopener noreferrer">Start a WhatsApp conversation <ArrowRight :size="16" /></a>
        </div>

        <div class="contact-form-panel">
          <span class="eyebrow">PROJECT ENQUIRY</span>
          <h3>How can we help?</h3>
          <div ref="feedback">
            <p v-if="sent" class="form-message form-message-success" role="status">Thank you. Your enquiry has been sent and the team will respond using the details provided.</p>
            <p v-if="sendError" class="form-message form-message-error" role="alert">{{ sendError }}</p>
          </div>
          <form novalidate :aria-busy="sending" @submit.prevent="submitEnquiry">
            <div class="honeypot" aria-hidden="true"><label for="website">Leave empty</label><input id="website" v-model="form.website" tabindex="-1" autocomplete="off" /></div>
            <fieldset :disabled="sending">
              <div class="form-row">
                <div class="field">
                  <label for="name">Full name <span>*</span></label>
                  <input id="name" v-model="form.name" autocomplete="name" placeholder="Your full name" maxlength="120" :aria-invalid="!!errors.name" :aria-describedby="errors.name ? 'name-error' : undefined" />
                  <p v-if="errors.name" id="name-error" class="field-error">{{ errors.name }}</p>
                </div>
                <div class="field">
                  <label for="email">Email address <span>*</span></label>
                  <input id="email" v-model="form.email" type="email" autocomplete="email" placeholder="you@company.com" maxlength="254" :aria-invalid="!!errors.email" :aria-describedby="errors.email ? 'email-error' : undefined" />
                  <p v-if="errors.email" id="email-error" class="field-error">{{ errors.email }}</p>
                </div>
              </div>
              <div class="form-row">
                <div class="field">
                  <label for="phone">Phone number</label>
                  <input id="phone" v-model="form.phone" type="tel" autocomplete="tel" placeholder="+234" maxlength="40" />
                </div>
                <div class="field">
                  <label for="category">Service needed <span>*</span></label>
                  <select id="category" v-model="form.category" :aria-invalid="!!errors.category" :aria-describedby="errors.category ? 'category-error' : undefined">
                    <option value="" disabled>Select a service</option>
                    <option v-for="category in categories" :key="category">{{ category }}</option>
                  </select>
                  <p v-if="errors.category" id="category-error" class="field-error">{{ errors.category }}</p>
                </div>
              </div>
              <div class="field">
                <label for="description">Tell us about the requirement <span>*</span></label>
                <textarea id="description" v-model="form.description" rows="6" maxlength="5000" placeholder="What needs to be installed, repaired, improved or built?" :aria-invalid="!!errors.description" :aria-describedby="errors.description ? 'description-error' : undefined" />
                <p v-if="errors.description" id="description-error" class="field-error">{{ errors.description }}</p>
              </div>
              <button class="button button-primary form-submit" type="submit" :disabled="sending">{{ sending ? "Sending…" : "Send enquiry" }} <ArrowRight v-if="!sending" :size="17" /></button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
