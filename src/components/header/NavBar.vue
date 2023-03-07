<script>

export default {
  name: "HeaderNavBar",

  data() {
    return {
      navLinks: [
        {
          name: "books",
        },
      ],
    };
  },
};
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link v-for="navLink in navLinks" :to="{ name: navLink.name }">
          <span> <font-awesome-icon icon="fa-solid fa-book" /> {{ navLink.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss"></style>
