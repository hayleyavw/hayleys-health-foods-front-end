import styled from '@emotion/styled'
import { breakpoint } from '../styling/styling-utils/breakpoints'
import { calcRem } from '../styling/styling-utils/calcRem'

export const StyledContentBox = styled('div')({
    textAlign: 'justify',
    margin: calcRem(0, 0, 30),
    lineHeight: calcRem(24),
    fontSize: calcRem(16),

    [breakpoint('sm')]: {
        flexWrap: 'wrap',
        margin: calcRem(0, 32, 30),
    },

    [breakpoint('md')]: {
        margin: calcRem(0, 96, 50),
        fontSize: calcRem(18),
    },

    [breakpoint('lg')]: {
        margin: '0 auto 50px',
        maxWidth: calcRem(850),
    },
})
