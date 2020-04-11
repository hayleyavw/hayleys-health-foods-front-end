import { api_url } from '../api/common'

export function getStaticFilesPrefix() {
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV !== 'production' && process.env.REACT_APP_NODE_ENV !== 'production') {
        return `${api_url}/`
    }
    return ''
}
