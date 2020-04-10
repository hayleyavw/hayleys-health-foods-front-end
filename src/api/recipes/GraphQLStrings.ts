import { imageQuery } from '../common/GraphQLStrings'

const baseQuery = `
    id
    slug
    title
    method
    description
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
    }, sort: "created_at:desc") {
            ${baseQuery}
        }
    }`
}
