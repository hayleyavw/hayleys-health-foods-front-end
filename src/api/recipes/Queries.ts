import { recipeByIdQuery, recipesQuery, tagsQuery, recipesByTagsQuery } from './GraphQLStrings'
import { api_url } from '../common'
import { Recipe, TagObject } from './ResponseShapes'

interface RecipeGraphQLProps {
    id?: number
    limit?: string
    start?: string
    slug?: string
    preview?: boolean
}

export async function getRecipeGraphQL(props: RecipeGraphQLProps): Promise<Recipe | Recipe[]> {
    let queryString = ''
    if (props.id) {
        queryString = recipeByIdQuery(props.id)
    } else {
        queryString = recipesQuery({
            preview: props.preview,
            start: props.start,
            limit: props.limit,
            slug: props.slug,
        })
    }
    const results = await (await fetch(`${api_url}/graphql`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: queryString }),
    })).json()
    console.log(results)
    if (results) {
        if (props.id) {
            return new Recipe(results.data.recipe)
        } else if (props.slug) {
            return new Recipe(results.data.recipes[0])
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
