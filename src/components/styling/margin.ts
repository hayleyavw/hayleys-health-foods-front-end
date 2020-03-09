import { calcRem } from './styling-utils/calc-rem'

export const margins = {
    bodyTopBottomMargin: '0',
    bodyLeftRightMargin: {
        sm: `${calcRem(12)}`,
        md: `${calcRem(50)}`,
        lg: `${calcRem(70)}`,
    },
}
