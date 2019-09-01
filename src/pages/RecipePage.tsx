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
    dateAdded: string
    id?: number
    method: string
    slug: string
    title: string
}

export class RecipePage extends React.Component<Props> {
    public readonly state: Readonly<State> = {
        dateAdded: '',
        method: '',
        title: '',
        slug: this.props.match.params.slug,
    }

    componentDidMount() {
        fetch(`http://localhost:5000/recipes/${this.state.slug}`)
            .then(results => {
                return results.json()
            })
            .then(recipe => {
                this.setState({
                    dateAdded: recipe['date_added'],
                    id: recipe['id'],
                    method: recipe['method'],
                    title: recipe['title'],
                })
            })
    }
    render() {
        return (
            <RecipeCard
                dateAdded={this.state.dateAdded}
                id={this.state.id}
                method={this.state.method}
                slug={this.state.slug}
                title={this.state.title}
            />
        )
    }
}
