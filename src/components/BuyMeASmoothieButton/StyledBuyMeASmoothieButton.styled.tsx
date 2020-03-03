import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { colours } from '../styling/colours'
import { gradients } from '../styling/gradients'

// interface Props {
//     prop?: undefined
// }

export const StyledBuyMeASmoothieButton = styled('div')({})

export const StyledBuyMeASmoothieSpan = styled('span')({
    marginLeft: calcRem(15),
    fontSize: calcRem(28),
})

export const StyledBuyMeASmoothieImage = styled('img')({
    height: calcRem(34),
    width: calcRem(35),
    marginBottom: calcRem(1),
    boxShadow: 'none',
    border: 'none',
    verticalAlign: 'middle',
})

export const StyledBuyMeASmoothieAnchor = styled('a')({
    padding: calcRem(7, 10, 7, 10),
    lineHeight: calcRem(35),
    height: calcRem(51),
    minWidth: calcRem(217),
    textDecoration: 'none',
    display: 'inline-flex',
    color: colours.white,
    background: gradients.primary_to_accent,
    borderRadius: calcRem(5),
    border: `${calcRem(1)} solid transparent`,
    fontSize: calcRem(28),
    letterSpacing: calcRem(0.6),
    boxShadow: `${calcRem(0, 1, 2)} rgba(190, 190, 190, 0.5)`,
    WebkitBoxShadow: `${calcRem(0, 1, 2, 2)} rgba(190, 190, 190, 0.5)`,
    margin: '0 auto',
    fontFamily: '"Cookie", cursive',
    WebkitBoxSizing: 'border-box',
    boxSizing: 'border-box',
    OTransition: '0.3s all linear',
    MozTransition: '0.3s all linear',
    msTransition: '0.3s all linear',
    transition: '0.3s all linear',

    // .bmc-button:hover, .bmc-button:active, .bmc-button:focus {
    //     -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
    //     text-decoration: none !important;
    //     box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
    //     opacity: 0.85 !important;color:#ffffff !important;
    // }
})

// export const StyledComponentWithProps = styled('div')<Props>(({ prop }) => ({}))
