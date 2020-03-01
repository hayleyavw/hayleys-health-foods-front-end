import React from 'react'
import * as H from 'history'
import { RecipeGraphQLObject } from '../api/DefaultObjects'
import { RecipeHero } from '../components/Hero/RecipeHero/RecipeHero'
import { RecipeSteps } from '../components/RecipeSteps/RecipeSteps'
import { getRecipes, getRecipeByIdGraphQL } from '../api/common'

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
    recipe: any
    slug: string
}

export class RecipePage extends React.Component<Props> {
    public readonly state: Readonly<State> = {
        recipe: new RecipeGraphQLObject(),
        slug: this.props.match.params.slug,
    }

    async componentDidMount() {
        const recipeData = await getRecipes({ slug: this.state.slug })
        getRecipeByIdGraphQL({ id: recipeData[0].id }).then(data => {
            this.setState({ recipe: data.data.recipe })
        })
    }

    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}
