export class HeroObject {
    id: number
    name: string
    hash: string
    sha256: string
    ext: string
    mime: string
    size: number
    url: string
    provider: string
    providerMetadata: null
    createdAt: string
    updatedAt: string

    constructor(results?: any) {
        this.id = results.id ? results.id : 0
        this.name = results.name ? results.name : 'Loading...'
        this.hash = results.hash ? results.hash : 'Loading...'
        this.sha256 = results.sha256 ? results.sha256 : 'Loading...'
        this.ext = results.ext ? results.ext : 'Loading...'
        this.mime = results.mime ? results.mime : 'Loading...'
        this.size = results.size ? results.size : 'Loading...'
        this.url = results.url ? results.url : 'Loading...'
        this.provider = results.provider ? results.provider : 'Loading...'
        this.providerMetadata = results.providerMetadata ? results.providerMetadata : 'Loading...'
        this.createdAt = results.created_at ? results.created_at : 'Loading...'
        this.updatedAt = results.updated_at ? results.updated_at : 'Loading...'
    }
}

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

export class HeroGraphQLObject {
    id: number = 0
    url: string

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.url = results && results.url ? results.url : 'Loading...'
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
