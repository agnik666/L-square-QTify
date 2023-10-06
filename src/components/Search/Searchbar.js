import React from 'react'
import style from './Searchbar.module.css'
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg'

function Searchbar() {
  return (
    <div className={style.parent}>
        <input className={style.search} placeholder="Search an album of your choice"/>
        <button className={style.searchButton}>
        {
            // Rendering the Search Icon as a component instead of an img element
        }
            <SearchIcon />
        </button>
    </div>
  )
}

export default Searchbar