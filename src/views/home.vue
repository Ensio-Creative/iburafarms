<script setup>
import Hero from "../components/Hero.vue";
</script>
<template>
  <div>
    <Hero
      title="IBURA FARMS"
      desc="A true and reliable partner in the agri-sector"
      img="about-hero"
    />
    <div class="p-20 flex">
      <div class="w-full pr-20 my-auto">
        <div class="text-4xl text-sans font-bold text-green">
          About Ibura Farms
        </div>
        <div class="text-lg text-sans text-green my-4">
          Ibura Farms Limited is one of the leading Agribusiness company that is
          transforming and driving growth in the agri-sector through sustainable
          and innovative ideas.
        </div>
        <div class="text-green text-base font-normal mt-8">LEARN MORE</div>
      </div>
      <div class="w-full">
        <img src="../assets/second-home.png" alt="" />
      </div>
    </div>

    <div class="flex relative">
      <div class="w-3/5 bg-cream ">
        <img class="absolute w-2/6 left-28 top-12" src="../assets/third-home.png" alt="">
      </div>
      <div class="w-full bg-green p-32 py-44">
        <div class="lg:text-2xl text-lg text-light text-sans my-3">
          BUSINESS AREAS
        </div>
        <div
          class="
            lg:text-5xl
            text-3xl
            leading-snug
            text-sans text-white
            font-bold
          "
        >
          We provide the best in agri-products and services for sustainable
          outcome.
        </div>
        <div class="text-white text-base font-normal mt-8">LEARN MORE</div>
      </div>
    </div>

    <div class="p-20">
      <div class="text-center text-5xl text-green text-sans">Make agriculture great again</div>
      <img src="../assets/Group-4.png" class="my-12" alt="">
    </div>
  </div>
</template>
