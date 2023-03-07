<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<template>
  <AppHeader />

  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@use "bootstrap/scss/bootstrap.scss" as *;
</style>
