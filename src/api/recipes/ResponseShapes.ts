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

export class TagObject {
    id: number
    slug: string
    name: string
    shortName: string
    createdAt: string
    updatedAt: string

    constructor(results?: any) {
        this.id = results.id ? results.id : 0
        this.slug = results.slug ? results.slug : 'test-slug'
        this.name = results.name ? results.name : 'Test Name'
        this.shortName = results.short_name ? results.short_name : 'sn'
        this.createdAt = results.created_at ? results.created_at : 'Test Date'
        this.updatedAt = results.updated_at ? results.updated_at : 'Test Date'
    }
}

export class IngredientObject {
    id: number
    ingredient: number
    recipe: number
    quantity: string
    preview: string
    createdAt: string
    updatedAt: string
    ingredientUnit: number

    constructor(results?: any) {
        this.id = results.id ? results.id : 0
        this.ingredient = results.ingredient ? results.ingredient : 0
        this.recipe = results.recipe ? results.recipe : 0
        this.quantity = results.quantity ? results.quantity : 'quantity'
        this.preview = results.preview ? results.preview : 'Test preview'
        this.createdAt = results.created_at ? results.created_at : 'Test Date'
        this.updatedAt = results.updated_at ? results.updated_at : 'Test Date'
        this.ingredientUnit = results.ingredient_unit ? results.ingredient_unit : 0
    }
}

export class RecipeObject {
    id: number
    slug: string
    title: string
    method: string
    createdAt: string
    updatedAt: string
    description: string
    hero: HeroObject
    tags: TagObject[]
    ingredients: IngredientObject[]

    constructor(results?: any) {
        this.id = results.id ? results.id : 0
        this.slug = results.slug ? results.slug : 'test-slug'
        this.title = results.title ? results.title : 'Test Title'
        this.method = results.method ? results.method : 'Test Method'
        this.createdAt = results.created_at ? results.created_at : 'Test Date'
        this.updatedAt = results.updated_at ? results.updated_at : 'Test Date'
        this.description = results.description ? results.description : 'Rest Description'
        this.hero = results.hero ? new HeroObject(results.hero) : new HeroObject()
        this.tags = results.tags
            ? results.tags.map((tag: any) => {
                  return new TagObject(tag)
              })
            : [new TagObject()]
        this.ingredients = results.ingredients
            ? results.ingredients.map((ingredient: any) => {
                  return new IngredientObject(ingredient)
              })
            : [new IngredientObject()]
    }
}

export class HeroGraphQLObject {
    id: number = 0
    url: string

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.url = results && results.url ? results.url : 'https://test-url.com'
    }
}

export class TagGraphQLObject {
    id: number
    slug: string
    name: string
    shortName: string

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.slug = results && results.slug ? results.slug : 'test-slug'
        this.name = results && results.name ? results.name : 'Test Name'
        this.shortName = results && results.short_name ? results.short_name : 'sn'
    }
}

export class IngredientGraphQLObject {
    id: number
    slug: string
    name: string

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.slug = results && results.slug ? results.slug : 'test-slug'
        this.name = results && results.name ? results.name : 'Test Name'
    }
}

export class IngredientUnitGraphQLObject {
    id: number
    name: string
    shortName: string

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.name = results && results.name ? results.name : 'Test Name'
        this.shortName = results && results.short_name ? results.short_name : 'sn'
    }
}

export class IngredientsGraphQLObject {
    id: number
    quantity: string
    ingredient: IngredientGraphQLObject
    ingredientUnit: IngredientUnitGraphQLObject

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.quantity = results && results.quantity ? results.quantity : 'quantity'
        this.ingredient =
            results && results.ingredient
                ? new IngredientGraphQLObject(results.ingredient)
                : new IngredientGraphQLObject()
        this.ingredientUnit =
            results && results.ingredient_unit
                ? new IngredientUnitGraphQLObject(results.ingredient_unit)
                : new IngredientUnitGraphQLObject()
    }
}

export class RecipeGraphQLObject {
    id: number
    slug: string
    title: string
    method: string
    description: string
    hero: HeroGraphQLObject
    tags: TagGraphQLObject[]
    ingredients: IngredientsGraphQLObject[]

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.slug = results && results.slug ? results.slug : 'test-slug'
        this.title = results && results.title ? results.title : 'Test Title'
        this.method = results && results.method ? results.method : 'Test Method'
        this.description = results && results.description ? results.description : 'Rest Description'
        this.hero =
            results && results.hero ? new HeroGraphQLObject(results.hero) : new HeroGraphQLObject()
        this.tags =
            results && results.tags
                ? results.tags.map((tag: any) => {
                      return new TagGraphQLObject(tag)
                  })
                : [new TagGraphQLObject()]

        this.ingredients =
            results && results.ingredients
                ? results.ingredients.map((ingredient: any) => {
                      return new IngredientsGraphQLObject(ingredient)
                  })
                : [new IngredientsGraphQLObject()]
    }
}
