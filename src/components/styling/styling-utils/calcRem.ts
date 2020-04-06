// Converts pixels to rems
export interface CalcRem {
    (pos1: number): string
    (pos1: number, pos2: number): string
    (pos1: number, pos2: number, pos3: number): string
    (pos1: number, pos2: number, pos3: number, pos4: number): string
}

export const calcRem: CalcRem = (...vals: number[]) =>
    vals.map(val => (val !== 0 ? `${val / 16}rem` : '0')).join(' ')
