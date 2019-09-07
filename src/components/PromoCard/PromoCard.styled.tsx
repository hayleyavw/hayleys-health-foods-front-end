import styled from '@emotion/styled'
import { StyledHeadingThree } from '../common/Headings.styled'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { colours } from '../styling/colours'
import { cardBorderRadius } from '../styling/borders'

export const StyledPromoCard = styled('div')({
    display: 'flex',
    flex: ' 1 0 25%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: calcRem(5),
    padding: calcRem(15),
    height: '50%',
    maxWidth: `${calcRem(350)}`,
    borderRadius: cardBorderRadius,
    backgroundColor: colours.white,
})

export const StyledPromoCardText = styled(StyledHeadingThree)({
    fontSize: '2.5rem',
    color: colours.primary.primary,
})
