import { HeroObject, HeroGraphQLObject } from '../common/ResponseShapes'

export class BlogObject {
    id: number
    slug: string
    title: string
    content: string
    createdAt: string
    hero: HeroObject

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.slug = results && results.slug ? results.slug : 'Loading...'
        this.title = results && results.title ? results.title : 'Loading...'
        this.content = results && results.content ? results.content : 'Loading...'
        this.createdAt = results && results.created_at ? results.created_at : 'Loading...'
        this.hero = results && results.hero ? new HeroObject(results.hero) : new HeroObject()
    }
}

export class BlogGraphQLObject {
    id: number
    slug: string
    title: string
    content: string
    createdAt: string
    updatedAt: string
    hero: HeroGraphQLObject

    constructor(results?: any) {
        console.log(results)
        this.id = results && results.id ? results.id : 0
        this.slug = results && results.slug ? results.slug : 'Loading...'
        this.title = results && results.title ? results.title : 'Loading...'
        this.content = results && results.content ? results.content : 'Loading...'
        this.createdAt = results && results.created_at ? results.created_at : 'Loading...'
        this.updatedAt = results && results.updated_at ? results.updated_at : 'Loading...'
        this.hero =
            results && results.hero ? new HeroGraphQLObject(results.hero) : new HeroGraphQLObject()
    }
}
