import React from 'react'
import { StyledBlogList } from './BlogList.styled'
import { BlogCard } from '../BlogCard/BlogCard'

interface State {
    blogPosts: []
}

export class BlogList extends React.Component {
    public readonly state: Readonly<State> = {
        blogPosts: [],
    }

    componentDidMount() {
        const api_url = process.env.REACT_APP_API_URL || ''
        fetch(`${api_url}/blogs?_sort=created_at:DESC`)
            .then(results => {
                return results.json()
            })
            .then(data => {
                this.setState({ blogPosts: Object.values(data) })
            })
    }

    render() {
        return (
            <StyledBlogList>
                {this.state.blogPosts.map(blogPost => (
                    <BlogCard
                        key={blogPost['id']}
                        title={blogPost['title']}
                        slug={blogPost['slug']}
                    />
                ))}
            </StyledBlogList>
        )
    }
}
