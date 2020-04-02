import React from 'react'
import { Card } from '../Card/Card'
import { StyledRecipeList } from './RecipeList.styled'
import { getRecipeGraphQL } from '../../api/recipes/Queries'
import { RecipeGraphQLObject } from '../../api/recipes/ResponseShapes'

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
                        slug={recipe.slug}
                        title={recipe.title}
                        description={recipe.description}
                        hero={recipe.hero}
                    />
                ))}
            </StyledRecipeList>
        )
    }
}
