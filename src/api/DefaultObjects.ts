export class HeroObject {
    id: number = 0
    name: string = ''
    hash: string = ''
    sha256: string = ''
    ext: string = ''
    mime: string = ''
    size: number = 0
    url: string = ''
    provider: string = ''
    provider_metadata: null = null
    created_at: string = ''
    updated_at: string = ''
}

export class TagObject {
    id: number = 0
    slug: string = ''
    name: string = ''
    short_name: string = ''
    created_at: string = ''
    updated_at: string = ''
}

export class IngredientObject {
    id: number = 0
    ingredient: number = 0
    recipe: number = 0
    quantity: string = ''
    preview: string = ''
    created_at: string = ''
    updated_at: string = ''
    ingredient_unit: number = 0
}

export class RecipeObject {
    id: number = 0
    slug: string = ''
    title: string = ''
    method: string = ''
    created_at: string = ''
    updated_at: string = ''
    description: string = ''
    hero: HeroObject = new HeroObject()
    tags: TagObject[] = [new TagObject()]
    ingredients: IngredientObject[] = [new IngredientObject()]
}

export class HeroGraphQLObject {
    id: number = 0
    url: string = ''
}

export class TagGraphQLObject {
    id: number = 0
    slug: string = ''
    name: string = ''
    short_name: string = ''
}

export class IngredientGraphQLObject {
    id: number = 0
    slug: string = 'test'
    name: string = 'test'
}

export class IngredientUnitGraphQLObject {
    id: number = 0
    name: string = 'test'
    short_name: string = 'test'
}

export class IngredientsGraphQLObject {
    quantity: string = ''
    ingredient: IngredientGraphQLObject = new IngredientGraphQLObject()
    ingredient_unit: IngredientUnitGraphQLObject = new IngredientUnitGraphQLObject()
}

export class RecipeGraphQLObject {
    id: number = 0
    slug: string = 'test'
    title: string = 'test'
    method: string = 'test'
    description: string = ''
    hero: HeroGraphQLObject = new HeroGraphQLObject()
    tags: TagGraphQLObject[] = [new TagGraphQLObject()]
    ingredients: IngredientsGraphQLObject[] = [new IngredientsGraphQLObject()]
}
