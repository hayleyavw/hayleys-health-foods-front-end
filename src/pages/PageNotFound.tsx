import React from 'react'
import { jsonld } from '../components/common/jsonld'
import Helmet from 'react-helmet'
import { StyledParagraph } from '../components/common/Paragraph.styled'

const PageNotFound: React.FC = () => {
    return (
        <React.Fragment>
            <Helmet>
                <script type="application/ld+json">{jsonld}</script>
            </Helmet>
            <StyledParagraph>Hmmm, we can't seem to find that page...</StyledParagraph>
        </React.Fragment>
    )
}

export default PageNotFound
