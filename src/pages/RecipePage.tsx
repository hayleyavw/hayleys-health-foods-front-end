import React from 'react'
import * as H from 'history'
import { StaticRecipeSteps } from '../components/StaticRecipeSteps/StaticRecipeSteps'
import { getRecipeGraphQL } from '../api/recipes/Queries'
import { Recipe } from '../api/recipes/ResponseShapes'
import { Hero } from '../components/Hero/Hero'
import { RecipeHead } from '../components/CustomHead/RecipeHead'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import Loading from '../components/Loading/Loading'
import { StyledContentBox } from '../components/common/ContentBox.styled'
import { jsonld } from '../components/common/jsonld'
import Helmet from 'react-helmet'
import { RecipeContent } from '../components/RecipeContent/RecipeContent'
import { RecipePageButtonLinkRow } from '../components/ButtonLinkRow/RecipePageButtonLinkRow'
import { StyledHeadingTwo } from '../components/common/Headings.styled'
import { RecipeListComponent } from '../components/RecipeList/RecipePage/RecipeList'

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
    recipe: Recipe
    loading: boolean
}

export class RecipePage extends React.Component<Props> {
    public readonly state: Readonly<State> = {
        slug: this.props.match.params.slug,
        recipe: new Recipe(),
        loading: true,
    }

    async componentDidMount() {
        try {
            getRecipeGraphQL({ slug: this.state.slug }).then(recipe => {
                this.setState({ recipe: recipe })
                this.setState({ loading: false })
            })
        } catch {
            this.setState({ loading: false })
            this.setState({ recipe: null })
        }
    }

    render() {
        const recipe = this.state.recipe
        return (
            <React.Fragment>
                {this.state.loading ? (
                    <React.Fragment>
                        <Helmet>
                            <script type="application/ld+json">{jsonld}</script>
                        </Helmet>
                        <StyledContentBox>
                            <Loading />
                        </StyledContentBox>
                    </React.Fragment>
                ) : recipe !== null ? (
                    <React.Fragment>
                        <RecipeHead recipe={recipe} />
                        <React.Fragment>
                            <Hero
                                smallImage={recipe.thumbnail}
                                mediumImage={recipe.mediumImage}
                                largeImage={recipe.largeImage}
                                title={recipe.title}
                                tags={recipe.tags}
                                recipeYield={recipe.yield}
                                prepTime={recipe.prepTime}
                                cookTime={recipe.cookTime}
                            />
                            {recipe.useSteps ? (
                                <RecipeContent recipe={recipe} />
                            ) : (
                                <StaticRecipeSteps
                                    recipeTitle={recipe.title}
                                    method={recipe.method}
                                    ingredients={recipe.ingredients}
                                />
                            )}
                            <RecipePageButtonLinkRow recipeTitle={recipe.title} />
                            <StyledHeadingTwo>Check out these other recipes...</StyledHeadingTwo>
                            <RecipeListComponent recipeTitle={recipe.title} />
                        </React.Fragment>
                    </React.Fragment>
                ) : (
                    <ErrorPage />
                )}
            </React.Fragment>
        )
    }
}
