import React from 'react'
import { jsonld } from '../components/common/jsonld'
import Helmet from 'react-helmet'
import ErrorPage from '../components/ErrorPage/ErrorPage'

const PageNotFound: React.FC = () => {
    return (
        <React.Fragment>
            <Helmet>
                <script type="application/ld+json">{jsonld}</script>
            </Helmet>
            <ErrorPage />
        </React.Fragment>
    )
}

export default PageNotFound
