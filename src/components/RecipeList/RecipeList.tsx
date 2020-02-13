import React from 'react'
import { RecipeCard } from '../RecipeCard/RecipeCard'
import { StyledRecipeList } from './RecipeList.styled'

interface State {
    recipes: []
}

export class RecipeList extends React.Component {
    public readonly state: Readonly<State> = {
        recipes: [],
    }

    componentDidMount() {
        const api_url = process.env.REACT_APP_API_URL || ''
        fetch(`${api_url}/recipes?_start=1`)
            .then(results => {
                return results.json()
            })
            .then(data => {
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
