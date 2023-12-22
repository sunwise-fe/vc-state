# vc-state

在Vue3中创建createContext优雅地实现依赖注入

## Install

```bash
npm install @sunwise/vc-state

# or using yarn
yarn install @sunwise/vc-state

# or using pnpm
pnpm add @sunwise/vc-state
```

## Usage

```tsx
import { computed, defineComponent, ref } from 'vue'
import { createContext } from '@sunwise/vc-state'

type Theme = 'dark' | 'light'

interface ThemeContextProviderProps {
  defaultTheme: Theme
  lightColor?: string
  darkColor?: string
}

// Defined Required Props in useValue function
const [ThemeContextProvider, useThemeContext] = createContext(
  (props: ThemeContextProviderProps) => {
    const theme = ref<Theme>(props.defaultTheme)
    const toggleTheme = () => (theme.value = theme.value === 'dark' ? 'light' : 'dark')
    return { theme, toggleTheme }
  }
)

const MyButton = defineComponent({
  name: 'MyButton',
  setup() {
    const { toggleTheme, theme } = useThemeContext()
    return () => {
      return <button onClick={toggleTheme}>to {theme.value === 'dark' ? 'light' : 'dark'}</button>
    }
  }
})

const Panel = defineComponent({
  name: 'Panel',
  setup() {
    const { theme } = useThemeContext()
    const currentThemeColor = computed(() => (theme.value === 'dark' ? '#000' : '#fff'))
    const oppositeThemeColor = computed(() => (theme.value === 'dark' ? '#fff' : '#000'))

    return () => {
      return (
        <div
          style={{
            backgroundColor: currentThemeColor.value,
            border: `1px ${oppositeThemeColor.value} solid`,
            width: '300px',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            color: oppositeThemeColor.value
          }}
        >
          <p>I'm in {theme.value} mode</p>
        </div>
      )
    }
  }
})

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      // defaultTheme is required
      // lightColor and darkColor are optional
      <ThemeContextProvider defaultTheme="light">
        <Panel />
        <MyButton />
      </ThemeContextProvider>
    )
  }
})
```

### 更多demo

```bash
cd examples
pnpm install
pnpm run dev
```

- [ThemeContextProvider](https://github.com/sunwise-fe/vc-state/tree/main/examples/src/view/theme-context-provider)
- [OverridingProviders](https://github.com/sunwise-fe/vc-state/tree/main/examples/src/view/overriding-providers)
- [NestedProviders](https://github.com/sunwise-fe/vc-state/tree/main/examples/src/view/nested-providers)

### API

#### createContext

`createContext(useValue[, ...hooks]): Context`

It will return a `context` which compose with initial context and patch context

##### useValue

This is required in a createContext.

This function returns an object which is `initial context`.

```ts
import { createContext } from '@sunwise/vc-state'

const context = createContext((props: { a: string }) => {
  return {
    b: ''
  }
})

// In Vue Components
console.log(context.useContext()) //  { b: '' }
```

##### hooks

`Hooks` is a group of optional functions in `createContext`.

It receives `initial context` in the first parameter. And it will return a object which is `patch context`, it Will compose with `initial context`.

```ts
import { createContext } from '@sunwise/vc-state'

const context = createContext(
  (props: { a: string }) => {
    return {
      b: ''
    }
  },
  (initialContext) => {
    console.log(initialContext.b) // ''

    return {
      c: 1
    }
  }
)

// In Vue Components
console.log(context.useContext()) //  { b: '', c: 1 }
```

##### displayName

We can set custom displayName in vue-tools for Provider. Default is Provider.

```ts
import { createContext } from '@sunwise/vc-state'

const [ContextProvider, useThemeContext] = createContext(() => {
  return {
    // context
  }
})

ContextProvider.displayName = 'ThemeContextProvider'

export { ContextProvider, useThemeContext }
```

### 参考资料

- [从 React 到 Vue：在 Vue3 中 创建 createContext 优雅地实现依赖注入](https://juejin.cn/post/7249624871722221623?searchId=20231220120321CC3D6A9A135F2D5D56D0)

- [https://juejin.cn/post/7229971998545838135](https://juejin.cn/post/7229971998545838135)
