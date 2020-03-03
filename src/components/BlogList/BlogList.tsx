import React from 'react'
import { StyledBlogList } from './BlogList.styled'
import { BlogCard } from '../BlogCard/BlogCard'
import { getBlogsGraphQL } from '../../api/common'

interface State {
    blogPosts: []
}

export class BlogList extends React.Component {
    public readonly state: Readonly<State> = {
        blogPosts: [],
    }

    componentDidMount() {
        getBlogsGraphQL({}).then(blogs => {
            this.setState({ blogPosts: blogs })
        })
    }

    render() {
        return (
            <StyledBlogList>
                {this.state.blogPosts.map((blogPost, index) => (
                    <BlogCard key={index} title={blogPost['title']} slug={blogPost['slug']} />
                ))}
            </StyledBlogList>
        )
    }
}
