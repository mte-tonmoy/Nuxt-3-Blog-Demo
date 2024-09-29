<script lang="ts" setup>
const { params } = useRoute();

const { data: posts } = await useWpApi().getPost<any>(params.slug as string);
const post = posts.value[0];
</script>

<template>
  <main>
    <section class="header container py-2">
      <!-- Post Title -->
      <div class="post-title text-center mb-5">
        <h1 class="text-3xl sm:text-5xl font-bold">
          {{ post.title.rendered }}
        </h1>
      </div>
      <!-- Post Meta -->
      <div class="post-meta text-center mb-10">
        <span class="mr-3"
          >Written by {{ post._embedded["author"][0].name }}
        </span>
        <span>Published on by {{ post.date }}</span>
      </div>
      <!-- Post Image -->
      <div
        class="w-full h-[450px] sm:h-[400px] relative shadow-xl rounded overflow-hidden mb-10"
      >
        <img
          :src="post._embedded['wp:featuredmedia'][0]?.source_url"
          alt=""
          class="absolute w-full h-full object-cover"
        />
      </div>
      <!-- Post Content -->
      <div class="post-content">
        <div class="post-content">
          <div v-html="post.content.rendered"></div>
        </div>
      </div>
      <div></div>
    </section>
  </main>
</template>

<style>
.post-content {
  @apply sm:px-10;
}
.post-content h1,
.post-content h2,
.post-content h3,
.post-content h4,
.post-content h5,
.post-content h6,
.post-content p {
  @apply my-5;
}
.post-content h1,
.post-content h2,
.post-content h3,
.post-content h4,
.post-content h5,
.post-content h6 {
  @apply font-bold;
}

.post-content h1 {
  @apply text-2xl sm:text-4xl;
}

.post-content h2 {
  @apply text-xl sm:text-3xl;
}

.post-content h3 {
  @apply text-lg sm:text-2xl;
}

.post-content h4 {
  @apply sm:text-xl;
}

.post-content h5 {
  @apply text-sm sm:text-lg;
}
</style>
