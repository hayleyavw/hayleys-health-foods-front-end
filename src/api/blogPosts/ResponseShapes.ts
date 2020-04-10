import { Image, extractImage } from '../common/ResponseShapes'

export class Blog {
    id: number
    slug: string
    title: string
    content: string
    createdAt: string
    updatedAt: string
    thumbnail: Image
    mediumImage: Image
    largeImage: Image

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.slug = results && results.slug ? results.slug : 'Loading...'
        this.title = results && results.title ? results.title : 'Loading...'
        this.content = results && results.content ? results.content : 'Loading...'
        this.createdAt = results && results.created_at ? results.created_at : 'Loading...'
        this.updatedAt = results && results.updated_at ? results.updated_at : 'Loading...'
        this.thumbnail =
            results && results.images ? extractImage('thumbnail', results.images) : new Image()
        this.mediumImage =
            results && results.images ? extractImage('medium', results.images) : new Image()
        this.largeImage =
            results && results.images ? extractImage('large', results.images) : new Image()
    }
}
