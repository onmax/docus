import type { PageCollectionItemBase, DataCollectionItemBase } from '@nuxt/content'

declare module '@nuxt/content' {
   interface DocsCollectionItem extends PageCollectionItemBase {
    links?: {
    label: string
    icon: string
    to: string
    target?: string
    }[]
  }
  
   interface LandingCollectionItem extends PageCollectionItemBase {}
  

  interface PageCollections {
    docs: DocsCollectionItem
    landing: LandingCollectionItem
  }

  interface Collections {
    docs: DocsCollectionItem
    landing: LandingCollectionItem
  }
}
