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
        fetch('http://localhost:5000/recipes?offset=5')
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
                    <RecipeCard
                        key={recipe['id']}
                        title={recipe['title']}
                        dateAdded={recipe['date_added']}
                        method={recipe['method']}
                        slug={recipe['slug']}
                        id={recipe['id']}
                    />
                ))}
            </StyledRecipeList>
        )
    }
}
