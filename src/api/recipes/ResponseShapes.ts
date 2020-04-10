import { ImageGraphQLObject, extractImage } from '../common/ResponseShapes'

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
    thumbnail: ImageGraphQLObject
    mediumImage: ImageGraphQLObject
    largeImage: ImageGraphQLObject
    tags: TagGraphQLObject[]
    ingredients: IngredientsGraphQLObject[]

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.slug = results && results.slug ? results.slug : 'Loading...'
        this.title = results && results.title ? results.title : 'Loading...'
        this.method = results && results.method ? results.method : 'Loading...'
        this.description = results && results.description ? results.description : 'Loading...'
        this.thumbnail =
            results && results.images
                ? extractImage('thumbnail', results.images)
                : new ImageGraphQLObject()
        this.mediumImage =
            results && results.images
                ? extractImage('medium', results.images)
                : new ImageGraphQLObject()
        this.largeImage =
            results && results.images
                ? extractImage('large', results.images)
                : new ImageGraphQLObject()
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
