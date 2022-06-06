<script setup>
import Hero from "../components/Hero.vue";
</script>
<template>
  <div>
    <Hero
      title="ABOUT IBURA FARMS"
      desc="Transforming the Agribusiness for sustainable outcome"
      img="about-hero.png"
    />
    <div class="lg:px-20 lg:my-20 lg:flex relative mb-56">
      <div class="bg-cream lg:w-8/12 lg:p-10 lg:pl-28 p-8 pb-32 lg:py-40">
        <div class="tlg:ext-4xl text-xl font-bold text-sans">Our Company</div>
        <div class="text-sans text-green lg:w-9/12 lg:text-base text-sm my-4">
          Ibura Farms is an Agri based company that is transforming and bridging
          the gap in growing sustainable Agri products and services with an
          economic opportunities on the entire value chain with our investment
          spanning across planting, processing, production, and sales.
        </div>
      </div>
      <div>
        <img
          class="absolute lg:right-28 lg:w-4/12 w-10/12 lg:bottom-0 -bottom-48 right-8"
          src="../assets/about-1.png"
          alt=""
        />
      </div>
    </div>
    <div class="lg:flex lg:px-20 px-8 lg:pb-20 pb-10">
      <div class="w-full lg:mr-3 border-l-4 border-green lg:p-8 p-4 bg-cream text-sans">
        <div class="lg:text-4xl text-2xl text-green font-bold mb-4">Vision</div>
        <div class="text-green lg:text-base text-sm">
          To provide quality agricultural products and services with innovative
          ideas.
        </div>
      </div>
      <div class="w-full lg:ml-3 border-l-4 border-green lg:p-8 lg:mt-0 mt-8 p-4 bg-cream text-sans">
        <div class="lg:text-4xl text-2xl text-green font-bold mb-4">Mission</div>
        <div class="text-green lg:text-base text-sm">
          To participate actively and foster agricultural product sufficiency in
          Nigeria and beyond.
        </div>
      </div>
    </div>
  </div>
</template>
