import styled from '@emotion/styled'
import { StyledAnchor } from '../common/Anchor.styled'
import { calcRem } from '../styling/styling-utils/calc-rem'

export const StyledAboutMenu = styled('div')({})

export const StyledMenuItems = styled(StyledAnchor)({
    margin: calcRem(0, 10),
})
