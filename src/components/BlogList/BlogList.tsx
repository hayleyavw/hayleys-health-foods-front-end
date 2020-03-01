import React from 'react'
import { StyledBlogList } from './BlogList.styled'
import { BlogCard } from '../BlogCard/BlogCard'
import { getBlogs } from '../../api/common'

interface State {
    blogPosts: []
}

export class BlogList extends React.Component {
    public readonly state: Readonly<State> = {
        blogPosts: [],
    }

    componentDidMount() {
        getBlogs({}).then(data => {
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
