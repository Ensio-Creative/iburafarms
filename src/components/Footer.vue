<template>
  <div class="text-center bg-green text-white pt-20">
    <div class="lg:text-4xl text-2xl text-roboto font-bold">
      Wants to know more?
    </div>
    <div class="text-lg mx-auto lg:w-80 w-64 my-5 text-sans">
      Get in touch with Ibura Farms and we will respond to you quickly.
    </div>
    <div class="my-3">
      <router-link to="/contact-us">
        <button
          class="
            text-light
            border border-light
            lg:text-base
            text-sm
            rounded-full
            lg:p-4
            p-3
            w-40
            text-sans
          "
        >
          LET’S TALK
        </button>
      </router-link>
    </div>
    <div class="flex justify-evenly w-44 mx-auto mt-8">
      <img class="w-3 lg:h-6 h-5" src="../assets/icons/fb.png" alt="" />
      <img
        class="lg:w-6 w-5 lg:h-6 h-5"
        src="../assets/icons/twitter.png"
        alt=""
      />
      <img
        class="lg:w-6 w-5 lg:h-6 h-5"
        src="../assets/icons/link.png"
        alt=""
      />
      <img
        class="lg:w-6 w-5 lg:h-6 h-5"
        src="../assets/icons/insta.png"
        alt=""
      />
    </div>
    <div class="mx-auto line bg-gray mt-10"></div>
    <div class="lg:flex justify-between text-xs px-20 lg:py-8 py-6 text-sans">
      <div>© Copyright 2022 Ibura Farms</div>
      <div>
        Design :
        <a href="https://ensiocreative.com/" target="extend">
          Ensio Creative
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.line {
  height: 0.1px;
  width: 88%;
}
@media (max-width: 600px) {
  .line {
    width: 100%;
  }
}
</style>