import React from 'react'
import { Card } from '../Card/Card'
import { StyledRecipeList, StyledRecipeListWrapper } from './RecipeList.styled'
import { getRecipeGraphQL, getRecipesByTags } from '../../api/recipes/Queries'
import { Recipe, TagObject } from '../../api/recipes/ResponseShapes'
import Loading from '../Loading/Loading'

interface RecipeListProps {
    tags: TagObject[] | null
}
interface State {
    recipes: Recipe[]
    loading: boolean
}

export class RecipeList extends React.Component<RecipeListProps> {
    public readonly state: Readonly<State> = {
        recipes: [new Recipe()],
        loading: true,
    }

    async componentDidMount() {
        try {
            if (this.props.tags === null) {
                await getRecipeGraphQL({}).then(recipe => {
                    this.setState({ recipes: recipe })
                    this.setState({ loading: false })
                })
            } else {
                await getRecipesByTags(this.props.tags).then(recipes => {
                    this.setState({ recipes: recipes })
                    this.setState({ loading: false })
                })
            }
        } catch {
            this.setState({ loading: false })
        }
    }

    async componentDidUpdate(prevProps: RecipeListProps) {
        if (JSON.stringify(this.props.tags) !== JSON.stringify(prevProps.tags)) {
            try {
                this.setState({ loading: true })
                if (this.props.tags === null) {
                    await getRecipeGraphQL({}).then(recipe => {
                        this.setState({ recipes: recipe })
                        this.setState({ loading: false })
                    })
                } else {
                    await getRecipesByTags(this.props.tags).then(recipes => {
                        this.setState({ recipes: recipes })
                        this.setState({ loading: false })
                    })
                }
            } catch {
                this.setState({ loading: false })
            }
        }
    }

    render() {
        return (
            <StyledRecipeListWrapper className={'recipe-list'}>
                {this.state.loading ? (
                    <React.Fragment>
                        <Loading />
                    </React.Fragment>
                ) : (
                    <StyledRecipeList>
                        {this.state.recipes.map((recipe: Recipe, index) => (
                            <Card
                                key={index}
                                url={`/recipes/${recipe.slug}`}
                                title={recipe.title}
                                description={recipe.description}
                                thumbnail={recipe.thumbnail.url}
                                tags={recipe.tags}
                            />
                        ))}
                    </StyledRecipeList>
                )}
            </StyledRecipeListWrapper>
        )
    }
}
