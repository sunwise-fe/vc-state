<template>
  <button @click="toggleTheme">to {{ theme === 'dark' ? 'light' : 'dark' }}</button>
</template>

<script setup lang="ts">
  import { useThemeContext } from './theme.context'

  const { theme, toggleTheme } = useThemeContext()
</script>

<style scoped></style>
