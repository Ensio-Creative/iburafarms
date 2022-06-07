<script setup>
import Hero from "../components/Hero.vue";
document.title = "Business - Ibura Farms";

const businesses = [
  {
    name: "Poultry",
    desc: " We pride ourselves in the supply of quality birds and produce to farmers with follow up support for maximum results.",
    img: "poultry.png",
  },
  {
    name: "Livestock Feed Supplies",
    desc: "We help farmers with quality livestock feed and care requirements no matter the farm size.",
    img: "live-stock.png",
  },
  {
    name: "Palm Plantations",
    desc: "With our success over the years, we have successfully developed palm plantations for palm oil production and palm by-products.",
    img: "palm.png",
  },
  {
    name: "Palm Oil Production",
    desc: "We are trusted partner for the production of palm oil with assurance of all year supply.",
    img: "palm-.png",
  },
  {
    name: "Rice Mill",
    desc: "We have become one of the best rice mill company with the use of latest technology in milling process.",
    img: "rice.png",
  },
];
</script>
<template>
  <div>
    <Hero
      title="BUSINESS AREAS"
      desc="Our business cut across food and agricultural products for both local and international markets"
      img="business-area-hero.png"
    />
    <div class="lg:flex lg:p-20 p-8 py-12 flex-wrap">
      <div
        v-for="(business, index) in businesses"
        :key="index"
        class="lg:w-96 lg:m-1 lg:mb-0 mb-8"
      >
        <div class="bg-cream lg:m-3">
          <img :src="'/img/buisness/' + business.img" alt="" />
          <div class="text-green text-sans p-4 text-center py-8 lg:h-52">
            <div class="text-xl font-bold mb-3">{{ business.name }}</div>
            <div class="text-sm px-8">
              {{ business.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
