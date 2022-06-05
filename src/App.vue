<script setup>
import HeaderNav from "./components/HeaderNav.vue";
import MobileNav from "./components/MobileNav.vue";
import Footer from "./components/Footer.vue";

import { useRoute } from "vue-router";
const router = useRoute();
</script>

<template>
  <div>
    <HeaderNav class="desktop" />
    <MobileNav class="mobile" />
    <router-view />
    <Footer />
  </div>
</template>

<style>
.text-roboto {
  font-family: "Roboto", sans-serif;
}
.text-sans {
  font-family: "DM Sans", sans-serif;
}
.desktop {
  display: block;
}
.mobile {
  display: none;
}
@media (max-width: 600px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
