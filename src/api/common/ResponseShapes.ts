export class ImageObject {
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
        this.id = results && results.id ? results.id : 0
        this.name = results && results.name ? results.name : 'Loading...'
        this.hash = results && results.hash ? results.hash : 'Loading...'
        this.sha256 = results && results.sha256 ? results.sha256 : 'Loading...'
        this.ext = results && results.ext ? results.ext : 'Loading...'
        this.mime = results && results.mime ? results.mime : 'Loading...'
        this.size = results && results.size ? results.size : 'Loading...'
        this.url = results && results.url ? results.url : 'Loading...'
        this.provider = results && results.provider ? results.provider : 'Loading...'
        this.providerMetadata =
            results && results.providerMetadata ? results.providerMetadata : 'Loading...'
        this.createdAt = results && results.created_at ? results.created_at : 'Loading...'
        this.updatedAt = results && results.updated_at ? results.updated_at : 'Loading...'
    }
}

export class ImageGraphQLObject {
    id: number = 0
    url: string

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.url = results && results.url ? results.url : 'Loading...'
    }
}

export class ImageSizeGraphQLObject {
    id: number = 0
    size: string

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.size = results && results.size ? results.size : 'Loading...'
    }
}

export class ImageSizeObject {
    id: number = 0
    size: string
    createdAt: string
    updatedAt: string

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.size = results && results.size ? results.size : 'Loading...'
        this.createdAt = results && results.created_at ? results.created_at : 'Loading...'
        this.updatedAt = results && results.updated_at ? results.updated_at : 'Loading...'
    }
}

export class ImagesObject {
    id: number = 0
    size: string
    createdAt: string
    updatedAt: string
    imageSize: ImageSizeObject
    image: ImageObject

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.size = results && results.size ? results.size : 'Loading...'
        this.createdAt = results && results.created_at ? results.created_at : 'Loading...'
        this.updatedAt = results && results.updated_at ? results.updated_at : 'Loading...'
        this.imageSize =
            results && results.image_size
                ? new ImageSizeObject(results.image_size)
                : new ImageSizeObject()
        this.image = results && results.image ? new ImageObject(results.image) : new ImageObject()
    }
}

export class ImagesGraphQLObject {
    id: number = 0
    size: string
    imageSize: ImageSizeGraphQLObject
    image: ImageGraphQLObject

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.size = results && results.size ? results.size : 'Loading...'
        this.imageSize =
            results && results.image_size
                ? new ImageSizeGraphQLObject(results.image_size)
                : new ImageSizeGraphQLObject()
        this.image =
            results && results.image
                ? new ImageGraphQLObject(results.image)
                : new ImageGraphQLObject()
    }
}
