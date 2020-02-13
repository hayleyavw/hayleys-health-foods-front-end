export interface RecipeResponseObject {
    id: number
    slug: string
    title: string
    method: string
    created_at: string
    updated_at: string
    hero: HeroResponseObject
    tags: TagResponseObject[]
    ingredients: IngredientResponseObject[]
}

export interface HeroResponseObject {
    id: number
    name: string
    hash: string
    sha256: string
    ext: string
    mime: string
    size: number
    url: string
    provider: string
    provider_metadata: null
    created_at: string
    updated_at: string
}

export interface TagResponseObject {
    id: number
    slug: string
    name: string
    short_name: string
    created_at: string
    updated_at: string
}

export interface IngredientResponseObject {
    id: number
    ingredient: number
    recipe: number
    quantity: string
    preview: string
    created_at: string
    updated_at: string
    ingredient_unit: number
}
