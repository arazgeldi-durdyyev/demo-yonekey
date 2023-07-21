import React from 'react'
import StickyBar from './sidebar/StickyBar'
import ProductsListContainer from './ProductsListContainer'
import Loader from './Loader'

const Wrapper = ({products, productCount, dataForStickyBar, isProductsLoading}) => {

  return (
    <>  
      {isProductsLoading
        ? <div style={{margin:'23% auto'}}><Loader/></div>
        
        : <div className='wrapper'>
            <StickyBar dataForStickyBar={dataForStickyBar}/>
            <ProductsListContainer products={products} productCount={productCount} />      
          </div>
      }
    </>
  )
}

export default Wrapper