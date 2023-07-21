import React, { useContext, useEffect, useRef, useState } from 'react'
import ProductCard from './ProductCard'
import { Button } from '@mui/material'
import Search from './Search';
import { AppContext } from '../context';
import { useFetching } from '../API/useFetching';
import Service from '../API/Service';
import CategoryCard from './CategoryCard';
import ProductsSortingContainer from './ProductsSortingContainer';
import Pagination from './Pagination';
import Loader from './Loader';

const ProductsListContainer = ({products, productCount}) => {

  const {filter, setFilter, categorizedProducts, page, setPage, totalPages, changePage, isProductsLoading} = useContext(AppContext)
  if(filter.query) {
    productCount = products.length
  }

  // const [lastElement, setLastElement] = useState(null);
  const lastElement = useRef()
  const observer = useRef(
    new IntersectionObserver(
        (entries) => {
            const first = entries[0];
            if (first.isIntersecting) {
                console.log('DIV is visible')
                setPage(page + 1)
                changePage(page + 1)
                console.log(page)
            }
        })
  );
// useEffect(() => {
//   const currentElement = lastElement;
//   const currentObserver = observer.current;

//   if (currentElement) {
//       currentObserver.observe(currentElement);
//   }

//   return () => {
//       if (currentElement) {
//           currentObserver.disconnect(currentElement);
//       }
//   };
// }, [isProductsLoading, page]);

useEffect(()=>{
  if(isProductsLoading) return;
  if (observer.current) observer.current.disconnect()
  let callback = (entries, observer) =>{
    if(entries[0].isIntersecting && page < totalPages) {
      setPage(page + 1)
      console.log(page)
    }
  }
  observer.current = new IntersectionObserver(callback)
  observer.current.observe(lastElement.current)
}, [isProductsLoading])
  
  return (
    <div className='wrapper__products-list-container'>
        
        <Search filter={filter} setFilter={setFilter}/>
        <ProductsSortingContainer productCount={productCount}/>

        <div className='wrapper__products-list'>
          {
            categorizedProducts 
            ? categorizedProducts.map(catProduct => <CategoryCard key={catProduct.id} productData={catProduct}/>)
            : 
            products.map(thisProd => <ProductCard key={thisProd.id} productData={thisProd}/>)
          }
          <div style={{width: '100%', height:'73px'}}>
            {isProductsLoading && <Loader/>}
          </div>
          
          <div ref={lastElement} style={{ width:'100%', backgroundColor:'red'}} />
          <Pagination page={page} changePage={changePage} />
        </div>
    </div>
  )
}

export default ProductsListContainer