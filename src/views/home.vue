<script setup>
import Hero from "../components/Hero.vue";

document.title = "Ibura Farms - A reliable partner in the agric-sector";
</script>
<template>
  <div>
    <Hero
      title="IBURA FARMS"
      desc="A true and reliable partner in the agri-sector"
      img="home-hero.png"
    />
    <div class="lg:p-20 p-8 py-12 lg:flex">
      <div class="w-full lg:pr-20 my-auto">
        <div class="lg:text-2xl text-2xl text-sans font-bold text-green">
          About Ibura Farms
        </div>
        <div class="lg:text-lg text-base text-sans text-green my-4">
          Ibura Farms Limited is one of the leading Agribusiness company that is
          transforming and driving growth in the agri-sector through sustainable
          and innovative ideas.
        </div>
        <router-link to="/about">
          <div class="text-green lg:text-sm text-sm mt-8 lg:mb-0 mb-10">
            LEARN MORE
          </div>
        </router-link>
      </div>
      <div class="w-full">
        <img src="../assets/second-home.png" alt="" />
      </div>
    </div>

    <div class="lg:flex relative">
      <div class="lg:w-3/5 bg-cream">
        <img
          class="absolute lg:w-2/6 w-5/6 lg:left-28 lg:top-12 top-72 left-8"
          src="../assets/third-home.png"
          alt=""
        />
      </div>
      <div class="w-full bg-green lg:p-32 p-8 pb-40 lg:py-44">
        <div class="lg:ml-12">
          <div class="lg:text-xl text-base text-light text-sans my-3">
            BUSINESS AREAS
          </div>
          <div class="lg:text-5xl text-2xl leading-snug text-sans text-white">
            We provide the best in agri-products and services for sustainable
            outcome.
          </div>
          <router-link to="/business-areas">
            <div class="text-white lg:text-sm text-sm font-normal mt-8">
              LEARN MORE
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="lg:p-20 p-8 lg:mt-0 mt-72">
      <div class="text-center lg:text-5xl text-xl text-green text-sans">
        Make agriculture great again
      </div>
      <img src="../assets/Group-4.png" class="my-12" alt="" />
    </div>
  </div>
</template>
