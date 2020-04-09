import { ImagesObject, ImagesGraphQLObject } from '../common/ResponseShapes'

export class TagObject {
    id: number
    slug: string
    name: string
    shortName: string
    createdAt: string
    updatedAt: string

    constructor(results?: any) {
        this.id = results.id ? results.id : 0
        this.slug = results.slug ? results.slug : 'Loading...'
        this.name = results.name ? results.name : 'Loading...'
        this.shortName = results.short_name ? results.short_name : 'Loading...'
        this.createdAt = results.created_at ? results.created_at : 'Loading...'
        this.updatedAt = results.updated_at ? results.updated_at : 'Loading...'
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
        this.quantity = results.quantity ? results.quantity : 'Loading...'
        this.preview = results.preview ? results.preview : 'Loading...'
        this.createdAt = results.created_at ? results.created_at : 'Loading...'
        this.updatedAt = results.updated_at ? results.updated_at : 'Loading...'
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
    images: ImagesObject[]
    tags: TagObject[]
    ingredients: IngredientObject[]

    constructor(results?: any) {
        this.id = results.id ? results.id : 0
        this.slug = results.slug ? results.slug : 'Loading...'
        this.title = results.title ? results.title : 'Loading...'
        this.method = results.method ? results.method : 'Loading...'
        this.createdAt = results.created_at ? results.created_at : 'Loading...'
        this.updatedAt = results.updated_at ? results.updated_at : 'Loading...'
        this.description = results.description ? results.description : 'Loading...'
        this.images = results.images
            ? results.images.map((image: any) => {
                  return new ImagesObject(image)
              })
            : [new ImagesObject()]
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

export class TagGraphQLObject {
    id: number
    slug: string
    name: string
    shortName: string

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.slug = results && results.slug ? results.slug : 'Loading...'
        this.name = results && results.name ? results.name : 'Loading...'
        this.shortName = results && results.short_name ? results.short_name : 'Loading...'
    }
}

export class IngredientGraphQLObject {
    id: number
    slug: string
    name: string

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.slug = results && results.slug ? results.slug : 'Loading...'
        this.name = results && results.name ? results.name : 'Loading...'
    }
}

export class IngredientUnitGraphQLObject {
    id: number
    name: string
    shortName: string

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.name = results && results.name ? results.name : 'Loading...'
        this.shortName = results && results.short_name ? results.short_name : 'Loading...'
    }
}

export class IngredientsGraphQLObject {
    id: number
    quantity: string
    ingredient: IngredientGraphQLObject
    ingredientUnit: IngredientUnitGraphQLObject

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.quantity = results && results.quantity ? results.quantity : 'Loading...'
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
    images: ImagesGraphQLObject[]
    tags: TagGraphQLObject[]
    ingredients: IngredientsGraphQLObject[]

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.slug = results && results.slug ? results.slug : 'Loading...'
        this.title = results && results.title ? results.title : 'Loading...'
        this.method = results && results.method ? results.method : 'Loading...'
        this.description = results && results.description ? results.description : 'Loading...'
        this.images =
            results && results.images
                ? results.images.map((image: any) => {
                      return new ImagesGraphQLObject(image)
                  })
                : [new ImagesGraphQLObject()]
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
