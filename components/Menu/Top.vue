<script lang="ts" setup></script>

<template>
  <nav class="bg-gray-900 text-white py-5">
    <div class="container flex justify-between">
      <a href="/" class="logo text-xl font-bold">Elon's Blog</a>
      <ul class="gap-5 inline-flex font-semibold">
        <li class="hover:text-sky-400"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="hover:text-sky-400">
          <NuxtLink to="/categories">Categories</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
