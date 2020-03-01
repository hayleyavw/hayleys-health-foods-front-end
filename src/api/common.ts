export const api_url = process.env.REACT_APP_API_URL || ''

export async function getBlogs(slug: string) {
    const results = await fetch(`${api_url}/blogs?slug=${slug}`)
    return results.json()
}

interface RecipeParams {
    start?: string
    limit?: string
}

export async function getRecipes(props: RecipeParams) {
    let query = `${api_url}/recipes?_sort=created_at:DESC${
        props.start ? '&_start=' + props.start : ''
    }${props.limit ? '&_limit=' + props.limit : ''}`
    const results = await fetch(query)
    return results.json()
}
