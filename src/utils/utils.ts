export function buildImagePath(imageUrl: string) {
    if (process.env.REACT_APP_NODE_ENV === 'production' && imageUrl !== 'Loading...') {
        return imageUrl
    }
    return 'https://via.placeholder.com/1200x900.jpg/?text=Hayley%27s+Health+Foods'
}
