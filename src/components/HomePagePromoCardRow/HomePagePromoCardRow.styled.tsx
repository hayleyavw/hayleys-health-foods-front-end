import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { margins } from '../styling/margin'
import { breakpoint } from '../styling/styling-utils/breakpoints'
import { ButtonLink } from '../ButtonLink/ButtonLink'

export const StyledPromoCardRow = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    margin: `${calcRem(20)} -${margins.bodyLeftRightMargin.sm}`,
    padding: calcRem(8),
    backgroundColor: '#efefef',

    [breakpoint('md')]: {
        padding: calcRem(48),
        height: undefined,
        flexWrap: 'nowrap',
    },
})
