import React from 'react'

const Search = () => {
    return (
        <div className='search'>
            <div class="input-group">
                <input type="text" class="form-control" placeholder='Search for Products' />
                <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
                
            </div>
        </div>
    )
}

export default Search