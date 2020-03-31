import React from 'react'
import {
    StyledLatestRecipeList,
    StyledFeatureRecipeCard,
    StyledLatestRecipeCardsColumn,
    StyledLatestRecipeCard,
    StyledLatestRecipeCardText,
    StyledLatestRecipeImage,
    StyledLatestRecipeImageLink,
    StyledLatestRecipeDescription,
    StyledLatestRecipeCardHeadings,
} from './LatestRecipeList.styled'
import { RecipeGraphQLObject } from '../../api/recipes/ResponseShapes'
import { getRecipeGraphQL } from '../../api/recipes/Queries'
import { api_url } from '../../api/common'

interface State {
    recipes: RecipeGraphQLObject[]
}

export class LatestRecipeList extends React.Component {
    public readonly state: Readonly<State> = {
        recipes: [new RecipeGraphQLObject()],
    }

    componentDidMount() {
        getRecipeGraphQL({ limit: '4' }).then(recipes => {
            this.setState({ recipes: recipes })
        })
    }

    render() {
        return (
            <StyledLatestRecipeList>
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
                                <StyledLatestRecipeDescription isFeaturedRecipeCard={true}>
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
            </StyledLatestRecipeList>
        )
    }
}
