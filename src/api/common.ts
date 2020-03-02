import { recipeByIdQuery, recipesQuery } from '../GraphQLQueries/recipeQueries'
import { blogPostsByIdQuery, blogPostsQuery } from '../GraphQLQueries/blogPostsQueries'
import { BlogGraphQLObject, RecipeGraphQLObject, RecipeObject } from './DefaultObjects'

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

export async function getBlogBySlug(props: GetBlogBySlugProps): Promise<BlogGraphQLObject> {
    const results = await (await fetch(`${api_url}/blogs?slug=${props.slug}`)).json()
    return new BlogGraphQLObject(results[0])
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

export async function getRecipeBySlug(props: GetRecipeBySlugProps): Promise<RecipeObject> {
    const results = await (await fetch(`${api_url}/recipes?slug=${props.slug}`)).json()
    return new RecipeObject(results[0])
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
    if (props.id) {
        return new RecipeGraphQLObject(results.data.recipe)
    } else {
        return results.data.recipes.map((recipe: RecipeGraphQLObject) => {
            return recipe
        })
    }
}
