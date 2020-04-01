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
        this.name = results.name ? results.name : 'Test Name'
        this.hash = results.hash ? results.hash : 'test-hash'
        this.sha256 = results.sha256 ? results.sha256 : 'test sha256'
        this.ext = results.ext ? results.ext : 'test ext'
        this.mime = results.mime ? results.mime : 'test mime'
        this.size = results.size ? results.size : 'test size'
        this.url = results.url ? results.url : 'test url'
        this.provider = results.provider ? results.provider : 'test provider'
        this.providerMetadata = results.providerMetadata
            ? results.providerMetadata
            : 'test metadata'
        this.createdAt = results.created_at ? results.created_at : 'Test Date'
        this.updatedAt = results.updated_at ? results.updated_at : 'Test Date'
    }
}

export class BlogGraphQLObject {
    id: number
    slug: string
    title: string
    content: string
    createdAt: string
    hero: HeroObject

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.slug = results && results.slug ? results.slug : 'test-slug'
        this.title = results && results.title ? results.title : ''
        this.content = results && results.content ? results.content : 'Test Content'
        this.createdAt = results && results.created_at ? results.created_at : 'Test Date'
        this.hero = results.hero ? new HeroObject(results.hero) : new HeroObject()
    }
}
