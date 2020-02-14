import React from 'react'
import {
    StyledRecipeList,
    StyledFeatureRecipeCard,
    StyledLatestRecipeCardsColumn,
    StyledLatestRecipeCard,
    StyledLatestRecipeCardText,
    StyledLatestRecipeImage,
    StyledLatestRecipeImageLink,
    StyledLatestRecipeDescription,
    StyledLatestRecipeCardHeadings,
} from './RecipeList.styled'
import { RecipeResponseObject } from '../../api/ResponseObjects'
import { RecipeObject } from '../../api/DefaultObjects'

interface IState {
    main_recipe: RecipeResponseObject
    recipes: []
}

interface IProps {}

export class LatestRecipeList extends React.Component<IProps, IState> {
    public readonly state: Readonly<IState> = {
        main_recipe: new RecipeObject(),
        recipes: [],
    }

    componentDidMount() {
        const api_url = process.env.REACT_APP_API_URL || ''
        fetch(`${api_url}/recipes/`)
            .then(results => {
                return results.json()
            })
            .then(data => {
                this.setState((prevState, props) => ({
                    main_recipe: data[0],
                }))
            })
        fetch(`${api_url}/recipes?_start=1&_limit=3`)
            .then(results => {
                return results.json()
            })
            .then(data => {
                this.setState({ recipes: data })
            })
    }

    render() {
        const api_url = process.env.REACT_APP_API_URL || ''
        return (
            <StyledRecipeList>
                <StyledFeatureRecipeCard>
                    <StyledLatestRecipeImageLink
                        to={`/recipes/${this.state.main_recipe['slug']}`}
                        isMainCard={true}
                    >
                        <StyledLatestRecipeImage
                            src={
                                this.state.main_recipe['hero']
                                    ? `${api_url}/${this.state.main_recipe['hero']['url']}`
                                    : ''
                            }
                        />
                    </StyledLatestRecipeImageLink>
                    <StyledLatestRecipeCardHeadings>
                        {this.state.main_recipe['title']}
                    </StyledLatestRecipeCardHeadings>
                    <StyledLatestRecipeDescription>
                        Gabion transom mizzenmast Plate Fleet topmast list heave to parrel gunwalls
                        bowsprit. Gunwalls Spanish Main sheet yard topsail belay reef sails crimp
                        rope's end aft. Broadside hardtack matey grapple barque squiffy crack Jennys
                        tea cup jolly boat plunder jury mast.
                    </StyledLatestRecipeDescription>
                </StyledFeatureRecipeCard>
                <StyledLatestRecipeCardsColumn>
                    {this.state.recipes.map(recipe => (
                        <StyledLatestRecipeCard>
                            <StyledLatestRecipeImageLink to={`/recipes/${recipe['slug']}`}>
                                <StyledLatestRecipeImage
                                    src={
                                        recipe['hero'] ? `${api_url}/${recipe['hero']['url']}` : ''
                                    }
                                />
                            </StyledLatestRecipeImageLink>
                            <StyledLatestRecipeCardText>
                                <StyledLatestRecipeCardHeadings>
                                    {recipe['title']}
                                </StyledLatestRecipeCardHeadings>
                                <StyledLatestRecipeDescription>
                                    Gabion transom mizzenmast Plate Fleet topmast list heave to
                                    parrel gunwalls bowsprit.
                                </StyledLatestRecipeDescription>
                            </StyledLatestRecipeCardText>
                        </StyledLatestRecipeCard>
                    ))}
                </StyledLatestRecipeCardsColumn>
            </StyledRecipeList>
        )
    }
}
