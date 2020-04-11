import React from 'react'
import { TagObject } from '../../api/recipes/ResponseShapes'
import { getTags } from '../../api/recipes/Queries'
import { StyledFilterButtonsWrapper } from './FilterButtons.styled'
import { FilterButton } from '../FilterButton/FilterButton'

interface State {
    tags: TagObject[]
    loading: boolean
}

export class FilterButtons extends React.Component {
    public readonly state: Readonly<State> = {
        tags: [new TagObject()],
        loading: true,
    }

    async componentDidMount() {
        const tags = await getTags()
        this.setState({ tags: tags })
        this.setState({ loading: false })
    }

    render() {
        const tags = this.state.tags
        return (
            <StyledFilterButtonsWrapper>
                {this.state.loading === false && tags
                    ? tags.map((tag: TagObject, index) => <FilterButton key={index} tag={tag} />)
                    : ''}
            </StyledFilterButtonsWrapper>
        )
    }
}
