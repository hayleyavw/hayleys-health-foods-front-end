import { recipeByIdQuery, recipesQuery } from './GraphQLStrings'
import { api_url } from '../common'
import { Recipe } from './ResponseShapes'

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
