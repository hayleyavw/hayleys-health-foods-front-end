import styled from '@emotion/styled'
import { gradients } from '../styling/gradients'
import { colours } from '../styling/colours'

export const StyledRecipeMethod = styled('div')({
    flexBasis: '69%',
    backgroundColor: colours.white,
    border: `3px solid ${colours.primary.primary}`,
    // borderWidth: '3px',
    // borderStyle: 'solid',
    // borderImage: `${gradients.primary_to_accent} 1`,
})
