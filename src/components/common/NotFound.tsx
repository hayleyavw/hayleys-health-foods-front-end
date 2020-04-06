import React from 'react'
import { jsonld } from './jsonld'
import Helmet from 'react-helmet'
import { StyledParagraph } from './Paragraph.styled'
import { StyledAnchor } from './Anchor.styled'

interface NotFound {
    type: string
    message: string
}

export const NotFound: React.FC<NotFound> = ({ type, message }) => {
    return (
        <React.Fragment>
            <Helmet>
                <script type="application/ld+json">{jsonld}</script>
            </Helmet>
            <StyledParagraph>{message}</StyledParagraph>
            {type === 'recipe' ? (
                <StyledParagraph>
                    You can check out all recipes <StyledAnchor to="/">here</StyledAnchor>
                </StyledParagraph>
            ) : (
                ''
            )}
            {type === 'blog' ? (
                <StyledParagraph>
                    You can check out all blog posts <StyledAnchor to="/blog">here</StyledAnchor>
                </StyledParagraph>
            ) : (
                ''
            )}
        </React.Fragment>
    )
}

export default NotFound
