import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { StyledHeadingOne } from '../common/Headings.styled'
import { StyledParagraph } from '../common/Paragraph.styled'

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
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: calcRem(10),
})
