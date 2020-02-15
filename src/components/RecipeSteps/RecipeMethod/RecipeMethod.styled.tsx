import styled from '@emotion/styled'
import { StyledRecipeStepCard } from '../RecipeStepCard.styled'
import { colours } from '../../styling/colours'
import { calcRem } from '../../styling/styling-utils/calc-rem'

export const StyledRecipeMethod = styled(StyledRecipeStepCard)({
    flexBasis: '66%',
    borderColor: colours.primary.primary,
    ol: {
        paddingInlineStart: calcRem(18),
    },
})
