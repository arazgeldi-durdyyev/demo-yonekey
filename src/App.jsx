import React, { useEffect, useState } from "react"; //you can also use useRef
import "./styles/App.css";
import { BrowserRouter, Navigate, Route, Routes,  } from "react-router-dom";
import "./styles/App.css"
import Wrapper from "./components/Wrapper";
import { useFetching } from "./API/useFetching";
import Service from "./API/Service";
// import data from './API/processed.mjs'
import { useProducts } from "./API/useProducts";
import { AppContext } from "./context";
import ErrorPage from "./components/ErrorPage";
import ProductIdPage from "./components/ProductIdPage";
import Loader from "./components/Loader";
import { getPageCount } from "./API/pages";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [dataForStickyBar, setDataForStickyBar] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [totalPages, setTotalPages] = useState('')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(24)

  const sortedAndSearchedProducts = useProducts(products, filter.sort, filter.query)

  const [fetchProducts, isProductsLoading, dataError] = useFetching(async ()=> {
    const getAllProducts = await Service.getAll(limit, page)
    // const getAllProducts = data // local

    /*/in the case of infinite pagination we have to place the upcoming data
     to the end of the existing data. So we create a new array... 
    */
    setProducts([...products, ...getAllProducts.data.products.rows]);
    // setProducts(getAllProducts.products.rows); //local
    setTotalCount(getAllProducts.data.products.count)
    setTotalPages(getPageCount(getAllProducts.data.products.count, limit))    
    setDataForStickyBar(getAllProducts.data.details)
    // console.log(getPageCount(totalCount, limit))
  })

  //getting a category
  const [category, setCategory] = useState([])
  const [fetchCategory, isLoading, error] = useFetching(async () => {
    const getCategory = await Service.getCategory()
    setCategory(getCategory.data)
  })  

  useEffect(()=>{
    fetchCategory()
  },[])
  useEffect(()=> {
    fetchProducts()
  },[page])

  //necessary when category is clicked
  const [categorizedProducts, setCategorizedProducts] = useState('')

  const changePage = (page) => {
    setPage(page)
  }
  //mobile responsive 
  const [stickyBarOpen, setStickyBarOpen] = useState(false)

  return (
      <AppContext.Provider value={{
        filter, setFilter, 
        category, categorizedProducts, setCategorizedProducts,
        isProductsLoading,
        changePage, setPage, page, totalPages,
        stickyBarOpen, setStickyBarOpen
      }}>
        <BrowserRouter>
              {dataError && 
                  <h1><ErrorPage/></h1>
              }
            <ScrollToTop/>
            <Routes> {/*instead of "Switch" */}
              <Route index element={
                <Wrapper 
                  products={sortedAndSearchedProducts} 
                  productCount={totalCount} 
                  dataForStickyBar={dataForStickyBar} 
                  isProductsLoading={isLoading}
                />
              }/>
              <Route path="/product/:id" element={<ProductIdPage productsForSlide={products}/>}/>
              <Route path="/error" element={<ErrorPage/>}/>
              <Route path='*' element={<Navigate to='/error'/>} /> {/**This acts as a REDIRECT */}
            </Routes>
        </BrowserRouter>
      </AppContext.Provider>
  )
}

export default App;
