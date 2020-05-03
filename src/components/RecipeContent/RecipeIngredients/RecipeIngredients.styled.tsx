import styled from '@emotion/styled'
import { breakpoint } from '../../styling/styling-utils/breakpoints'
import { calcRem } from '../../styling/styling-utils/calcRem'
import { colours } from '../../styling/colours'
import { gradients } from '../../styling/gradients'

interface StyledRecipeIngredientProps {
    checked?: boolean
}

export const StyledRecipeIngredient = styled('div')<StyledRecipeIngredientProps>(({ checked }) => ({
    margin: calcRem(6, 0),
    flexBasis: '45%',
    transition: '1s',

    span: {
        textDecoration: checked ? 'line-through' : undefined,
        color: checked ? colours.grey : undefined,
        transition: '0.3s',
    },

    [breakpoint('sm')]: {
        flexBasis: '100%',
    },
}))

export const StyledRecipeIngredients = styled('div')({
    flexBasis: '100%',
    columnCount: 2,
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',

    [breakpoint('sm')]: {
        flexBasis: '27%',
        columnCount: 1,
    },
})

export const StyledRecipeIngredientsWrapper = styled('div')({
    width: '100%',
    position: 'sticky',
    top: 0,
    maxHeight: '70vh',
    background: colours.white,

    [breakpoint('sm')]: {
        width: '29%',
        top: undefined,
        overflow: 'scroll',
        maxHeight: '100vh',
    },
})

export const StyledIngredientsGradientLine = styled('div')({
    height: calcRem(2),
    background: gradients.primary_to_accent,

    [breakpoint('sm')]: {
        display: 'none',
    },
})
