import { defineComponent } from 'vue'
import { useThemeContext } from '../theme.context.ts'
import { PanelThemeContextProvider, usePanelThemeContext } from './panel.context.ts'

const Panel = defineComponent({
  name: 'Panel',
  setup() {
    const { theme } = useThemeContext()
    const { styles } = usePanelThemeContext()

    return () => {
      return <div style={styles.value}>I'm in {theme.value} mode</div>
    }
  }
})

const PanelWrapper = defineComponent({
  name: 'PanelWrapper',
  setup() {
    return () => (
      <PanelThemeContextProvider>
        <Panel />
      </PanelThemeContextProvider>
    )
  }
})

export { PanelWrapper as Panel }
