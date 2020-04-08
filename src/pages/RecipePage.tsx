import React from 'react'
import * as H from 'history'
import { RecipeSteps } from '../components/RecipeSteps/RecipeSteps'
import { getRecipeBySlug, getRecipeGraphQL } from '../api/recipes/Queries'
import { RecipeGraphQLObject, RecipeObject } from '../api/recipes/ResponseShapes'
import { Hero } from '../components/Hero/Hero'
import { RecipeHead } from '../components/CustomHead/RecipeHead'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import LoadingPage from '../components/LoadingPage/LoadingPage'

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
    recipe: RecipeGraphQLObject
    loading: boolean
}

function isRecipeObject(response: RecipeObject | Error): response is RecipeObject {
    return (response as RecipeObject).title !== undefined
}

export class RecipePage extends React.Component<Props> {
    public readonly state: Readonly<State> = {
        slug: this.props.match.params.slug,
        recipe: new RecipeGraphQLObject(),
        loading: true,
    }

    async componentDidMount() {
        try {
            const response = await getRecipeBySlug({ slug: this.state.slug })
            if (isRecipeObject(response)) {
                getRecipeGraphQL({ id: response.id }).then(recipe => {
                    this.setState({ recipe: recipe })
                    this.setState({ loading: false })
                })
            }
        } catch {
            this.setState({ loading: false })
        }
    }

    render() {
        const recipe = this.state.recipe
        return (
            <React.Fragment>
                {this.state.loading ? (
                    <LoadingPage />
                ) : (
                    <React.Fragment>
                        {recipe.slug !== 'Loading...' ? (
                            <React.Fragment>
                                <RecipeHead recipe={recipe} />
                                <React.Fragment>
                                    <Hero
                                        heroImage={recipe.hero ? recipe.hero.url : ''}
                                        title={recipe.title}
                                    />
                                    <RecipeSteps
                                        method={recipe.method}
                                        ingredients={recipe.ingredients}
                                    />
                                </React.Fragment>
                            </React.Fragment>
                        ) : (
                            <ErrorPage />
                        )}
                    </React.Fragment>
                )}
            </React.Fragment>
        )
    }
}
