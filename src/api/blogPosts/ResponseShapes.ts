import { ImageObject, ImagesGraphQLObject } from '../common/ResponseShapes'

export class BlogObject {
    id: number
    slug: string
    title: string
    content: string
    createdAt: string
    images: ImageObject[]

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.slug = results && results.slug ? results.slug : 'Loading...'
        this.title = results && results.title ? results.title : 'Loading...'
        this.content = results && results.content ? results.content : 'Loading...'
        this.createdAt = results && results.created_at ? results.created_at : 'Loading...'
        this.images =
            results && results.images
                ? results.images.map((image: any) => {
                      return new ImageObject(image)
                  })
                : [new ImageObject()]
    }
}

export class BlogGraphQLObject {
    id: number
    slug: string
    title: string
    content: string
    createdAt: string
    updatedAt: string
    images: ImagesGraphQLObject[]

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.slug = results && results.slug ? results.slug : 'Loading...'
        this.title = results && results.title ? results.title : 'Loading...'
        this.content = results && results.content ? results.content : 'Loading...'
        this.createdAt = results && results.created_at ? results.created_at : 'Loading...'
        this.updatedAt = results && results.updated_at ? results.updated_at : 'Loading...'
        this.images =
            results && results.images
                ? results.images.map((image: any) => {
                      return new ImagesGraphQLObject(image)
                  })
                : new ImagesGraphQLObject()
    }
}
