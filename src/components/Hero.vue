<template>
  <div class="lg:flex">
    <div class="w-full lg:px-20 px-6 lg:py-0 py-16 bg-green">
      <div class="lg:my-44">
        <div class="lg:text-2xl text-lg text-light text-sans">{{ title }}</div>
        <div
          class="
            lg:text-5xl
            text-3xl
            lg:my-4 
            leading-snug
            text-sans text-white
            font-bold
          "
        >
          {{ desc }}
        </div>
      </div>
    </div>
    <div class="w-full">
      <img class="w-full" :src="img" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "desc", "img"],
};
</script>
<style scoped>
</style>