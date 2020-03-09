type breakpointOptions = {
    [key: string]: number
}

const breakpoints: breakpointOptions = {
    sm: 500,
    md: 900,
    lg: 1200,
}

export const breakpoint = (n: string) => {
    const bpArray = Object.keys(breakpoints).map(key => [key, breakpoints[key]])

    const [result] = bpArray.reduce((acc, [name, size]) => {
        if (n === name) return [...acc, `@media (min-width: ${size}px)`]
        return acc
    }, [])

    return result
}
