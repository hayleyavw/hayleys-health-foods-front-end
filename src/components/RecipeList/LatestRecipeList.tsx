import React from 'react'
import { RecipeCard } from '../RecipeCard/RecipeCard'
import {
    StyledRecipeList,
    StyledLargeLeftCard,
    StyledRightColumnCards,
    StyledRightColumnCard,
    StyledRightColumnCardText,
} from './RecipeList.styled'

interface Recipe {
    id: number | undefined
    date_added: string
    method: string
    slug: string
    title: string
}

interface IState {
    main_recipe: Recipe
    recipes: []
}

interface IProps {}

export class LatestRecipeList extends React.Component<IProps, IState> {
    public readonly state: Readonly<IState> = {
        main_recipe: {
            id: undefined,
            date_added: '',
            method: '',
            slug: '',
            title: '',
        },
        recipes: [],
    }

    componentDidMount() {
        fetch('http://localhost:5000/recipes?count=1')
            .then(results => {
                return results.json()
            })
            .then(data => {
                this.setState((prevState, props) => ({
                    main_recipe: data[0],
                }))
            })
        fetch('http://localhost:5000/recipes?count=3&offset=1')
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
                    dateAdded={main_recipe['date_added']}
                    method={main_recipe['method']}
                    slug={main_recipe['slug']}
                    id={main_recipe['id']}
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
                                dateAdded={recipe['date_added']}
                                method={recipe['method']}
                                slug={recipe['slug']}
                                id={recipe['id']}
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
