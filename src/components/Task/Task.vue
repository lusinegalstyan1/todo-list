<template>
  <v-card class="mx-auto my-8" elevation="16" width="auto">
    <v-card-item>
      <v-checkbox></v-checkbox>
      <v-card-title> {{ data.title }} </v-card-title>
    </v-card-item>

    <v-card-text>
      {{ data.description }}
    </v-card-text>

    <v-card-text> Status: {{ data.status }} </v-card-text>

    <v-card-text> Created at: {{ createdAt }} </v-card-text>

    <v-card-text> Due date: {{ dueDate }} </v-card-text>

    <v-card-actions>
      <v-btn color="success" variant="elevated"> Done </v-btn>
      <v-btn color="warning" variant="elevated"> Edit </v-btn>
      <v-btn color="error" variant="elevated"> Delete </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script src="./task.js"></script>
