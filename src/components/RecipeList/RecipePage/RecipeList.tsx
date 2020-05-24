import React from 'react'
import ReactGA from 'react-ga'
import { Recipe } from '../../../api/recipes/ResponseShapes'
import { getRecipeGraphQL } from '../../../api/recipes/Queries'
import Loading from '../../Loading/Loading'
import { Card } from '../../Card/Card'
import {
    StyledRecipeListWrapper,
    StyledRecipeList,
    StyledRecipeListButtonLink,
    StyledRecipeListButtonLinkImage,
    StyledRecipeListButtonLinkText,
    StyledButtonLinkImageWrapper,
} from './RecipeList.styled'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface RecipeListProps {
    recipeTitle: string
}

interface State {
    recipes: Recipe[]
    loading: boolean
}

class RecipeList extends React.Component<RecipeListProps & RouteComponentProps> {
    public readonly state: Readonly<State> = {
        recipes: [new Recipe()],
        loading: true,
    }

    async componentDidMount() {
        try {
            await getRecipeGraphQL({ preview: true, limit: '3' }).then(recipes => {
                this.setState({ recipes: recipes })
                this.setState({ loading: false })
            })
        } catch {
            this.setState({ loading: false })
        }
    }

    render() {
        const { recipeTitle } = this.props
        const arrow = require('../../../assets/arrow.png')
        return (
            <StyledRecipeListWrapper className={'recipe-list'}>
                {this.state.loading ? (
                    <React.Fragment>
                        <Loading />
                    </React.Fragment>
                ) : (
                    <StyledRecipeList>
                        {this.state.recipes.map((recipe: Recipe, index) => (
                            <Card
                                key={index}
                                url={`/recipes/${recipe.slug}`}
                                title={recipe.title}
                                description={recipe.description}
                                thumbnail={recipe.thumbnail.url}
                                tags={recipe.tags}
                                page={recipeTitle}
                            />
                        ))}
                        <StyledRecipeListButtonLink
                            href="/"
                            onClick={() => {
                                ReactGA.event({
                                    category: recipeTitle,
                                    action: 'Button click',
                                    label: 'View All Recipes',
                                })
                            }}
                        >
                            <StyledButtonLinkImageWrapper
                                className={'recipe-list-view-all-image-wrapper'}
                            >
                                <StyledRecipeListButtonLinkImage src={arrow} alt={'Arrow.'} />
                            </StyledButtonLinkImageWrapper>
                            <StyledRecipeListButtonLinkText>
                                See All Recipes
                            </StyledRecipeListButtonLinkText>
                        </StyledRecipeListButtonLink>
                    </StyledRecipeList>
                )}
            </StyledRecipeListWrapper>
        )
    }
}

export const RecipeListComponent = withRouter(RecipeList)
