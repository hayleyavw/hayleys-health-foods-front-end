import React from 'react'
import {
    StyledLatestRecipeList,
    StyledLatestRecipeCard,
    StyledLatestRecipeImage,
    StyledLatestRecipeCardHeadings,
    StyledLatestRecipeDescription,
} from './LatestRecipeList.styled'
import { Recipe } from '../../api/recipes/ResponseShapes'
import { getRecipeGraphQL } from '../../api/recipes/Queries'
import Loading from '../Loading/Loading'
import { getStaticFilesPrefix } from '../../utils/utils'

interface State {
    recipes: Recipe[]
    loading: boolean
}

export class LatestRecipeList extends React.Component {
    public readonly state: Readonly<State> = {
        recipes: [new Recipe()],
        loading: true,
    }

    async componentDidMount() {
        await getRecipeGraphQL({ limit: '4' }).then(recipes => {
            this.setState({ recipes: recipes })
            this.setState({ loading: false })
        })
    }

    render() {
        let recipes = this.state.recipes
        recipes.forEach(recipe => {
            if (recipe.description.length > 120) {
                recipe.description = `${recipe.description.slice(0, 120)}...`
            }
        })

        return (
            <React.Fragment>
                {this.state.loading ? (
                    <React.Fragment>
                        <Loading />
                    </React.Fragment>
                ) : (
                    <StyledLatestRecipeList>
                        {recipes.map((recipe, index) => (
                            <StyledLatestRecipeCard
                                key={index}
                                id={`latest-recipe-image-${index}`}
                                to={`/recipes/${recipe.slug}`}
                                className={'latest-recipe-image'}
                            >
                                <StyledLatestRecipeImage
                                    src={
                                        recipe.thumbnail
                                            ? `${getStaticFilesPrefix()}${recipe.thumbnail.url}`
                                            : ''
                                    }
                                />
                            </StyledLatestRecipeCard>
                        ))}
                        {this.state.recipes.map((recipe, index) => (
                            <StyledLatestRecipeCard
                                key={index}
                                id={`latest-recipe-text-${index}`}
                                to={`/recipes/${recipe['slug']}`}
                            >
                                <StyledLatestRecipeCardHeadings className="latest-recipe-heading">
                                    {recipe['title']}
                                </StyledLatestRecipeCardHeadings>
                                <StyledLatestRecipeDescription>
                                    {recipe['description']}
                                </StyledLatestRecipeDescription>
                            </StyledLatestRecipeCard>
                        ))}
                    </StyledLatestRecipeList>
                )}
            </React.Fragment>
        )
    }
}
