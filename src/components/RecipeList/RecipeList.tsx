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
        // fetch('http://localhost:5000/recipes?offset=4')
        const api_url = process.env.REACT_APP_API_URL || ''
        fetch(`${api_url}/recipes`)
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
                        createdAt={recipe['created_at']}
                        method={recipe['method']}
                        slug={recipe['slug']}
                        id={recipe['id']}
                        hero={recipe['hero']}
                    />
                ))}
            </StyledRecipeList>
        )
    }
}
