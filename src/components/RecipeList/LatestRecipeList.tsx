import React from 'react'
import {
    StyledLatestRecipeList,
    StyledLatestRecipeCard,
    StyledLatestRecipeImage,
    StyledLatestRecipeCardHeadings,
    StyledLatestRecipeDescription,
    StyledLatestRecipeCardText,
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
        let recipes = this.state.recipes
        recipes.forEach(recipe => {
            if (recipe.description.length > 100) {
                recipe.description = `${recipe.description.slice(0, 150)}...`
            }
        })
        console.log(recipes)
        return (
            <StyledLatestRecipeList>
                {recipes.map((recipe, index) => (
                    <StyledLatestRecipeCard
                        key={index}
                        id={`latest-recipe-image-${index}`}
                        to={`/recipes/${recipe['slug']}`}
                        className={'latest-recipe-image'}
                    >
                        <StyledLatestRecipeImage
                            src={recipe['hero'] ? `${api_url}/${recipe['hero']['url']}` : ''}
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
        )
    }
}
