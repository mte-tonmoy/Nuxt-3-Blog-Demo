<script lang="ts" setup>
defineProps<{
  title?: String;
}>();
</script>


<template>
  <div>
    <section class=" bg-cyan-50 py-12">
      <div class="flex container items-center">
        <h1 v-if="title" class="text-4xl font-bold">{{ title }}</h1>
        <!-- Image -->
        <slot />
      </div>
    </section>
  </div>
</template>
