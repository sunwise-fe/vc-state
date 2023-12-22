<template>
  <!-- defaultTheme is required -->
  <!-- lightColor and darkColor are optional -->
  <ThemeContextProvider defaultTheme="light">
    <MyPannel />
    <MyButton />
  </ThemeContextProvider>
</template>

<script setup lang="ts">
  import { ThemeContextProvider } from './theme.context'
  import MyPannel from './MyPannel.vue'
  import MyButton from './MyButton.vue'
</script>

<style scoped></style>
