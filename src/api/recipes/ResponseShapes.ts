import { Image, extractImage } from '../common/ResponseShapes'

export class TagObject {
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

export class IngredientUnit {
    id: number
    name: string
    shortName: string

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.name = results && results.name ? results.name : 'Loading...'
        this.shortName = results && results.short_name ? results.short_name : 'Loading...'
    }
}

export class Ingredients {
    id: number
    quantity: string
    ingredient: IngredientGraphQLObject
    ingredientUnit: IngredientUnit

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.quantity = results && results.quantity ? results.quantity : 'Loading...'
        this.ingredient =
            results && results.ingredient
                ? new IngredientGraphQLObject(results.ingredient)
                : new IngredientGraphQLObject()
        this.ingredientUnit =
            results && results.ingredient_unit
                ? new IngredientUnit(results.ingredient_unit)
                : new IngredientUnit()
    }
}

export class Recipe {
    id: number
    slug: string
    title: string
    method: string
    description: string
    thumbnail: Image
    mediumImage: Image
    largeImage: Image
    tags: TagObject[]
    ingredients: Ingredients[]
    published: Boolean

    constructor(results?: any) {
        this.id = results && results.id ? results.id : 0
        this.slug = results && results.slug ? results.slug : 'Loading...'
        this.title = results && results.title ? results.title : 'Loading...'
        this.method = results && results.method ? results.method : 'Loading...'
        this.description = results && results.description ? results.description : 'Loading...'
        this.thumbnail =
            results && results.images ? extractImage('thumbnail', results.images) : new Image()
        this.mediumImage =
            results && results.images ? extractImage('medium', results.images) : new Image()
        this.largeImage =
            results && results.images ? extractImage('large', results.images) : new Image()
        this.tags =
            results && results.tags
                ? results.tags.map((tag: any) => {
                      return new TagObject(tag)
                  })
                : [new TagObject()]
        this.ingredients =
            results && results.ingredients
                ? results.ingredients.map((ingredient: any) => {
                      return new Ingredients(ingredient)
                  })
                : [new Ingredients()]
        this.published = results && results.published ? results.published : false
    }
}
