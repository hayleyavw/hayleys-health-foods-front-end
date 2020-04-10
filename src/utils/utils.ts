import { api_url } from '../api/common'

export function getStaticFilesPrefix() {
    if (process.env.NODE_ENV !== 'production') {
        return `${api_url}/`
    }
    return ''
}
