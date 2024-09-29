<script lang="ts" setup>
const params = useRoute().params;

const { data: categories, error } = await useWpApi().getCategory(
  params.slug as string
);
const category = categories.value[0];
const { data: posts, error: postsError } = await useWpApi().getPosts(
  category.id
);

useHead({
  title: `Archive: ${category.name}`,
  meta: [
    {
      name: "description",
      content: `Category ${params.slug}`,
    },
  ],
});
</script>

<template>
  <div>
    <PageHeader :title="`Archive: ${category.name}`" />
    <section class="container py-12">
      <div class="grid sm:grid-cols-3 gap-10">
        <BlogCard
          v-for="post in posts"
          :key="post.id"
          :title="post.title.rendered"
          :image="post._embedded['wp:featuredmedia'][0]?.source_url"
          :excerpt="post.excerpt.rendered"
          :slug="post.slug"
        ></BlogCard>
      </div>
    </section>
  </div>
</template>
