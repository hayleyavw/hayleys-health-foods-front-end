import styled from '@emotion/styled'
import { StyledParagraph } from '../common/Paragraph.styled'
import { calcRem } from '../styling/styling-utils/calcRem'
import { colours } from '../styling/colours'

export const StyledTagButton = styled(StyledParagraph)({
    margin: calcRem(2),
    padding: calcRem(3),
    borderRadius: calcRem(2),
    lineHeight: calcRem(16),
    fontSize: calcRem(14),
    backgroundColor: colours.offWhite,
    color: colours.black,
    opacity: 0.8,
})
