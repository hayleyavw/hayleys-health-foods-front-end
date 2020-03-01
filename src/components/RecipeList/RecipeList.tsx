import React from 'react'
import { RecipeCard } from '../RecipeCard/RecipeCard'
import { StyledRecipeList } from './RecipeList.styled'
import { getRecipes } from '../../api/common'

interface State {
    recipes: []
}

export class RecipeList extends React.Component {
    public readonly state: Readonly<State> = {
        recipes: [],
    }

    componentDidMount() {
        getRecipes({}).then(data => {
            this.setState({ recipes: Object.values(data) })
        })
    }

    render() {
        return (
            <StyledRecipeList>
                {this.state.recipes.map(recipe => (
                    <RecipeCard key={recipe['id']} recipe={recipe} />
                ))}
            </StyledRecipeList>
        )
    }
}
