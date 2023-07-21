import { Button } from '@mui/material'
import React, { useCallback, useContext, useEffect, useRef } from 'react'
import CategoryItem from '../CategoryItem'
import { AppContext } from '../../context'

const StickyBar = ({dataForStickyBar}) => {

  const {stickyBarOpen, setStickyBarOpen} = useContext(AppContext)
  const stickyRef = useRef()

  const closeOpenSticky = useCallback((e) => {
    if( 
      stickyRef.current &&
      stickyBarOpen &&
      !stickyRef.current.contains(e.target)
    ) {
      setStickyBarOpen(false)
    }
  },[stickyBarOpen]);

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenSticky)
  }, [closeOpenSticky])
  
  return (
    <div ref={stickyRef} className={stickyBarOpen === false ? 'producListDesktopFilter' : 'producListDesktopFilter activate'}>
      <div className='sticky-top-container'>
        <div className='sticky-top'>
          <Button variant='outlined' type='button' sx={{
            textTransform:"none", 
            cursor:"not-allowed !important",
            pointerEvents: "all", 
            fontSize: "1rem", 
            color: "rgba(0, 0, 0, 0.26)",
            border: "1px solid rgba(0, 0, 0, 0.12)",
            ":hover": {
              border: "1px solid rgba(0, 0, 0, 0.12)",
            }
            }} disableRipple disableFocusRipple disableTouchRipple>Filterleri aýyrmak</Button>
          <CategoryItem name={"Kategoriýalar"}/>
          {
            dataForStickyBar.map(eachCategory => <CategoryItem key={eachCategory.id} name={eachCategory.name} categoryData={eachCategory}/>)
          }

        </div>
      </div>
    </div>
  )
}

export default StickyBar