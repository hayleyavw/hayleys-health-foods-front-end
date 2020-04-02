import { BlogGraphQLObject, BlogObject } from './ResponseShapes'
import { blogPostsByIdQuery, blogPostsQuery } from './GraphQLStrings'
import { api_url } from '../common'

interface GetBlogBySlugProps {
    slug: string
}

interface BlogGraphQLProps {
    id?: number
}

export async function getBlogBySlug(props: GetBlogBySlugProps): Promise<BlogObject> {
    const results = await (await fetch(`${api_url}/blogs?slug=${props.slug}`)).json()
    return new BlogObject(results[0])
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
