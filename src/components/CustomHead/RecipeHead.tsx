import React from 'react'
import Helmet from 'react-helmet'
import { RecipeGraphQLObject, IngredientsGraphQLObject } from '../../api/recipes/ResponseShapes'
import { api_url } from '../../api/common'

interface Props {
    recipe: RecipeGraphQLObject
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
                        recipe.hero.url,
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
    imageURL: string,
    ingredients: IngredientsGraphQLObject[],
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
    let image = process.env.NODE_ENV !== 'production' ? `${api_url}/${imageURL}` : imageURL
    return `{
        "@context": "http://schema.org/",
        "@type": "Recipe",
        "name": "${title}",
        "image": "${image}",
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
