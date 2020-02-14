export const recipeById = (id: number) => {
    return `query {
        recipe(id: ${id}) {
            id
            slug
            title
            method
            description
            hero {
                id
                url
            }
            tags {
                id
                slug
                name
                short_name
            }
            ingredients {
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
            }
        }
    }`
}
