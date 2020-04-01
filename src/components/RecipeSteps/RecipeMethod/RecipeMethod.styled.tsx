import styled from '@emotion/styled'
import { StyledRecipeStepCard } from '../RecipeStepCard.styled'
import { calcRem } from '../../styling/styling-utils/calc-rem'
import { breakpoint } from '../../styling/styling-utils/breakpoints'

export const StyledRecipeMethod = styled(StyledRecipeStepCard)({
    flexBasis: '100%',

    ol: {
        paddingInlineStart: calcRem(18),
    },

    [breakpoint('sm')]: {
        flexBasis: '66%',
    },
})
