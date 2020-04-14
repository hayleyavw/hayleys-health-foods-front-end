import React from 'react'
import Helmet from 'react-helmet'
import { Recipe, Ingredients } from '../../api/recipes/ResponseShapes'
import { getStaticFilesPrefix } from '../../utils/utils'

interface Props {
    recipe: Recipe
}

export class RecipeHead extends React.Component<Props> {
    render() {
        const { recipe } = this.props
        return (
            <Helmet>
                <title>{recipe.title}</title>
                <meta name="description" content={`${recipe.description}`} />
                <script type="application/ld+json">
                    {generateRecipeStructuredData(
                        recipe.title,
                        recipe.thumbnail.url,
                        recipe.ingredients,
                        recipe.method
                    )}
                </script>
            </Helmet>
        )
    }
}

const generateRecipeStructuredData = (
    title: string,
    imageUrl: string,
    ingredients: Ingredients[],
    method: string
) => {
    const numIngredients = ingredients.length
    let ingredientString = ''
    ingredients.forEach(function(ingredient, index) {
        ingredientString += `"${ingredient.quantity} ${ingredient.ingredient.name}"${
            index < numIngredients - 1 ? ',' : ''
        }`
    })
    let methodStepsRaw = method.split('\n')
    let methodSteps: string[] = []
    let methodString = ''
    methodStepsRaw.forEach(function(step) {
        if (step.length > 0) {
            methodSteps.push(step)
        }
    })
    const numMethodSteps = methodSteps.length
    methodSteps.forEach(function(step, index) {
        if (step.length > 0) {
            methodString += `{
                "@type": "HowToStep",
                "text": "${step}"
            }${index < numMethodSteps - 1 ? ',' : ''}`
        }
    })
    return `{
        "@context": "http://schema.org/",
        "@type": "Recipe",
        "name": "${title}",
        "image": "${getStaticFilesPrefix()}${imageUrl}",
        "author": {
            "@type": "Person",
            "name": "Hayley van Waas"
        },
        "description": "${title} recipe designed with gut health in mind.",
        "recipeIngredient": [
            ${ingredientString}
        ],
        "recipeInstructions": [
            ${methodString}
        ]
    }`
}
