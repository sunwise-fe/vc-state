import { Fragment, defineComponent, h, inject, provide } from 'vue'
import type { InjectionKey } from 'vue'
import type { Context, Selector, VContextProvider } from './interfaces'

/**
 * Compose context with hooks
 *
 * @param useValue function for init context state
 * @param selectors hooks with context
 */
export function createContext<
  Props extends {},
  Value extends Record<string, any>,
  Selectors extends Selector<Value, Props>[]
>(useValue: (props: Props) => Value, ...selectors: Selectors) {
  const injectionKey: InjectionKey<Context<Value, Props, Selectors>> = Symbol()

  const NO_PROVIDER = {}

  // 函数式组件ContextProvider
  const ContextProvider: VContextProvider<Props> = (props, { slots }) => {
    return h(
      defineComponent({
        name: ContextProvider.displayName || 'Provider',
        setup() {
          // init context state
          // 每个proiver会有自己独立的上下文context
          const initialContext = useValue(props)

          // 遍历selectors，将hooks中的context合并到provider的initialContext中
          const hookContextValues = selectors.reduce((merged, selector) => {
            // 执行selector函数，获取context的值
            return Object.assign({}, merged, selector.call(null, initialContext, props))
          }, Object.create(null))

          provide(injectionKey, Object.assign({}, initialContext, hookContextValues))

          return () => h(Fragment, slots.default?.())
        }
      })
    )
  }

  // 通过useContext可获取到上下文中的state
  function dispatch() {
    const context = inject(injectionKey, NO_PROVIDER) as Context<Value, Props, Selectors>

    if (context === NO_PROVIDER) {
      console.warn('[vc-state] The ContextProvider is never used.')
    }

    return context
  }

  return [ContextProvider, dispatch] as const
}
