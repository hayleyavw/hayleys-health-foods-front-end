import React from 'react'
import * as H from 'history'
import { RecipeCard } from '../components/RecipeCard/RecipeCard'

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
    createdAt: string
    id?: number
    method: string
    slug: string
    title: string
    hero: any
}

export class RecipePage extends React.Component<Props> {
    public readonly state: Readonly<State> = {
        createdAt: '',
        method: '',
        title: '',
        slug: this.props.match.params.slug,
        hero: '',
    }

    componentDidMount() {
        const api_url = process.env.REACT_APP_API_URL || ''
        fetch(`${api_url}/recipes/?slug=${this.state.slug}`)
            .then(results => {
                return results.json()
            })
            .then(recipe => {
                this.setState({
                    createdAt: recipe['created_at'],
                    id: recipe['id'],
                    method: recipe['method'],
                    title: recipe['title'],
                    hero: recipe['hero'],
                })
            })
    }
    render() {
        return (
            <RecipeCard
                createdAt={this.state.createdAt}
                id={this.state.id}
                method={this.state.method}
                slug={this.state.slug}
                title={this.state.title}
                hero={this.state.hero}
            />
        )
    }
}
