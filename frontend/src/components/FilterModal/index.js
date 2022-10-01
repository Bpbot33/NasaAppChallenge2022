import React from 'react'
import { CloseButton, Filter, FilterCheckBox, FilterModalButton, FilterModalContainer, FilterModalWrapper, FiltersContainer, FilterTitle } from './FilterModal.styles'

export const FilterModal = () => {
    return (
        <FilterModalWrapper>
            <FilterModalContainer>
                <CloseButton />
                <FiltersContainer>
                    <Filter>
                        <FilterCheckBox />
                        <FilterTitle>
                            People
                        </FilterTitle>
                    </Filter>
                    <Filter>
                        <FilterCheckBox />
                        <FilterTitle>
                            Organizations
                        </FilterTitle>
                    </Filter>
                    <Filter>
                        <FilterCheckBox />
                        <FilterTitle>
                            Locations
                        </FilterTitle>
                    </Filter>
                    <Filter>
                        <FilterCheckBox />
                        <FilterTitle>
                            Keyphrases
                        </FilterTitle>
                    </Filter>
                    <Filter>
                        <FilterCheckBox />
                        <FilterTitle>
                            image Tags
                        </FilterTitle>
                    </Filter>
                    <Filter>
                        <FilterCheckBox />
                        <FilterTitle>
                            Text
                        </FilterTitle>
                    </Filter>
                </FiltersContainer>
                <FilterModalButton>
                    Add Filters
                </FilterModalButton>
            </FilterModalContainer>
        </FilterModalWrapper>
    )
}
