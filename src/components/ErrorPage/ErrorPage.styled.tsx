import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { StyledHeadingOne } from '../common/Headings.styled'
import { StyledParagraph } from '../common/Paragraph.styled'
import { breakpoint } from '../styling/styling-utils/breakpoints'

export const StyledErrorPage = styled('div')({
    marginTop: calcRem(50),
})

export const StyledErrorHeading = styled(StyledHeadingOne)({
    textAlign: 'center',
    marginBottom: calcRem(16),
})

export const StyledErrorParagraph = styled(StyledParagraph)({
    textAlign: 'center',
})

export const StyledRow = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: calcRem(10),

    p: {
        lineHeight: calcRem(16),
    },

    [breakpoint('sm')]: {
        gridTemplateColumns: '1fr 1fr',
    },

    [breakpoint('md')]: {
        gridTemplateColumns: '1fr 1fr 1fr',
    },
})
