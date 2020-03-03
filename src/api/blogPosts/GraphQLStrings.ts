const baseQuery = `
    id
    slug
    title
    content
`

export const blogPostsQuery = () => {
    return `query {
        blogs (sort: "created_at:desc"){
            ${baseQuery}
        }
    }`
}

export const blogPostsByIdQuery = (id: number) => {
    return `query {
        blog(id: ${id}) {
            ${baseQuery}
        }
    }`
}
