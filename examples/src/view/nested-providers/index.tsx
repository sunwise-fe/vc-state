import { defineComponent } from 'vue'
import { ThemeContextProvider, useThemeContext } from './theme.context.ts'
import { Panel } from './MyPanel'

const Button = defineComponent({
  name: 'MyButton',
  setup() {
    const { toggleTheme, theme } = useThemeContext()
    return () => {
      return <button onClick={toggleTheme}>to {theme.value === 'dark' ? 'light' : 'dark'}</button>
    }
  }
})

export default defineComponent({
  name: 'NestProvidersView',
  setup() {
    return () => (
      <ThemeContextProvider>
        <Panel />
        <Button />
      </ThemeContextProvider>
    )
  }
})
