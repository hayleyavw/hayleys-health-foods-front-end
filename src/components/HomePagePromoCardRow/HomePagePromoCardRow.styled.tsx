import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { gradients } from '../styling/gradients'
import { margins } from '../styling/margin'
import { breakpoint } from '../styling/styling-utils/breakpoints'

export const StyledPromoCardRow = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    margin: `${calcRem(20)} -${margins.bodyLeftRightMargin.sm}`,
    padding: margins.bodyLeftRightMargin.sm,
    background: gradients.primary_to_accent,

    [breakpoint('md')]: {
        flexWrap: 'nowrap',
        height: '40vh',
    },
})
