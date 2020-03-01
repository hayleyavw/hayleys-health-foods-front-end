import React from 'react'
import {
    StyledRecipeList,
    StyledFeatureRecipeCard,
    StyledLatestRecipeCardsColumn,
    StyledLatestRecipeCard,
    StyledLatestRecipeCardText,
    StyledLatestRecipeImage,
    StyledLatestRecipeImageLink,
    StyledLatestRecipeDescription,
    StyledLatestRecipeCardHeadings,
} from './RecipeList.styled'
import { getRecipes, api_url } from '../../api/common'

interface State {
    recipes: []
}

export class LatestRecipeList extends React.Component {
    public readonly state: Readonly<State> = {
        recipes: [],
    }

    componentDidMount() {
        getRecipes({ limit: '4' }).then(data => {
            this.setState({ recipes: data })
        })
    }

    render() {
        return (
            <StyledRecipeList>
                {this.state.recipes.map((recipe, index) => (
                    <React.Fragment key={index}>
                        {index === 0 ? (
                            <StyledFeatureRecipeCard>
                                <StyledLatestRecipeImageLink
                                    to={`/recipes/${recipe['slug']}`}
                                    isFeaturedRecipeCard={true}
                                >
                                    <StyledLatestRecipeImage
                                        src={
                                            recipe['hero']
                                                ? `${api_url}/${recipe['hero']['url']}`
                                                : ''
                                        }
                                    />
                                </StyledLatestRecipeImageLink>
                                <StyledLatestRecipeCardHeadings>
                                    {recipe['title']}
                                </StyledLatestRecipeCardHeadings>
                                <StyledLatestRecipeDescription>
                                    {recipe['description']}
                                </StyledLatestRecipeDescription>
                            </StyledFeatureRecipeCard>
                        ) : (
                            ''
                        )}
                    </React.Fragment>
                ))}
                <StyledLatestRecipeCardsColumn>
                    {this.state.recipes.map((recipe, index) => (
                        <React.Fragment key={index}>
                            {index > 0 ? (
                                <StyledLatestRecipeCard key={recipe['id']}>
                                    <StyledLatestRecipeImageLink to={`/recipes/${recipe['slug']}`}>
                                        <StyledLatestRecipeImage
                                            src={
                                                recipe['hero']
                                                    ? `${api_url}/${recipe['hero']['url']}`
                                                    : ''
                                            }
                                        />
                                    </StyledLatestRecipeImageLink>
                                    <StyledLatestRecipeCardText>
                                        <StyledLatestRecipeCardHeadings>
                                            {recipe['title']}
                                        </StyledLatestRecipeCardHeadings>
                                        <StyledLatestRecipeDescription>
                                            {recipe['description']}
                                        </StyledLatestRecipeDescription>
                                    </StyledLatestRecipeCardText>
                                </StyledLatestRecipeCard>
                            ) : (
                                ''
                            )}
                        </React.Fragment>
                    ))}
                </StyledLatestRecipeCardsColumn>
            </StyledRecipeList>
        )
    }
}
