<script setup>
import Hero from "../components/Hero.vue";
</script>
<template>
  <div>
    <Hero
      title="ABOUT IBURA FARMS"
      desc="Transforming the Agribusiness for sustainable outcome"
      img="require('../assets/about-hero.png)"
    />
    <div class="px-20 my-20 flex relative">
      <div class="bg-cream w-8/12 p-10 pl-28 py-40">
        <div class="text-4xl font-bold text-sans">Our Company</div>
        <div class="text-sans text-green w-9/12 text-base my-4">
          Ibura Farms is an Agri based company that is transforming and bridging
          the gap in growing sustainable Agri products and services with an
          economic opportunities on the entire value chain with our investment
          spanning across planting, processing, production, and sales.
        </div>
      </div>
      <div>
        <img
          class="absolute right-28 w-4/12 bottom-0"
          src="../assets/about-1.png"
          alt=""
        />
      </div>
    </div>
    <div class="flex px-20 pb-20">
      <div class="w-full mr-3 border-l-4 border-green p-8 bg-cream text-sans">
        <div class="text-4xl text-green font-bold mb-4">Vision</div>
        <div class="text-green text-base">
          To provide quality agricultural products and services with innovative
          ideas.
        </div>
      </div>
      <div class="w-full ml-3 border-l-4 border-green p-8 bg-cream text-sans">
        <div class="text-4xl text-green font-bold mb-4">Mission</div>
        <div class="text-green text-base">
          To participate actively and foster agricultural product sufficiency in
          Nigeria and beyond.
        </div>
      </div>
    </div>
  </div>
</template>
