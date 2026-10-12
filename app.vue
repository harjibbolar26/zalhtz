<script setup lang="ts">
import { Menu, X, ArrowUpRight } from "lucide-vue-next";

const menuOpen = ref(false);
const route = useRoute();
watch(() => route.fullPath, () => (menuOpen.value = false));
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="container header-inner">
        <NuxtLink class="brand" to="/" aria-label="ZALHTZ home">
          <img src="/zalhtz-logo.png" width="334" height="205" alt="ZALHTZ" />
        </NuxtLink>
        <nav class="desktop-nav" aria-label="Main navigation">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/solutions">Solutions</NuxtLink>
          <NuxtLink to="/solutions#approach">How we work</NuxtLink>
        </nav>
        <NuxtLink class="header-cta" to="/solutions#contact">
          Start a conversation <ArrowUpRight :size="16" />
        </NuxtLink>
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav"
          :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"
          @click="menuOpen = !menuOpen"
        >
          <X v-if="menuOpen" :size="25" />
          <Menu v-else :size="25" />
        </button>
      </div>
      <nav v-if="menuOpen" id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/solutions">Solutions</NuxtLink>
        <NuxtLink to="/solutions#approach">How we work</NuxtLink>
        <NuxtLink to="/solutions#contact">Contact</NuxtLink>
      </nav>
    </header>

    <main id="main"><NuxtPage /></main>

    <footer class="footer">
      <div class="container footer-main">
        <div class="footer-brand">
          <img src="/zalhtz-logo.png" width="334" height="205" alt="ZALHTZ" />
          <p>ICT infrastructure and practical software for organisations that need technology to work.</p>
        </div>
        <div>
          <span class="footer-label">Explore</span>
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/solutions">Solutions</NuxtLink>
          <NuxtLink to="/solutions#approach">How we work</NuxtLink>
        </div>
        <div>
          <span class="footer-label">Solutions</span>
          <NuxtLink to="/solutions#infrastructure">Infrastructure</NuxtLink>
          <NuxtLink to="/solutions#communications">Communications</NuxtLink>
          <NuxtLink to="/solutions#software">Software</NuxtLink>
          <NuxtLink to="/solutions#support">Support</NuxtLink>
        </div>
        <div class="footer-contact">
          <span class="footer-label">Contact</span>
          <a href="tel:+2348109679984">+234 810 967 9984</a>
          <a href="mailto:u2us@zalhtz.com">u2us@zalhtz.com</a>
          <a href="https://wa.me/2348109679984" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <p>5 Olumafodun Street,<br />Ago Palace, Lagos.</p>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© {{ new Date().getFullYear() }} ZALHTZ. All rights reserved.</span>
        <span>Software engineering delivery in collaboration with <a href="https://oraclesteps.com" target="_blank" rel="noopener noreferrer">Oracle Steps</a>.</span>
      </div>
    </footer>
  </div>
</template>
