import React from 'react'
import { Card } from '../Card/Card'
import { StyledRecipeList, StyledRecipeListWrapper } from './RecipeList.styled'
import { getRecipeGraphQL, getRecipesByTags } from '../../api/recipes/Queries'
import { Recipe } from '../../api/recipes/ResponseShapes'
import Loading from '../Loading/Loading'

interface RecipeListProps {
    tagStatus: {
        gf: boolean
        df: boolean
        nf: boolean
        vege: boolean
        vegan: boolean
    }
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
            let tagList = []
            if (this.props.tagStatus.gf) {
                tagList.push('gf')
            }
            if (this.props.tagStatus.df) {
                tagList.push('df')
            }
            if (this.props.tagStatus.nf) {
                tagList.push('nf')
            }
            if (this.props.tagStatus.vege) {
                tagList.push('vege')
            }
            if (this.props.tagStatus.vegan) {
                tagList.push('vegan')
            }
            if (tagList.length === 0) {
                await getRecipeGraphQL({}).then(recipe => {
                    this.setState({ recipes: recipe })
                    this.setState({ loading: false })
                })
            } else {
                await getRecipesByTags(tagList).then(recipes => {
                    this.setState({ recipes: recipes })
                    this.setState({ loading: false })
                })
            }
        } catch {
            this.setState({ loading: false })
        }
    }

    async componentDidUpdate(prevProps: RecipeListProps) {
        if (JSON.stringify(this.props.tagStatus) !== JSON.stringify(prevProps.tagStatus)) {
            try {
                let tagList = []
                if (this.props.tagStatus.gf) {
                    tagList.push('gf')
                }
                if (this.props.tagStatus.df) {
                    tagList.push('df')
                }
                if (this.props.tagStatus.nf) {
                    tagList.push('nf')
                }
                if (this.props.tagStatus.vege) {
                    tagList.push('vege')
                }
                if (this.props.tagStatus.vegan) {
                    tagList.push('vegan')
                }
                console.log(tagList)
                this.setState({ loading: true })
                if (tagList.length === 0) {
                    await getRecipeGraphQL({}).then(recipe => {
                        this.setState({ recipes: recipe })
                        this.setState({ loading: false })
                    })
                } else {
                    await getRecipesByTags(tagList).then(recipes => {
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
