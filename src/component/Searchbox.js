import React from 'react';

function Searchbox({searchfield,inputchange}) {
    return (
        <div className='pa2'>
            <input className='pa3 ba--green bg-lightest-blue' 
            type='search' 
            placeholder='Search Monsters'
            onChange={inputchange} 
            />
        </div>
    );
}

export default Searchbox;