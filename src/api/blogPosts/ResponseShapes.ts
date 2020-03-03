export class BlogGraphQLObject {
    id: number
    slug: string
    title: string
    content: string
    created_at: string

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.slug = results && results.slug ? results.slug : 'test-slug'
        this.title = results && results.title ? results.title : 'Test Title'
        this.content = results && results.content ? results.content : 'Test Content'
        this.created_at = results && results.created_at ? results.created_at : 'Test Date'
    }
}
