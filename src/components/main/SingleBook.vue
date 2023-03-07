<script>
export default {
  name: "SingleBook",

  props: {
    book: {
      type: Object,
      required: true,
    },

    isShow: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<template>
  <article class="card">
    <div class="card-header">
      <span>{{ book.isbn_13 }}</span>
      <span>{{ book.genre }}</span>
    </div>
    <img class="card-img-top" :src="book.cover_img" :alt="book.cover_img" />
    <div class="card-body">
      <h5 class="card-title">{{ book.title }}</h5>
      <span class="my_card-author">{{ book.authore }}</span>
      <p class="card-text">
        {{ isShow ? book.plot : book.plot.substr(0, 100) + "..." }}
      </p>
      <code>{{ book.publisher }}</code>
      <router-link
        v-if="!isShow"
        :to="{ name: 'book', params: { id: book.id } }"
        class="btn btn-primary"
        title="Vedi il libro completo"
        >View More</router-link
      >
    </div>
  </article>
</template>

<style lang="scss" scoped></style>
