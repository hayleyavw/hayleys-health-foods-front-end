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
        fetch('http://localhost:5000/blog')
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
