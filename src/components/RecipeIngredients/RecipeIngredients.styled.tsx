import styled from '@emotion/styled'
import { gradients } from '../styling/gradients'
import { colours } from '../styling/colours'

export const StyledRecipeIngredients = styled('div')({
    flexBasis: '29%',
    backgroundColor: colours.white,
    border: `3px solid ${colours.accent.accent}`,
    // borderWidth: '3px',
    // borderStyle: 'solid',
    // borderImage: `${gradients.primary_to_accent} 1`,
})
