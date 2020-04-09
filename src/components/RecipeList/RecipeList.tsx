import React from 'react'
import { Card } from '../Card/Card'
import { StyledRecipeList } from './RecipeList.styled'
import { getRecipeGraphQL } from '../../api/recipes/Queries'
import { RecipeGraphQLObject } from '../../api/recipes/ResponseShapes'
import { api_url } from '../../api/common'
import Loading from '../Loading/Loading'

interface State {
    recipes: RecipeGraphQLObject[]
    loading: boolean
}

export class RecipeList extends React.Component {
    public readonly state: Readonly<State> = {
        recipes: [new RecipeGraphQLObject()],
        loading: true,
    }

    async componentDidMount() {
        try {
            await getRecipeGraphQL({}).then(recipe => {
                this.setState({ recipes: recipe })
                this.setState({ loading: false })
            })
        } catch {
            this.setState({ loading: false })
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.loading ? (
                    <React.Fragment>
                        <Loading />
                    </React.Fragment>
                ) : (
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
                )}
            </React.Fragment>
        )
    }
}
