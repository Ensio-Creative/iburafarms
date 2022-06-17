<script setup>
import Hero from "../components/Hero.vue";

document.title = "Contact - Ibura Farms";
</script>
<template>
  <div>
    <Hero
      title="CONTACT US"
      desc="Questions? We have the answers!"
      img="contact-hero.png"
    />
    <div class="lg:flex lg:p-20 p-8 lg:mb-0 mb-12">
      <div class="text-sans w-full text-green">
        <div class="lg:ml-20">
          <div class="mb-5">
            <div class="text-lg font-black mb-1">CORPORATE OFFICE</div>
            <div class="text-base">
              36, Inuwa Wada Crescent <br />
              Off T. O. S. Benson Crescent, <br />
              Utako, Abuja
            </div>
          </div>
          <div class="mb-5">
            <div class="text-lg font-black mb-1">HEAD OFFICE</div>
            <div class="text-base">
              1 Ejimkonye Close, Ibura Agbobu, <br />
              Okigwe, Imo State
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
      </div>
      <div class="w-full lg:mt-0 mt-12">
        <img src="../assets/map.png" alt="" />
        <div class="bg-cream p-6 text-green text-sans">
          <div class="text-base">
            36, Inuwa Wada Crescent <br />
            Off T. O. S. Benson Crescent, <br />
            Utako, Abuja
          </div>
          <a
            href="https://www.google.com/maps/search/Block+30C,+Brains+and+Hammers+City+Estate,+Life+Camp,+Abuja/@9.0905996,7.381295,17z"
            target="extend"
          >
            <div class="text-base font-black mt-5">OPEN IN MAPS</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
