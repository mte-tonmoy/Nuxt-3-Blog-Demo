<script lang="ts" setup>
const {data:posts} =await useWpApi().getPosts<any>();
</script>
<template>
  <main>
    <PageHeader>
      <div
        class="w-[200px] relative h-[200px] mr-5 rounded overflow-hidden shadow-md"
      >
        <img
          src="~/assets/elon.png"
          alt=""
          class="w-full h-full absolute object-cover"
        />
      </div>

      <div>
        <h1 class="text-4xl font-bold mb-2">Hi, I am Elon</h1>
        <p class="mb-4">
          I built SpaceX, acquired Tesla, Twitter.
          <br />
          In my free time i shot post on twitter.
        </p>
        <a
          class="bg-sky-400 text-white px-2 py-3 rounded-md hover:bg-sky-600 duration-200"
          >Let's Connect</a
        >
      </div>
    </PageHeader>
    <!-- Blog Grid Starts -->
    <section class="container py-16">
      <div class="grid sm:grid-cols-3 gap-5">
        <BlogCard
          v-for="post in posts"
          :key="post.id"
          :title="post.title.rendered"
          :excerpt="post.excerpt.rendered"
          :image="post._embedded['wp:featuredmedia'][0]?.source_url"
          :slug="post.slug"
        />
      </div>
    </section>
    <!-- Blog Grid Ends -->
  </main>
</template>
  