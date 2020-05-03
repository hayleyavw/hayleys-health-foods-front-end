import styled from '@emotion/styled'
import { StyledRecipeStepCard } from '../StaticRecipeStepCard.styled'
import { breakpoint } from '../../styling/styling-utils/breakpoints'
import { calcRem } from '../../styling/styling-utils/calcRem'
import { colours } from '../../styling/colours'
import { gradients } from '../../styling/gradients'

interface StyledStaticRecipeIngredientProps {
    checked?: boolean
}

export const StyledStaticRecipeIngredient = styled('div')<StyledStaticRecipeIngredientProps>(
    ({ checked }) => ({
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
    })
)

export const StyledStaticRecipeIngredients = styled(StyledRecipeStepCard)({
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

export const StyledStaticRecipeIngredientsWrapper = styled('div')({
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

export const StyledStaticIngredientsGradientLine = styled('div')({
    height: calcRem(2),
    background: gradients.primary_to_accent,

    [breakpoint('sm')]: {
        display: 'none',
    },
})
