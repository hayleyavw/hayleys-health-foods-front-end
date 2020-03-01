import { recipeByIdQuery, recipesQuery } from '../GraphQLQueries/recipeQueries'
import { blogPostsByIdQuery, blogPostsQuery } from '../GraphQLQueries/blogPostsQueries'

export const api_url = process.env.REACT_APP_API_URL || ''

interface GetBlogBySlugProps {
    slug: string
}

interface BlogGraphQLProps {
    id?: number
}

interface GetRecipeBySlugProps {
    slug: string
}

interface RecipeGraphQLProps {
    id?: number
    limit?: string
    start?: string
}

export async function getBlogBySlug(props: GetBlogBySlugProps) {
    const results = await fetch(`${api_url}/blogs?slug=${props.slug}`)
    return results.json()
}

export async function getBlogsGraphQL(props: BlogGraphQLProps) {
    let queryString = ''
    if (props.id) {
        queryString = blogPostsByIdQuery(props.id)
    } else {
        queryString = blogPostsQuery()
    }
    const results = await fetch(`${api_url}/graphql`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: queryString }),
    })
    return results.json()
}

export async function getRecipeBySlug(props: GetRecipeBySlugProps) {
    const results = await fetch(`${api_url}/recipes?slug=${props.slug}`)
    return results.json()
}

export async function getRecipeGraphQL(props: RecipeGraphQLProps) {
    let queryString = ''
    if (props.id) {
        queryString = recipeByIdQuery(props.id)
    } else {
        queryString = recipesQuery({ start: props.start, limit: props.limit })
    }
    const results = await fetch(`${api_url}/graphql`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: queryString }),
    })
    return results.json()
}
