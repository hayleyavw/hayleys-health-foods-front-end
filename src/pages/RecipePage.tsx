import React from 'react'
import * as H from 'history'
import { RecipeGraphQLObject } from '../api/DefaultObjects'
import { Nav } from '../components/Nav/Nav'
import { RecipeHero } from '../components/Hero/RecipeHero/RecipeHero'
import { RecipeSteps } from '../components/RecipeSteps/RecipeSteps'
import { recipeById } from '../GraphQLQueries/recipeById'
import { RecipeGraphQLResponseObject } from '../api/GraphQLResponseObjects'

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
    recipe: RecipeGraphQLResponseObject
    slug: string
}

export class RecipePage extends React.Component<Props> {
    public readonly state: Readonly<State> = {
        recipe: new RecipeGraphQLObject(),
        slug: this.props.match.params.slug,
    }

    async componentDidMount() {
        const api_url = process.env.REACT_APP_API_URL || ''

        const recipeData = await (await fetch(`${api_url}/recipes?slug=${this.state.slug}`)).json()
        const queryString = recipeById(recipeData[0].id)

        fetch(`${api_url}/graphql`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: queryString }),
        })
            .then(results => {
                return results.json()
            })
            .then(results => {
                this.setState((prevState, props) => ({
                    recipe: results.data.recipe,
                }))
            })
    }

    render() {
        return (
            <div className="container">
                <Nav />
                {this.state.recipe.id !== 0 ? (
                    <React.Fragment>
                        <RecipeHero
                            heroImage={this.state.recipe.hero.url}
                            recipeTitle={this.state.recipe.title}
                        />
                        <RecipeSteps
                            method={this.state.recipe.method}
                            ingredients={this.state.recipe.ingredients}
                        />
                    </React.Fragment>
                ) : (
                    ''
                )}
            </div>
        )
    }
}
