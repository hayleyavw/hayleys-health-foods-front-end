import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calcRem'
import { colours } from '../styling/colours'

export const StyledLoadingWrapper = styled('div')({
    marginTop: calcRem(50),
    textAlign: 'center',
})

export const StyledLoadingAnimation = styled('div')({
    display: 'inline-block',
    position: 'relative',
    width: calcRem(80),
    height: calcRem(80),

    div: {
        position: 'absolute',
        top: calcRem(33),
        width: calcRem(13),
        height: calcRem(13),
        borderRadius: '50%',
        backgroundColor: colours.primary.primary,
        animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',

        ':nth-child(1)': {
            left: calcRem(8),
            animation: 'lds-ellipsis1 0.6s infinite',
        },

        ':nth-child(2)': {
            left: calcRem(8),
            animation: 'lds-ellipsis2 0.6s infinite',
        },

        ':nth-child(3)': {
            left: calcRem(32),
            animation: 'lds-ellipsis2 0.6s infinite',
        },

        ':nth-child(4)': {
            left: calcRem(56),
            animation: 'lds-ellipsis3 0.6s infinite',
        },
    },

    '@keyframes lds-ellipsis1': {
        '0%': {
            transform: 'scale(0)',
        },
        '100%': {
            transform: 'scale(1)',
        },
    },
    '@keyframes lds-ellipsis3': {
        '0%': {
            transform: 'scale(1)',
        },
        '100%': {
            transform: 'scale(0)',
        },
    },
    '@keyframes lds-ellipsis2': {
        '0%': {
            transform: 'translate(0, 0)',
        },
        '100%': {
            transform: 'translate(24px, 0)',
        },
    },
})
