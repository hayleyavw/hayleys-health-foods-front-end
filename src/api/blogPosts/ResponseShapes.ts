import { ImageObject, ImageGraphQLObject } from '../common/ResponseShapes'

export class BlogObject {
    id: number
    slug: string
    title: string
    content: string
    createdAt: string
    updatedAt: string
    thumbnail: ImageObject
    mediumImage: ImageObject
    largeImage: ImageObject

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.slug = results && results.slug ? results.slug : 'Loading...'
        this.title = results && results.title ? results.title : 'Loading...'
        this.content = results && results.content ? results.content : 'Loading...'
        this.createdAt = results && results.created_at ? results.created_at : 'Loading...'
        this.updatedAt = results && results.updated_at ? results.updated_at : 'Loading...'
        this.thumbnail =
            results && results.images
                ? results.images.forEach((image: any) => {
                      if (image.size === 'thumbnail') {
                          return new ImageObject(image)
                      }
                  })
                : new ImageObject()
        this.mediumImage =
            results && results.images
                ? results.images.forEach((image: any) => {
                      if (image.size === 'medium') {
                          return new ImageObject(image)
                      }
                  })
                : new ImageObject()
        this.largeImage =
            results && results.images
                ? results.images.forEach((image: any) => {
                      if (image.size === 'medium') {
                          return new ImageObject(image)
                      }
                  })
                : new ImageObject()
    }
}

export class BlogGraphQLObject {
    id: number
    slug: string
    title: string
    content: string
    createdAt: string
    updatedAt: string
    thumbnail: ImageGraphQLObject
    mediumImage: ImageGraphQLObject
    largeImage: ImageGraphQLObject

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.slug = results && results.slug ? results.slug : 'Loading...'
        this.title = results && results.title ? results.title : 'Loading...'
        this.content = results && results.content ? results.content : 'Loading...'
        this.createdAt = results && results.created_at ? results.created_at : 'Loading...'
        this.updatedAt = results && results.updated_at ? results.updated_at : 'Loading...'
        this.thumbnail =
            results && results.images
                ? results.images.forEach((image: any) => {
                      if (image.size === 'thumbnail') {
                          return new ImageGraphQLObject(image)
                      }
                  })
                : new ImageGraphQLObject()
        this.mediumImage =
            results && results.images
                ? results.images.forEach((image: any) => {
                      if (image.size === 'medium') {
                          return new ImageGraphQLObject(image)
                      }
                  })
                : new ImageGraphQLObject()
        this.largeImage =
            results && results.images
                ? results.images.forEach((image: any) => {
                      if (image.size === 'medium') {
                          return new ImageGraphQLObject(image)
                      }
                  })
                : new ImageGraphQLObject()
    }
}
