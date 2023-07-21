import { Button } from '@mui/material'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import SortIcon from '@mui/icons-material/Sort';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { AppContext } from '../context';

const ProductsSortingContainer = ({productCount}) => {

    const {
      category, categorizedProducts, setCategorizedProducts,
      stickyBarOpen, setStickyBarOpen 
    } = useContext(AppContext)

    const [open, setOpen] = useState(false)
    const mobileMenuRef = useRef();


    
    const closeOpenMenus = useCallback(
      (e) => {
        if (
          mobileMenuRef.current &&
          open &&
          !mobileMenuRef.current.contains(e.target)
        ) {
          setOpen(false);
        }
      },
      [open]
    );
  
    useEffect(() => {
      document.addEventListener("mousedown", closeOpenMenus);
    }, [closeOpenMenus]);
    
  return (
    <div className='wrapper__products-info-sort'>
          <p className='products-info-sort__found'>{productCount} haryt tapyldy</p>
          <div className='products-info-sort__dropdown'>
            <div style={{position:"relative"}}>
              <Button ref={mobileMenuRef} variant='outlined' type='button' className='products-info-sort__button' onClick={() => {
                if(open === false) {setOpen(true)}
                else {setOpen(false)}
              }}>
                <SortIcon/>
                Tertiplemek
                <ArrowDropDownIcon/>
              </Button>
              <div className={open===true ?'products-category-dropdown collapse' : 'products-category-dropdown'}>
                <p>Tertiplemäni aýyr</p>
                {
                  category
                  && category.map((eachCat, index) => 
                  <p onClick={() => {setCategorizedProducts(category[index].category), console.log(categorizedProducts, index, 'clicked')}} 
                     key={eachCat.id}>{eachCat.name}
                  </p>)
                }
              </div>
            </div>

            <Button 
              variant='contained' 
              type='button' 
              className='products-category-dropdown-button' 
              onClick={()=>{
                if(stickyBarOpen === false){
                  setStickyBarOpen(true)
                }else {
                  setStickyBarOpen(false)
                }}}>
                <FilterAltIcon/>
            </Button>
          </div>
        </div>
  )
}

export default ProductsSortingContainer