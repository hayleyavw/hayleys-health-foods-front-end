import React from 'react'
import { RecipeCard } from '../RecipeCard/RecipeCard'
import { StyledRecipeList } from './RecipeList.styled'
import { getRecipeGraphQL } from '../../api/common'
import { RecipeGraphQLObject } from '../../api/DefaultObjects'

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
                {this.state.recipes.map((recipe: RecipeGraphQLObject) => (
                    <RecipeCard key={recipe['id']} recipe={recipe} />
                ))}
            </StyledRecipeList>
        )
    }
}
