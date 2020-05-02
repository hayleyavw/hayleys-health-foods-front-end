import { imageQuery } from '../common/GraphQLStrings'

const baseQuery = `
    id
    slug
    title
    yield
    method
    description
    published
    ${imageQuery}
    tags {
        id
        slug
        name
        short_name
    }
    ingredients {
        id
        quantity
        ingredient {
            id
            slug
            name
        }
        ingredient_unit {
            id
            name
            short_name
        }
    }`

export const recipeByIdQuery = (id: number) => {
    return `query {
        recipe(id: ${id}) {
            ${baseQuery}
        }
    }`
}

interface RecipesQueryProps {
    start?: string
    limit?: string
}

export const recipesQuery = (props: RecipesQueryProps) => {
    return `query {
        recipes (${props.limit ? 'limit:' + props.limit : ''}, ${
        props.start ? 'start:' + props.start : ''
    }, sort: "created_at:desc", where: {published: "true"}) {
            ${baseQuery}
        }
    }`
}

export const tagsQueryString = `
    id
    slug
    name
    short_name
`

export const tagsQuery = `query {
    tags {
        ${tagsQueryString}
    }
}`

export const recipesByTagsQuery = (tag: string) => {
    return `query {
        tags(where: {
            short_name: ${tag}
        }) {
            ${tagsQueryString}
            recipes(where: {published: "true"}) {
                id
                slug
                title
                yield
                method
                description
                published
                ${imageQuery}
                tags {
                    ${tagsQueryString}
                }
            }
        }
    }`
}
