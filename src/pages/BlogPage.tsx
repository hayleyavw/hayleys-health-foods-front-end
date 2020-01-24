import React from 'react'
import * as H from 'history'

interface MatchParams {
    slug: string
}

interface Props extends RouteComponentProps<MatchParams> {}

export interface RouteComponentProps<P> {
    match: match<P>
    location: H.Location
    history: H.History
    staticContext?: any
}

export interface match<P> {
    params: P
    isExact: boolean
    path: string
    url: string
}

interface State {
    slug: string
    blogTitle: string
    blogContent: string
}
export class BlogPage extends React.Component<Props> {
    public readonly state: Readonly<State> = {
        blogTitle: '',
        blogContent: '',
        slug: this.props.match.params.slug,
    }

    componentDidMount() {
        fetch(`http://localhost:5000/blog/${this.state.slug}`)
            .then(results => {
                console.log(results)
                return results.json()
            })
            .then(data => {
                console.log(data)
                this.setState({ blogTitle: data.title })
                this.setState({ blogContent: data.content })
            })
    }

    render() {
        return (
            <React.Fragment>
                <h2>{this.state.blogTitle}</h2>
                <p>{this.state.blogContent}</p>
            </React.Fragment>
        )
    }
}
