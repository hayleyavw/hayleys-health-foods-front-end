import styled from '@emotion/styled'
import { colours } from '../styling/colours';
import { bodyFont } from '../styling/fonts';
import { calcRem } from '../styling/styling-utils/calc-rem';
import { borderRadius } from '../styling/borders';

export const StyledButton = styled('button') ({
    padding: `${calcRem(10)}`,
    color: colours.white,
    borderRadius: borderRadius,
    border: '3px solid transparent',
    backgroundImage: `linear-gradient(90deg, ${colours.primary.primary}, ${colours.accent.accentDark1}), linear-gradient(90deg, ${colours.primary.primary}, ${colours.accent.accentDark1})`,
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
    boxShadow: 'none',
    
    '&:hover': {    
        boxShadow: '2px 1000px 1px #fff inset',
        'p:first-of-type': {
            background: `linear-gradient(90deg, ${colours.primary.primary}, ${colours.accent.accentDark1})`,
            WebkitBackgroundClip: 'text', 
            color: 'transparent',
        }
    }
})

export const StyledButtonText = styled('p')({
    fontFamily: bodyFont,
    fontSize: '1rem',
    margin: 0,
})