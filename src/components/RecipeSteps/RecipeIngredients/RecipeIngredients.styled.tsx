import styled from '@emotion/styled'
import { StyledRecipeStepCard } from '../RecipeStepCard.styled'
import { breakpoint } from '../../styling/styling-utils/breakpoints'
import { calcRem } from '../../styling/styling-utils/calcRem'
import { keyframes } from '@emotion/core'

interface StyledRecipeIngredientProps {
    checked?: boolean
}

export const StyledRecipeIngredient = styled('div')<StyledRecipeIngredientProps>(({ checked }) => ({
    margin: calcRem(6, 0),
    flexBasis: '45%',
    transition: '1s',

    span: {
        textDecoration: checked ? 'line-through' : undefined,
        opacity: checked ? 0.4 : 1,
        transition: '0.3s',
    },

    [breakpoint('sm')]: {
        flexBasis: '100%',
    },
}))

export const StyledRecipeIngredients = styled(StyledRecipeStepCard)({
    flexBasis: '100%',
    columnCount: 2,
    display: 'flex',
    flexWrap: 'wrap',

    [breakpoint('sm')]: {
        flexBasis: '27%',
        columnCount: 1,
    },
})

export const StyledRecipeIngredientsWrapper = styled('div')({
    width: '100%',

    [breakpoint('sm')]: {
        width: '27%',
    },
})
