type breakpointOptions = {
    [key: string]: number
}

const breakpoints: breakpointOptions = {
    small: 400,
    smaller: 768,
    large: 1024,
}

export const breakpoint = (n: string) => {
    const bpArray = Object.keys(breakpoints).map(key => [key, breakpoints[key]])

    const [result] = bpArray.reduce((acc, [name, size]) => {
        if (n === name) return [...acc, `@media (min-width: ${size}px)`]
        return acc
    }, [])

    return result
}
