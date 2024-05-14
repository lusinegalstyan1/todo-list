<template>
  <footer>
    <v-btn class="mx-4">
      <RouterLink to="/">Home </RouterLink>
    </v-btn>
    <v-btn class="mx-4"><RouterLink to="/contact-us">Contact us</RouterLink></v-btn>
    <v-btn class="mx-4"><RouterLink to="/about">About us</RouterLink></v-btn>
    <!-- <a href="https://www.facebook.com/" target="_blank"
      ><img src="./images/facebook_network_logo-128.webp" alt="Facebook"
    /></a> -->
    <v-btn>
      <a class="active-link" href="https://www.facebook.com/" target="_blank">
        <v-icon icon="mdi-facebook" />
      </a>
    </v-btn>
    <v-btn
      ><a href="https://www.instagram.com/" target="_blank"><v-icon icon="mdi-instagram" /></a
    ></v-btn>
    <v-btn>
      <a href="https://www.linkedin.com/" target="_blank"><v-icon icon="mdi-linkedin" /></a>
    </v-btn>
  </footer>
</template>

<script src="./footer.js"></script>
