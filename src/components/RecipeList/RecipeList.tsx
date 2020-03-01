import React from 'react'
import { RecipeCard } from '../RecipeCard/RecipeCard'
import { StyledRecipeList } from './RecipeList.styled'
import { getRecipeGraphQL } from '../../api/common'

interface State {
    recipes: []
}

export class RecipeList extends React.Component {
    public readonly state: Readonly<State> = {
        recipes: [],
    }

    componentDidMount() {
        getRecipeGraphQL({}).then(data => {
            this.setState({ recipes: data.data.recipes })
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
