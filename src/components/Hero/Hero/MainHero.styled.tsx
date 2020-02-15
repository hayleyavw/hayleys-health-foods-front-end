import styled from '@emotion/styled'
import { margins } from '../../styling/margin'
import { StyledHeadingThree } from '../../common/Headings.styled'
import { calcRem } from '../../styling/styling-utils/calc-rem'
import { gradients } from '../../styling/gradients'

export const StyledMainHeroWrapper = styled('div')({
    margin: `0 -${margins.bodyLeftRightMargin}`,
})

export const StyledHeroGradientLine = styled('div')({
    height: '20px',
    background: gradients.primary_to_accent,
})

export const StyledSubtitle = styled(StyledHeadingThree)({
    textShadow: `${calcRem(2)} ${calcRem(2)} ${calcRem(1)} rgba(0,0,0,0.8)`,
})
