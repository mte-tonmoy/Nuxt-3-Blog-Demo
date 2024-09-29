<script lang="ts" setup>
defineProps<{
  title?: String;
  image?: String;
  excerpt?: String;
  slug?: String;
}>();
</script>


<template>
    <div class="shadow-lg">
      <!-- Blog Image -->
      <div v-if="image" class="w-full h-[180px] relative">
        <img :src="image" alt="" class="w-full h-full absolute object-cover" />
      </div>
      <!-- Blog Content -->
      <div class="p-2">
        <h3 class="text-xl font-semibold mb-3">{{ title }}</h3>
        <p class="text-sm mb-3" v-if="excerpt">
          {{ excerpt }}
        </p>
        <NuxtLink :to="`/${slug}`">Read More</NuxtLink>
      </div>
    </div>
  </template>
