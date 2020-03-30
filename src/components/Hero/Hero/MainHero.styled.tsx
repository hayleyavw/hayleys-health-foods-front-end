import styled from '@emotion/styled'
import { margins } from '../../styling/margin'
import { StyledHeadingThree } from '../../common/Headings.styled'
import { calcRem } from '../../styling/styling-utils/calc-rem'
import { gradients } from '../../styling/gradients'
import { breakpoint } from '../../styling/styling-utils/breakpoints'

export const StyledMainHeroWrapper = styled('div')({
    margin: `0 -${margins.bodyLeftRightMargin.sm}`,
})

export const StyledSubtitle = styled(StyledHeadingThree)({
    textShadow: `${calcRem(2)} ${calcRem(2)} ${calcRem(1)} rgba(0,0,0,0.8)`,
    fontSize: calcRem(25),

    [breakpoint('sm')]: {
        fontSize: calcRem(30),
    },

    [breakpoint('md')]: {
        fontSize: calcRem(35),
    },
})
