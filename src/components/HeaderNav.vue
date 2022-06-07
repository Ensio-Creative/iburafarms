<script setup>
</script>

<template>
  <div>
    <div class="flex justify-between p-6 px-20">
      <div><img class="w-44" src="../assets/logo.svg" alt="" /></div>
      <div class="flex justify-between pt-2 text-green">
        <div class="px-4">
          <router-link to="/"> Home </router-link>
        </div>
        <div class="px-4">
          <router-link to="/about"> About </router-link>
        </div>
        <div class="px-4">
          <router-link to="/business-areas"> Business Areas </router-link>
        </div>
        <div class="px-4">
          <router-link to="contact-us">
            Contact Us
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
