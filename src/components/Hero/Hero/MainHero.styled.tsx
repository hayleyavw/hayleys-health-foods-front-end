import styled from '@emotion/styled'
import { StyledHeadingThree } from '../../common/Headings.styled'
import { calcRem } from '../../styling/styling-utils/calc-rem'
import { breakpoint } from '../../styling/styling-utils/breakpoints'

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
