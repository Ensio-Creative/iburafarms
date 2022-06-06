<script setup>
import Hero from "../components/Hero.vue";
</script>
<template>
  <div>
    <Hero
      title="CONTACT US"
      desc="Questions? We have the answers!"
      img="contact-hero.png"
    />
    <div class="lg:flex lg:p-20 p-8">
      <div class="text-sans w-full text-green">
        <div class="mb-5">
          <div class="text-lg font-black mb-1">CORPORATE OFFICE</div>
          <div class="text-base">
            Block 30C, <br />
            Brains and Hammers City Estate, <br />
            Life Camp, Abuja
          </div>
        </div>
        <div class="mb-5">
          <div class="text-lg font-black mb-1">PHONE</div>
          <div class="text-base">07030986807, 07068634811</div>
        </div>
        <div>
          <div class="text-lg font-black mb-1">EMAIL</div>
          <div class="text-base">info@iburafarms.com</div>
        </div>
      </div>
      <div class="w-full">
        <img src="../assets/map.png" alt="">
        <div class="bg-cream p-6 text-green text-sans">
          <div class="text-base">
            Block 30C, <br />
            Brains and Hammers City Estate, <br />
            Life Camp, Abuja
          </div>
          <div class="text-lg font-black mt-5">OPEN IN MAPS</div>
        </div>
      </div>
    </div>
  </div>
</template>
