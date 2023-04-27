

// install function executed by Vue.use()



import type { App, Plugin } from "vue"

export type SFCWithInstall<T> = T &
  Plugin & {
    displayName: string
    name: string
  }


export const withInstall = <T>(comp: T) => {
  const c = comp as any
  c.install = (app: App) => {
    app.component(c.displayName || c.name, c)
  }

  return c as SFCWithInstall<T>
}
