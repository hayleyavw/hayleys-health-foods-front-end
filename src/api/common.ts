import { recipeById } from '../GraphQLQueries/recipeById'

export const api_url = process.env.REACT_APP_API_URL || ''

export async function getBlogs(slug: string) {
    const results = await fetch(`${api_url}/blogs?slug=${slug}`)
    return results.json()
}

interface RecipeParams {
    start?: string
    limit?: string
    slug?: string
}

export async function getRecipes(props: RecipeParams) {
    let baseQuery = `${api_url}/recipes`
    let query = ''
    if (props.slug) {
        query = `${baseQuery}?slug=${props.slug}`
    } else {
        query = `${baseQuery}?_sort=created_at:DESC${props.start ? '&_start=' + props.start : ''}${
            props.limit ? '&_limit=' + props.limit : ''
        }`
    }
    const results = await fetch(query)
    return results.json()
}

interface RecipeByIdGraphQLProps {
    id: number
}

export async function getRecipeByIdGraphQL(props: RecipeByIdGraphQLProps) {
    const queryString = recipeById(props.id)
    const results = await fetch(`${api_url}/graphql`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: queryString }),
    })

    return results.json()
}
