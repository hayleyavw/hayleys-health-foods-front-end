import React from 'react'
import * as H from 'history'
// import { RouteProps } from 'react-router';
import { RecipeCard } from '../components/RecipeCard/RecipeCard'

interface MatchParams {
    slug: string
}

interface Props extends RouteComponentProps<MatchParams> {}

export interface RouteComponentProps<P> {
    match: match<P>
    location: H.Location
    history: H.History
    staticContext?: any
}

export interface match<P> {
    params: P
    isExact: boolean
    path: string
    url: string
}

export const RecipePage: React.FC<Props> = props => {
    console.log(props.match.params.slug)
    return (
        <RecipeCard
            dateAdded={'date added'}
            id={1}
            method={'cats'}
            slug={props.match.params.slug}
            title={props.match.params.slug}
        />
    )
}
