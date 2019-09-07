import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { margins } from '../styling/margin'
import { gradients } from '../styling/gradients'

export const StyledPromoCardRow = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '60vh',
    margin: `${calcRem(20)} -${margins.leftAndRightMargins}`,
    background: gradients.primary_to_accent,
})
