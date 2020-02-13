import React from 'react'
import { RecipeCard } from '../RecipeCard/RecipeCard'
import {
    StyledRecipeList,
    StyledLargeLeftCard,
    StyledRightColumnCards,
    StyledRightColumnCard,
    StyledRightColumnCardText,
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
        fetch(`${api_url}/recipes/?_limit=4`)
            .then(results => {
                return results.json()
            })
            .then(data => {
                this.setState((prevState, props) => ({
                    main_recipe: data[0],
                }))
            })
        fetch(`${api_url}/recipes`)
            .then(results => {
                return results.json()
            })
            .then(data => {
                this.setState({ recipes: data })
            })
    }

    mainCard = () => {
        const main_recipe = this.state.main_recipe
        if (main_recipe.id) {
            return (
                <RecipeCard
                    key={main_recipe['id']}
                    title={main_recipe['title']}
                    createdAt={main_recipe['created_at']}
                    method={main_recipe['method']}
                    slug={main_recipe['slug']}
                    id={main_recipe['id']}
                    hero={main_recipe['hero']}
                />
            )
        }
    }

    render() {
        return (
            <StyledRecipeList>
                <StyledLargeLeftCard>
                    {this.mainCard()}
                    <p>{this.state.main_recipe['title']}</p>
                    <p>
                        Gabion transom mizzenmast Plate Fleet topmast list heave to parrel gunwalls
                        bowsprit. Gunwalls Spanish Main sheet yard topsail belay reef sails crimp
                        rope's end aft. Broadside hardtack matey grapple barque squiffy crack Jennys
                        tea cup jolly boat plunder jury mast.
                    </p>
                </StyledLargeLeftCard>
                <StyledRightColumnCards>
                    {this.state.recipes.map(recipe => (
                        <StyledRightColumnCard>
                            <RecipeCard
                                key={recipe['id']}
                                title={recipe['title']}
                                createdAt={recipe['createdAt']}
                                method={recipe['method']}
                                slug={recipe['slug']}
                                id={recipe['id']}
                                hero={recipe['hero']}
                            />
                            <StyledRightColumnCardText>
                                <p>{recipe['title']}</p>
                                <p>
                                    Gabion transom mizzenmast Plate Fleet topmast list heave to
                                    parrel gunwalls bowsprit.
                                </p>
                            </StyledRightColumnCardText>
                        </StyledRightColumnCard>
                    ))}
                </StyledRightColumnCards>
            </StyledRecipeList>
        )
    }
}
