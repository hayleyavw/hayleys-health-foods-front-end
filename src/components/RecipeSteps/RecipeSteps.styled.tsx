import styled from '@emotion/styled'
import { colours } from '../styling/colours'
import { gradients } from '../styling/gradients'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { buttonBorderRadius } from '../styling/borders'

export const StyledRecipeSteps = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    top: '-150px',
    color: colours.black,
})
