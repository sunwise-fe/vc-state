<template>
  <!-- defaultTheme is required -->
  <!-- lightColor and darkColor are optional -->
  <!-- useContext receives the provided value of the nearest Provider -->
  <ThemeContextProvider defaultTheme="dark">
    <ThemeContextProvider defaultTheme="light">
      <MyPannel />
      <MyButton />
    </ThemeContextProvider>

    <!-- 每个proiver会有自己独立的上下文context-->
    <ThemeContextProvider defaultTheme="dark">
      <MyPannel />
      <MyButton />
    </ThemeContextProvider>
  </ThemeContextProvider>
</template>

<script setup lang="ts">
  import { ThemeContextProvider } from './theme.context'
  import MyPannel from './MyPannel.vue'
  import MyButton from './MyButton.vue'
</script>

<style scoped></style>
