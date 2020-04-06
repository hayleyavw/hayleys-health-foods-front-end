import styled from '@emotion/styled'
import { StyledRecipeStepCard } from '../RecipeStepCard.styled'
import { breakpoint } from '../../styling/styling-utils/breakpoints'
import { calcRem } from '../../styling/styling-utils/calcRem'

export const StyledRecipeIngredient = styled('p')({
    margin: calcRem(6, 0),
    flexBasis: '45%',

    [breakpoint('sm')]: {
        flexBasis: '100%',
    },
})

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
