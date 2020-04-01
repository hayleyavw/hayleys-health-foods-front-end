export interface HeroGraphQLResponseObject {
    id: number
    url: string
}

export interface BlogGraphQLResponseObject {
    id: number
    slug: string
    title: string
    content: string
    created_at: string
    hero: HeroGraphQLResponseObject
}
