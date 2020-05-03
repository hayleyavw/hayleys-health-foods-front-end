import { recipeByIdQuery, recipesQuery, tagsQuery, recipesByTagsQuery } from './GraphQLStrings'
import { api_url } from '../common'
import { Recipe, TagObject } from './ResponseShapes'

interface GetRecipeBySlugProps {
    slug: string
}

interface RecipeGraphQLProps {
    id?: number
    limit?: string
    start?: string
}

export async function getRecipeBySlug(props: GetRecipeBySlugProps): Promise<Recipe | Error> {
    const results = await (await fetch(`${api_url}/recipes?slug=${props.slug}`)).json()
    try {
        return new Recipe(results[0])
    } catch {
        throw new Error('Recipe not found.')
    }
}

export async function getRecipeGraphQL(props: RecipeGraphQLProps): Promise<Recipe | Recipe[]> {
    let queryString = ''
    if (props.id) {
        queryString = recipeByIdQuery(props.id)
    } else {
        queryString = recipesQuery({ start: props.start, limit: props.limit })
    }
    const results = await (await fetch(`${api_url}/graphql`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: queryString }),
    })).json()
    if (results) {
        console.log(results)
        if (props.id) {
            return new Recipe(results.data.recipe)
        } else {
            return results.data.recipes.map((recipe: Recipe) => {
                return new Recipe(recipe)
            })
        }
    }
    return new Recipe()
}

export async function getRecipesByTags(tagList: string[]): Promise<Recipe[]> {
    const queryString = recipesByTagsQuery(JSON.stringify(tagList[0]))
    const results = await (await fetch(`${api_url}/graphql`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: queryString }),
    })).json()
    let recipes: Recipe[] = []
    results.data.tags[0].recipes.forEach((recipe: Recipe) => {
        let numTagMatch = 0
        recipe.tags.forEach((tag: any) => {
            if (tagList.includes(tag.short_name)) {
                numTagMatch += 1
            }
        })
        if (numTagMatch === tagList.length) {
            recipes.push(recipe)
        }
    })
    if (results) {
        return recipes.map((recipe: Recipe) => {
            return new Recipe(recipe)
        })
    }
    return [new Recipe()]
}

export async function getTags(): Promise<TagObject[]> {
    const queryString = tagsQuery
    const results = await (await fetch(`${api_url}/graphql`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: queryString }),
    })).json()
    if (results) {
        return results.data.tags.map((tag: TagObject) => {
            return new TagObject(tag)
        })
    }
    return [new TagObject()]
}
