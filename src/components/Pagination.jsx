import React from 'react'
import { getPagesArray } from '../API/pages'
//exported to ProductsListContainer
const Pagination = ({totalPages, page, changePage}) => {
    
  let pagesArray = getPagesArray(totalPages)
  return (
    <div>
        {
            pagesArray.map(p=> <span onClick={()=> changePage(p)} key={p}>
                {p}
            </span>)
        }
    </div>
  )
}

export default Pagination