import React from 'react'
import * as H from 'history'
import { RecipeResponseObject } from '../api/ResponseObjects'
import { RecipeObject } from '../api/DefaultObjects'
import { Nav } from '../components/Nav/Nav'
import { RecipeHero } from '../components/RecipeHero/RecipeHero'
import { RecipeIngredients } from '../components/RecipeIngredients/RecipeIngredients'
import { RecipeMethod } from '../components/RecipeMethod/RecipeMethod'
import { RecipeSteps } from '../components/RecipeSteps/RecipeSteps'

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
        const recipe = this.state.recipe
        return (
            <div className="container">
                <Nav />
                <RecipeHero recipe={recipe} />
                <RecipeSteps recipe={recipe} />
            </div>
        )
    }
}
