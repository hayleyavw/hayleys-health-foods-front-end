import React from 'react'
import { Card } from '../Card/Card'
import { StyledRecipeList } from './RecipeList.styled'
import { getRecipeGraphQL } from '../../api/recipes/Queries'
import { RecipeGraphQLObject } from '../../api/recipes/ResponseShapes'
import { api_url } from '../../api/common'

interface State {
    recipes: RecipeGraphQLObject[]
}

export class RecipeList extends React.Component {
    public readonly state: Readonly<State> = {
        recipes: [new RecipeGraphQLObject()],
    }

    componentDidMount() {
        getRecipeGraphQL({}).then(recipe => {
            this.setState({ recipes: recipe })
        })
    }

    render() {
        return (
            <StyledRecipeList>
                {this.state.recipes.map((recipe: RecipeGraphQLObject, index) => (
                    <Card
                        key={index}
                        url={`/recipes/${recipe.slug}`}
                        title={recipe.title}
                        description={recipe.description}
                        heroURL={
                            process.env.NODE_ENV !== 'production'
                                ? `${api_url}/${recipe.hero.url}`
                                : recipe.hero.url
                        }
                    />
                ))}
            </StyledRecipeList>
        )
    }
}
