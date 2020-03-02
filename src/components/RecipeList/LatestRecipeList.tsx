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
import { api_url, getRecipeGraphQL } from '../../api/common'
import { RecipeGraphQLObject } from '../../api/DefaultObjects'

interface State {
    recipes: RecipeGraphQLObject[]
}

export class LatestRecipeList extends React.Component {
    public readonly state: Readonly<State> = {
        recipes: [new RecipeGraphQLObject()],
    }

    componentDidMount() {
        getRecipeGraphQL({ limit: '4' }).then(recipe => {
            this.setState({ recipes: recipe })
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
