<template>
  <div :style="style">
    <p>I'm in {{ theme }} mode</p>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useThemeContext } from './theme.context'
  const { theme } = useThemeContext()

  const currentThemeColor = computed(() => (theme.value === 'dark' ? '#000' : '#fff'))
  const oppositeThemeColor = computed(() => (theme.value === 'dark' ? '#fff' : '#000'))

  const style = computed(() => {
    return {
      color: currentThemeColor.value,
      backgroundColor: oppositeThemeColor.value,
      border: `1px ${oppositeThemeColor.value} solid`,
      width: '300px',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px'
    }
  })
</script>

<style scoped></style>
