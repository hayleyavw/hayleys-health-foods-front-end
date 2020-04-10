export class ImageGraphQLObject {
    id: number = 0
    url: string

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.url = results && results.url ? results.url : 'Loading...'
    }
}

export function extractImage(size: string, images: any) {
    for (let index = 0; index < images.length; index++) {
        let image = images[index]
        if (image.image_size.size === size) {
            return new ImageGraphQLObject(image.image)
        }
    }
    return new ImageGraphQLObject()
}
