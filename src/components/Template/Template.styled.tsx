import styled from '@emotion/styled'

interface Props {
    prop?: undefined
}

export const StyledComponent = styled('div')({})

export const StyledComponentWithProps = styled('div')<Props>(({ prop }) => ({}))
