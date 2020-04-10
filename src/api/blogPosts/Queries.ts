import { BlogGraphQLObject } from './ResponseShapes'
import { blogPostsByIdQuery, blogPostsQuery } from './GraphQLStrings'
import { api_url } from '../common'

interface GetBlogBySlugProps {
    slug: string
}

interface BlogGraphQLProps {
    id?: number
}

export async function getBlogBySlug(props: GetBlogBySlugProps): Promise<BlogGraphQLObject> {
    const results = await (await fetch(`${api_url}/blogs?slug=${props.slug}`)).json()
    try {
        return new BlogGraphQLObject(results[0])
    } catch {
        throw new Error('Blog Post not found.')
    }
}

export async function getBlogsGraphQL(
    props: BlogGraphQLProps
): Promise<BlogGraphQLObject | BlogGraphQLObject[]> {
    let queryString = ''
    if (props.id) {
        queryString = blogPostsByIdQuery(props.id)
    } else {
        queryString = blogPostsQuery()
    }
    const results = await (await fetch(`${api_url}/graphql`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: queryString }),
    })).json()
    if (props.id) {
        return new BlogGraphQLObject(results.data.blog)
    } else {
        return results.data.blogs.map((blog: BlogGraphQLObject) => {
            return new BlogGraphQLObject(blog)
        })
    }
}
