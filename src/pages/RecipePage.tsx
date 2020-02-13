import React from 'react'
import * as H from 'history'
import { RecipeCard } from '../components/RecipeCard/RecipeCard'
import { RecipeResponseObject } from '../api/ResponseObjects'
import { RecipeObject } from '../api/DefaultObjects'

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
    recipe: RecipeResponseObject
    slug: string
}

export class RecipePage extends React.Component<Props> {
    public readonly state: Readonly<State> = {
        recipe: new RecipeObject(),
        slug: this.props.match.params.slug,
    }

    componentDidMount() {
        const api_url = process.env.REACT_APP_API_URL || ''
        fetch(`${api_url}/recipes/?slug=${this.state.slug}`)
            .then(results => {
                return results.json()
            })
            .then(data => {
                this.setState((prevState, props) => ({
                    recipe: data[0],
                }))
            })
    }
    render() {
        return (
            <RecipeCard
                createdAt={this.state.recipe.created_at}
                id={this.state.recipe.id}
                method={this.state.recipe.method}
                slug={this.state.recipe.slug}
                title={this.state.recipe.title}
                hero={this.state.recipe.hero}
            />
        )
    }
}
