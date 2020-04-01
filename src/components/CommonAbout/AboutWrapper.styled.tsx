import styled from '@emotion/styled'
import { breakpoint } from '../styling/styling-utils/breakpoints'
import { calcRem } from '../styling/styling-utils/calc-rem'

export const StyledAboutWrapper = styled('div')({
    textAlign: 'justify',
    margin: calcRem(0, 0, 10),

    [breakpoint('sm')]: {
        flexWrap: 'wrap',
        margin: calcRem(0, 32, 30),
    },

    [breakpoint('md')]: {
        margin: calcRem(0, 96, 50),
        fontSize: calcRem(16),
    },

    [breakpoint('lg')]: {
        margin: '0 auto 50px',
        maxWidth: calcRem(850),
    },
})
