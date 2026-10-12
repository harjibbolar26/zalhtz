<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next";
</script>

<template>
  <section class="contact-band">
    <div class="container contact-band-inner">
      <div>
        <span class="eyebrow eyebrow-light">A PRACTICAL NEXT STEP</span>
        <h2>Let’s make your technology work better.</h2>
        <p>Tell us about a new installation, an existing system that needs attention, or a workflow ready for software.</p>
      </div>
      <NuxtLink class="button button-gold" to="/solutions#contact">
        Discuss your requirements <ArrowUpRight :size="17" />
      </NuxtLink>
    </div>
  </section>
</template>
