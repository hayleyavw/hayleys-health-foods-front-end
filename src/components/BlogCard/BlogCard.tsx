import React from 'react'
import { StyledBlogCard } from './BlogCard.styled';


interface TestState {
    blogTitle: string,
    blogContent: string
}
class BlogCard extends React.Component {

    public readonly state: Readonly<TestState> = {
        blogTitle: '',
        blogContent: ''
    }

    componentDidMount() {
        fetch('http://localhost:5000/blog/a-few-weeks-later')
        .then(results => {
            console.log(results)
            return results.json();
        }).then(data => {
            console.log(data)
            this.setState({ blogTitle: data.title })
        })
    }

    render() {
        return (
            <StyledBlogCard className="container">
                <h2>
                    {this.state.blogTitle}
                </h2>
                <p>
                    {this.state.blogContent}
                </p>
            </StyledBlogCard>
        )
        }
}

export default BlogCard;