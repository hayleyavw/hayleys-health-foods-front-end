import styled from '@emotion/styled'

export const StyledRecipeHeroImageWrapper = styled('div')({
    height: '100%',
    width: '100%',
    position: 'relative',
})

export const StyledRecipeHeroImageOverlay = styled('div')({
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    background: `linear-gradient(rgba(0, 0, 0, 0) 60%, rgba(255, 255, 255, 1))`,
})
