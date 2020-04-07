import styled from '@emotion/styled'
import { colours } from '../styling/colours'
import { headingFont, bodyFont } from '../styling/fonts'
import { calcRem } from '../styling/styling-utils/calcRem'
import { buttonBorderRadius } from '../styling/borders'
import { gradients } from '../styling/gradients'

export const StyledButton = styled('button')({
    padding: calcRem(10),
    color: colours.white,
    borderRadius: buttonBorderRadius,
    border: '3px solid transparent',
    backgroundImage: `${gradients.primary_to_accent}, ${gradients.primary_to_accent}`,
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
    boxShadow: 'none',

    '&:hover': {
        boxShadow: '2px 1000px 1px #fff inset',
        'p:first-of-type': {
            background: `${gradients.primary_to_accent}`,
            WebkitBackgroundClip: 'text',
            color: 'transparent',
        },
    },
})

export const StyledButtonText = styled('p')({
    fontFamily: bodyFont,
    fontSize: calcRem(16),
    margin: 0,
})
