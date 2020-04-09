import { recipeByIdQuery, recipesQuery } from './GraphQLStrings'
import { api_url } from '../common'
import { RecipeObject, RecipeGraphQLObject } from './ResponseShapes'

interface GetRecipeBySlugProps {
    slug: string
}

interface RecipeGraphQLProps {
    id?: number
    limit?: string
    start?: string
}

export async function getRecipeBySlug(props: GetRecipeBySlugProps): Promise<RecipeObject | Error> {
    const results = await (await fetch(`${api_url}/recipes?slug=${props.slug}`)).json()
    console.log(results)
    try {
        return new RecipeObject(results[0])
    } catch {
        throw new Error('Recipe not found.')
    }
}

export async function getRecipeGraphQL(
    props: RecipeGraphQLProps
): Promise<RecipeGraphQLObject | RecipeGraphQLObject[]> {
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
        if (props.id) {
            return new RecipeGraphQLObject(results.data.recipe)
        } else {
            return results.data.recipes.map((recipe: RecipeGraphQLObject) => {
                return new RecipeGraphQLObject(recipe)
            })
        }
    }
    return new RecipeGraphQLObject()
}
