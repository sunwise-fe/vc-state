import { ref } from 'vue'
import { createContext } from '../../../../src/index'

export type Theme = 'dark' | 'light'

const [ThemeContextProvider, useThemeContext] = createContext(() => {
  const theme = ref<Theme>('dark')
  const toggleTheme = () => (theme.value = theme.value === 'dark' ? 'light' : 'dark')
  return { theme, toggleTheme }
})

export { ThemeContextProvider, useThemeContext }
