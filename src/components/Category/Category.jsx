import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './category.style.css'

export default function Category ({ name, options = [], ...props }) {
  return (
    <div className={props.className}>
      <h3 className='category-title'>{name}</h3>
      <ul className='category-list'>
        {
        options.map((singleOption, i) => (
          <li key={singleOption}>
            <Link className='category-link' to={`/search/${singleOption}`}>
              {singleOption}
            </Link>
          </li>
        ))
        }
      </ul>
    </div>
  )
}
