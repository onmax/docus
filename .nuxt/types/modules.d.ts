import { NuxtModule, ModuleDependencyMeta } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface ModuleDependencies {
    ["config"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["routing"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/routing").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["markdown-rewrite"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["css"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/css").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/icon"]?: ModuleDependencyMeta<typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/fonts"]?: ModuleDependencyMeta<typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/color-mode"]?: ModuleDependencyMeta<typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/ui"]?: ModuleDependencyMeta<typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/content"]?: ModuleDependencyMeta<typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["Content LLMS"]?: ModuleDependencyMeta<typeof import("@nuxt/content/dist/features/llms/module").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/image"]?: ModuleDependencyMeta<typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/robots"]?: ModuleDependencyMeta<typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/mcp-toolkit"]?: ModuleDependencyMeta<typeof import("@nuxtjs/mcp-toolkit").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-og-image"]?: ModuleDependencyMeta<typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-llms"]?: ModuleDependencyMeta<typeof import("nuxt-llms").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["assistant"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/assistant/index").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["config"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["css"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/css").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["markdown-rewrite"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["routing"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/routing").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/i18n"]?: ModuleDependencyMeta<typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/mdc"]?: ModuleDependencyMeta<typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
  }
  interface NuxtOptions {
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/config`
     */
    ["config"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/routing`
     */
    ["routing"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/routing").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite`
     */
    ["markdown-rewrite"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/css`
     */
    ["css"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/css").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/fonts`
     */
    ["fonts"]: typeof import("@nuxt/fonts").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/content/dist/features/llms/module`
     */
    ["content.llms"]: typeof import("@nuxt/content/dist/features/llms/module").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/robots`
     */
    ["robots"]: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/mcp-toolkit`
     */
    ["mcp"]: typeof import("@nuxtjs/mcp-toolkit").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-llms`
     */
    ["llms"]: typeof import("nuxt-llms").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/assistant/index`
     */
    ["assistant"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/assistant/index").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/config`
     */
    ["config"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/css`
     */
    ["css"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/css").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite`
     */
    ["markdown-rewrite"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/routing`
     */
    ["routing"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/routing").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/i18n`
     */
    ["i18n"]: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
  }
  interface NuxtConfig {
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/config`
     */
    ["config"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/routing`
     */
    ["routing"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/routing").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite`
     */
    ["markdown-rewrite"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/css`
     */
    ["css"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/css").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/fonts`
     */
    ["fonts"]?: typeof import("@nuxt/fonts").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/content/dist/features/llms/module`
     */
    ["content.llms"]?: typeof import("@nuxt/content/dist/features/llms/module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/robots`
     */
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/mcp-toolkit`
     */
    ["mcp"]?: typeof import("@nuxtjs/mcp-toolkit").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-llms`
     */
    ["llms"]?: typeof import("nuxt-llms").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/assistant/index`
     */
    ["assistant"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/assistant/index").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/config`
     */
    ["config"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/css`
     */
    ["css"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/css").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite`
     */
    ["markdown-rewrite"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/routing`
     */
    ["routing"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/routing").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/i18n`
     */
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["/Users/maxi/nuxt/docus/layer/modules/config", Exclude<NuxtConfig["config"], boolean>] | ["/Users/maxi/nuxt/docus/layer/modules/routing", Exclude<NuxtConfig["routing"], boolean>] | ["/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite", Exclude<NuxtConfig["markdown-rewrite"], boolean>] | ["/Users/maxi/nuxt/docus/layer/modules/css", Exclude<NuxtConfig["css"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxt/fonts", Exclude<NuxtConfig["fonts"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["/Users/maxi/nuxt/docus/node_modules/.pnpm/@nuxt+content@3.11.2_better-sqlite3@12.6.2_magicast@0.5.2/node_modules/@nuxt/content/dist/features/llms", Exclude<NuxtConfig["content.llms"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["/Users/maxi/nuxt/docus/node_modules/.pnpm/nuxt-site-config@3.2.20_magicast@0.5.2_vite@7.3.1_@types+node@25.3.0_jiti@2.6.1_lightni_d4c7074aebaf0ee07f3ad39fff4fd1f3/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["@nuxtjs/mcp-toolkit", Exclude<NuxtConfig["mcp"], boolean>] | ["/Users/maxi/nuxt/docus/node_modules/.pnpm/nuxt-site-config@3.2.20_magicast@0.5.2_vite@7.3.1_@types+node@25.3.0_jiti@2.6.1_lightni_d4c7074aebaf0ee07f3ad39fff4fd1f3/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["nuxt-llms", Exclude<NuxtConfig["llms"], boolean>] | ["/Users/maxi/nuxt/docus/layer/modules/assistant/index", Exclude<NuxtConfig["assistant"], boolean>] | ["/Users/maxi/nuxt/docus/layer/modules/config", Exclude<NuxtConfig["config"], boolean>] | ["/Users/maxi/nuxt/docus/layer/modules/css", Exclude<NuxtConfig["css"], boolean>] | ["/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite", Exclude<NuxtConfig["markdown-rewrite"], boolean>] | ["/Users/maxi/nuxt/docus/layer/modules/routing", Exclude<NuxtConfig["routing"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["nuxt-site-config", Exclude<NuxtConfig["site"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface ModuleDependencies {
    ["config"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["routing"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/routing").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["markdown-rewrite"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["css"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/css").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/icon"]?: ModuleDependencyMeta<typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/fonts"]?: ModuleDependencyMeta<typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/color-mode"]?: ModuleDependencyMeta<typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/ui"]?: ModuleDependencyMeta<typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/content"]?: ModuleDependencyMeta<typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["Content LLMS"]?: ModuleDependencyMeta<typeof import("@nuxt/content/dist/features/llms/module").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/image"]?: ModuleDependencyMeta<typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/robots"]?: ModuleDependencyMeta<typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/mcp-toolkit"]?: ModuleDependencyMeta<typeof import("@nuxtjs/mcp-toolkit").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-og-image"]?: ModuleDependencyMeta<typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-llms"]?: ModuleDependencyMeta<typeof import("nuxt-llms").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["assistant"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/assistant/index").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["config"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["css"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/css").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["markdown-rewrite"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["routing"]?: ModuleDependencyMeta<typeof import("/Users/maxi/nuxt/docus/layer/modules/routing").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/i18n"]?: ModuleDependencyMeta<typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/mdc"]?: ModuleDependencyMeta<typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
  }
  interface NuxtOptions {
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/config`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/config
     */
    ["config"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/routing`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/routing
     */
    ["routing"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/routing").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/markdown-rewrite
     */
    ["markdown-rewrite"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/css`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/css
     */
    ["css"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/css").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/fonts`
     * @see https://www.npmjs.com/package/@nuxt/fonts
     */
    ["fonts"]: typeof import("@nuxt/fonts").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/ui`
     * @see https://ui.nuxt.com/docs/getting-started/installation/nuxt
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/content`
     * @see https://content.nuxt.com
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/content/dist/features/llms/module`
     */
    ["content.llms"]: typeof import("@nuxt/content/dist/features/llms/module").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/robots`
     * @see https://www.npmjs.com/package/@nuxtjs/robots
     */
    ["robots"]: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/mcp-toolkit`
     * @see https://mcp-toolkit.nuxt.dev/getting-started/installation
     */
    ["mcp"]: typeof import("@nuxtjs/mcp-toolkit").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-llms`
     * @see https://github.com/nuxtlabs/nuxt-llms
     */
    ["llms"]: typeof import("nuxt-llms").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/assistant/index`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/assistant/index
     */
    ["assistant"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/assistant/index").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/config`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/config
     */
    ["config"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/css`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/css
     */
    ["css"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/css").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/markdown-rewrite
     */
    ["markdown-rewrite"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/routing`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/routing
     */
    ["routing"]: typeof import("/Users/maxi/nuxt/docus/layer/modules/routing").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/i18n`
     * @see https://www.npmjs.com/package/@nuxtjs/i18n
     */
    ["i18n"]: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     * @see https://www.npmjs.com/package/nuxt-site-config
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
  }
  interface NuxtConfig {
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/config`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/config
     */
    ["config"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/routing`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/routing
     */
    ["routing"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/routing").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/markdown-rewrite
     */
    ["markdown-rewrite"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/css`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/css
     */
    ["css"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/css").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/fonts`
     * @see https://www.npmjs.com/package/@nuxt/fonts
     */
    ["fonts"]?: typeof import("@nuxt/fonts").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/ui`
     * @see https://ui.nuxt.com/docs/getting-started/installation/nuxt
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/content`
     * @see https://content.nuxt.com
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/content/dist/features/llms/module`
     */
    ["content.llms"]?: typeof import("@nuxt/content/dist/features/llms/module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/robots`
     * @see https://www.npmjs.com/package/@nuxtjs/robots
     */
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/mcp-toolkit`
     * @see https://mcp-toolkit.nuxt.dev/getting-started/installation
     */
    ["mcp"]?: typeof import("@nuxtjs/mcp-toolkit").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-llms`
     * @see https://github.com/nuxtlabs/nuxt-llms
     */
    ["llms"]?: typeof import("nuxt-llms").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/assistant/index`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/assistant/index
     */
    ["assistant"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/assistant/index").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/config`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/config
     */
    ["config"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/css`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/css
     */
    ["css"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/css").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/markdown-rewrite
     */
    ["markdown-rewrite"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `/Users/maxi/nuxt/docus/layer/modules/routing`
     * @see https://www.npmjs.com/package//Users/maxi/nuxt/docus/layer/modules/routing
     */
    ["routing"]?: typeof import("/Users/maxi/nuxt/docus/layer/modules/routing").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/i18n`
     * @see https://www.npmjs.com/package/@nuxtjs/i18n
     */
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     * @see https://www.npmjs.com/package/nuxt-site-config
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["/Users/maxi/nuxt/docus/layer/modules/config", Exclude<NuxtConfig["config"], boolean>] | ["/Users/maxi/nuxt/docus/layer/modules/routing", Exclude<NuxtConfig["routing"], boolean>] | ["/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite", Exclude<NuxtConfig["markdown-rewrite"], boolean>] | ["/Users/maxi/nuxt/docus/layer/modules/css", Exclude<NuxtConfig["css"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxt/fonts", Exclude<NuxtConfig["fonts"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["/Users/maxi/nuxt/docus/node_modules/.pnpm/@nuxt+content@3.11.2_better-sqlite3@12.6.2_magicast@0.5.2/node_modules/@nuxt/content/dist/features/llms", Exclude<NuxtConfig["content.llms"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["/Users/maxi/nuxt/docus/node_modules/.pnpm/nuxt-site-config@3.2.20_magicast@0.5.2_vite@7.3.1_@types+node@25.3.0_jiti@2.6.1_lightni_d4c7074aebaf0ee07f3ad39fff4fd1f3/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["@nuxtjs/mcp-toolkit", Exclude<NuxtConfig["mcp"], boolean>] | ["/Users/maxi/nuxt/docus/node_modules/.pnpm/nuxt-site-config@3.2.20_magicast@0.5.2_vite@7.3.1_@types+node@25.3.0_jiti@2.6.1_lightni_d4c7074aebaf0ee07f3ad39fff4fd1f3/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["nuxt-llms", Exclude<NuxtConfig["llms"], boolean>] | ["/Users/maxi/nuxt/docus/layer/modules/assistant/index", Exclude<NuxtConfig["assistant"], boolean>] | ["/Users/maxi/nuxt/docus/layer/modules/config", Exclude<NuxtConfig["config"], boolean>] | ["/Users/maxi/nuxt/docus/layer/modules/css", Exclude<NuxtConfig["css"], boolean>] | ["/Users/maxi/nuxt/docus/layer/modules/markdown-rewrite", Exclude<NuxtConfig["markdown-rewrite"], boolean>] | ["/Users/maxi/nuxt/docus/layer/modules/routing", Exclude<NuxtConfig["routing"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["nuxt-site-config", Exclude<NuxtConfig["site"], boolean>])[],
  }
}