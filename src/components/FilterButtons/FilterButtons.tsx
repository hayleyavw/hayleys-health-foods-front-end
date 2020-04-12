import React from 'react'
import { TagObject } from '../../api/recipes/ResponseShapes'
import { getTags } from '../../api/recipes/Queries'
import { StyledFilterButtonsWrapper } from './FilterButtons.styled'
import { FilterButton } from '../FilterButton/FilterButton'

interface FilterButtonProps {
    tagStatus: {
        gf: boolean
        df: boolean
        nf: boolean
        vege: boolean
        vegan: boolean
    }
    handler: (reset: boolean, tag: string, scroll: boolean) => void
}
interface State {
    tags: TagObject[]
    loading: boolean
}

export class FilterButtons extends React.Component<FilterButtonProps> {
    public readonly state: Readonly<State> = {
        tags: [new TagObject()],
        loading: true,
    }

    async componentDidMount() {
        const tags = await getTags()
        this.setState({ tags: tags })
        this.setState({ loading: false })
    }

    createFilterButton = (index: number, tag: TagObject) => {
        let status = false

        switch (tag.shortName) {
            case 'gf':
                status = this.props.tagStatus.gf
                break
            case 'df':
                status = this.props.tagStatus.df
                break
            case 'nf':
                status = this.props.tagStatus.nf
                break
            case 'vege':
                status = this.props.tagStatus.vege
                break
            case 'vegan':
                status = this.props.tagStatus.vegan
                break
            default:
                break
        }
        return <FilterButton key={index} tag={tag} selected={status} handler={this.props.handler} />
    }

    render() {
        const tags = this.state.tags
        return (
            <StyledFilterButtonsWrapper>
                {this.state.loading === false && tags
                    ? tags.map((tag: TagObject, index) => this.createFilterButton(index, tag))
                    : ''}
            </StyledFilterButtonsWrapper>
        )
    }
}
