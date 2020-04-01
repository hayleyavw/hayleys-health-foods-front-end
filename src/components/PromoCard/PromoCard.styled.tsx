import styled from '@emotion/styled'
import { StyledHeadingTwo } from '../common/Headings.styled'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { colours } from '../styling/colours'
import { cardBorderRadius } from '../styling/borders'
import { breakpoint } from '../styling/styling-utils/breakpoints'

export const StyledPromoCard = styled('div')({
    display: 'flex',
    flex: '1 0 25%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    flexBasis: '90%',
    maxWidth: '90%',
    textAlign: 'center',
    margin: calcRem(5),
    padding: calcRem(15),
    borderRadius: cardBorderRadius,
    backgroundColor: colours.white,

    [breakpoint('md')]: {
        flexBasis: '30%',
        height: '50%',
    },
})

export const StyledPromoCardText = styled(StyledHeadingTwo)({
    fontSize: calcRem(30),
    margin: 0,

    [breakpoint('md')]: {
        fontSize: calcRem(40),
    },
})
