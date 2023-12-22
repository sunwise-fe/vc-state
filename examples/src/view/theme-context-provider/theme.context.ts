import { ref } from 'vue'
import { createContext } from '../../../../src/index'

export type Theme = 'dark' | 'light'

export interface ThemeContextProviderProps {
  defaultTheme: Theme
  lightColor?: string
  darkColor?: string
}

// 创建context, 参数useValue方法返回的值会被provider到vue的上下文中
const [ThemeContextProvider, useThemeContext] = createContext(
  (props: ThemeContextProviderProps) => {
    const theme = ref<Theme>(props.defaultTheme)
    const toggleTheme = () => (theme.value = theme.value === 'dark' ? 'light' : 'dark')
    return { theme, toggleTheme }
  }
)

ThemeContextProvider.displayName = 'ThemeContextProvider'

export { ThemeContextProvider, useThemeContext }
