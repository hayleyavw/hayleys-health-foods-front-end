export interface RecipeGraphQLResponseObject {
    id: number
    slug: string
    title: string
    method: string
    description: string
    hero: HeroGraphQLResponseObject
    tags: TagGraphQLResponseObject[]
    ingredients: IngredientsGraphQLResponseObject[]
}

export interface HeroGraphQLResponseObject {
    id: number
    url: string
}

export interface TagGraphQLResponseObject {
    id: number
    slug: string
    name: string
    short_name: string
}

export interface IngredientsGraphQLResponseObject {
    quantity: string
    ingredient: {
        id: number
        slug: string
        name: string
    }
    ingredient_unit: {
        id: number
        name: string
        short_name: string
    }
}
