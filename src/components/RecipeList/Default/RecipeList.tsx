import React from 'react'
import { Recipe } from '../../../api/recipes/ResponseShapes'
import { getRecipeGraphQL, getRecipesByTags } from '../../../api/recipes/Queries'
import { StyledRecipeListWrapper, StyledRecipeList } from './RecipeList.styled'
import Loading from '../../Loading/Loading'
import { Card } from '../../Card/Card'

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
                await getRecipeGraphQL({ preview: true }).then(recipes => {
                    this.setState({ recipes: recipes })
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
                this.setState({ loading: true })
                if (tagList.length === 0) {
                    await getRecipeGraphQL({ preview: true }).then(recipe => {
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
                                page={'Home Page'}
                            />
                        ))}
                    </StyledRecipeList>
                )}
            </StyledRecipeListWrapper>
        )
    }
}
