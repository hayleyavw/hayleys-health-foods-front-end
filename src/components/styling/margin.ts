import { calcRem } from './styling-utils/calcRem'

export const margins = {
    bodyTopBottomMargin: '0',
    bodyLeftRightMargin: {
        sm: `${calcRem(12)}`,
        md: `${calcRem(50)}`,
        lg: `${calcRem(70)}`,
    },
}
