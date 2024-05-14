<template>
  <v-layout class="pt-4 pb-4">
    <v-app-bar class="py-2" :elevation="1">
      <v-btn class="mx-4">
        <RouterLink to="/">Home </RouterLink>
      </v-btn>
      <v-btn class="mx-4"><RouterLink to="/contact-us">Contact us</RouterLink></v-btn>
      <v-btn class="mx-4"><RouterLink to="/about">About us</RouterLink></v-btn>
    </v-app-bar>
  </v-layout>
</template>
<script src="./header.js"></script>
