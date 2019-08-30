import styled from '@emotion/styled'

interface StyledSquareProps {
    colour: string
}

export const StyledColourScheme = styled('div') ({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'stretch',
    margin: '20px 0'
})

export const StyledSquare = styled('div')<StyledSquareProps>(({ colour }) => ({
    flex: '1 1 auto',
    height: '80px',
    margin: '0 5px',
    borderRadius: '5px',
    backgroundColor: colour,
}))

export const StyledStyleGuide = styled('div') ({
    width: '90vw',
    margin: '0 auto'
})