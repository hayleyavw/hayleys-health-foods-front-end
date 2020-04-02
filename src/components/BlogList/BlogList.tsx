import React from 'react'
import { StyledBlogList } from './BlogList.styled'
import { getBlogsGraphQL } from '../../api/blogPosts/Queries'
import { Card } from '../Card/Card'
import { BlogGraphQLObject } from '../../api/blogPosts/ResponseShapes'

interface State {
    blogPosts: BlogGraphQLObject[]
}

export class BlogList extends React.Component {
    public readonly state: Readonly<State> = {
        blogPosts: [new BlogGraphQLObject()],
    }

    componentDidMount() {
        getBlogsGraphQL({}).then(blogPosts => {
            this.setState({ blogPosts: blogPosts })
        })
    }

    render() {
        return (
            <StyledBlogList>
                {this.state.blogPosts.map((blogPost, index) => (
                    <Card
                        key={index}
                        slug={blogPost.slug}
                        title={blogPost.title}
                        hero={blogPost.hero}
                    />
                ))}
            </StyledBlogList>
        )
    }
}
