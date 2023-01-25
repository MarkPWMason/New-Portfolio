import React from 'react'
import Select from 'react-select'

import './SearchBar.css'

interface SearchBarProps{
  setFilter: any,
  skills: any,
  filter: string[],
}

const SearchBar = (props: SearchBarProps) => {
  return (
    <div className='searchBar'>
        {/* <button style={{width: 100, height: 100}} title='Change Filter' onClick={() => {
          props.setFilter(["SASS"]);
        }}/> */}

        <Select 
          defaultValue={props.filter}
          onChange={props.setFilter}
          options={props.skills}
          isMulti={true}
        />
    </div>
  )
}

export default SearchBar  