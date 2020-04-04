import React from 'react'
import * as H from 'history'
import { RecipeSteps } from '../components/RecipeSteps/RecipeSteps'
import { getRecipeBySlug, getRecipeGraphQL } from '../api/recipes/Queries'
import { RecipeGraphQLObject } from '../api/recipes/ResponseShapes'
import { Hero } from '../components/Hero/Hero'
import { RecipeHead } from '../components/CustomHead/RecipeHead'

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
}

export class RecipePage extends React.Component<Props> {
    public readonly state: Readonly<State> = {
        slug: this.props.match.params.slug,
        recipe: new RecipeGraphQLObject(),
    }

    async componentDidMount() {
        const recipe = await getRecipeBySlug({ slug: this.state.slug })
        getRecipeGraphQL({ id: recipe.id }).then(recipe => {
            this.setState({ recipe: recipe })
        })
    }

    render() {
        const recipe = this.state.recipe
        return (
            <React.Fragment>
                <RecipeHead recipe={recipe} />
                {recipe !== undefined ? (
                    <React.Fragment>
                        <Hero heroImage={recipe.hero ? recipe.hero.url : ''} title={recipe.title} />
                        <RecipeSteps method={recipe.method} ingredients={recipe.ingredients} />
                    </React.Fragment>
                ) : (
                    ''
                )}
            </React.Fragment>
        )
    }
}
