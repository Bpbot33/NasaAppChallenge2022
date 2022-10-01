import React, { useEffect, useState } from 'react'
import { SearchBoxInput, SearchBoxInputContainer, SearchBoxWrapper, SearchButton, SearchFilterIcon, SearchIcon } from './SearchBox.styles'

export const SearchBox = () => {
    const [value, setValue] = useState("")

    const handleSubmmit = () => {
        console.log("Submmit");
    }

    useEffect(() => {

        console.log(value)
    }, [value]);

    return (
        <SearchBoxWrapper>
            <SearchBoxInputContainer>
                <SearchBoxInput placeholder='Text here...' value={value} onChange={(e) => setValue(e.target.value)} />
                <SearchButton onClick={handleSubmmit}>
                    Search
                </SearchButton>
                <SearchIcon />
                <SearchFilterIcon onClick={() => console.log("Orejitaa")} />
            </SearchBoxInputContainer>
        </SearchBoxWrapper>

    )
}
