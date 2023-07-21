import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetching } from '../API/useFetching';
import Service from '../API/Service';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from './Loader';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import ChangePageTitle from './ChangePageTitle';
import { exchangeRate } from './ProductCard';
import SliderForCards from './SliderForCards';

const ProductIdPage = ({productsForSlide}) => {
    const params = useParams();
    const [product, setProduct] = useState({})
    // const [images, setImages] = useState({})
    const {id, name, img, description, detailedDescription, price, oldPrice, view} = product
    const imgURL = 'https://yonekey.com/api/static/product/'
    const [clickedSmallImage, setClickedSmallImage] = useState('')
    const [activeSmallImage, setActiveSmallImage] = useState('')
    
    //below const is for processing requests
    const [fetchProductById, isLoading, error] = useFetching(async (id) => {
      const response = await Service.getById(id)
      setProduct(response.data)
      
      // const response = data.products.rows[0] //the data is stud!!! local
      // setProduct(response) //local
    })
    // console.log(product)
    useEffect(()=> {
      fetchProductById(params.id)
    }, [])
    const navigate = useNavigate()
    const changePage = (path) => {
      navigate(path)
    }
    
    const [activeIndex, setActiveIndex] = useState(0)
    const handleLinkClick = (index) => {
      setActiveIndex(index)
    }
    
    // useEffect(() => {
      //   if(name) document.title = name;
      // }, []); it did not work the way I wanted
      const markup = { __html: description };
      const markupDetailed = { __html: detailedDescription };
      return (
        <div className='product-id-page-container'>
      <ChangePageTitle pageTitle={name}/>
      {
        isLoading
          ? <div style={{margin:'23% auto'}}><Loader/></div>
          :  <div className="product-id-container_flex wrapper">
              <div className="website_name">
                  <img width={53} 
                  height={43} 
                  src="/Images/yone-icon.png" 
                  alt="logo"
                  onClick={() => changePage('/')} />
              </div>
              <div className="product-id-images">
                <div className="side-images">
                  {/* array of images */}
                  {
                    img 
                    ? img.map((each, index) => 
                      <img key={each.id} 
                           src={imgURL+each.name} 
                           alt="Small Images" 
                           className={each.id == activeSmallImage ? 'imageActive' : ''} 
                           onClick={()=> {setClickedSmallImage(imgURL+each.name), setActiveSmallImage(each.id)}}
                      />)
                    : ""
                  }
                </div>
                <div className='main-id-image'>
                  <img src={img ? (clickedSmallImage ? clickedSmallImage : imgURL+img[0].name)/*imgURL+img[0].name*/ :''} alt='Image'/>
                </div>
              </div>

              <div className="product-id-details">
                {/* details */}
                <h1>{name}</h1>
                <div className="product-id-details__price">
                  {/* old new price */}
                  <div className='price-old-new'>
                    <div className="price-old-new-new">
                      <h3>{(oldPrice * exchangeRate).toFixed(2)} TMT</h3>
                      <p>Lomaý Söwda karty bilen</p>
                    </div>
                    <div className="price-old-new-old">
                      <h3>{(price * exchangeRate).toFixed(2)} TMT</h3>
                      <p>Lomaý Söwda kartsyz</p>
                    </div>
                  </div> 

                  <div className="viewed">
                    <VisibilityIcon/> {view}
                  </div>

                  <div className="rating-retailer-container">
                    <div className="rating-container">
                      <div className="rating">
                        <h4><StarIcon/> 0</h4>
                        <p>0 Seslenme</p>
                      </div>

                      <div className="vendor">
                        <div>
                          <p>Satyjy:</p>
                          <h3>Ýönekeý</h3>
                        </div>
                        <div className='vendor-logo'><img src="/Images/yone-icon.png" alt="" /></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-id-details__card">
                  <div className="card__nav">
                    <div onClick={()=> handleLinkClick(0)} className={activeIndex === 0 ? 'nav-item active' : 'nav-item'}>Beýany</div>
                    <div onClick={()=> handleLinkClick(1)} className={activeIndex === 1 ? 'nav-item active' : 'nav-item'}>Aýratynlyklary</div>
                  </div>

                  <div className="card-nav-description">
                    {activeIndex === 0 
                      ? <div>
                          <h2 dangerouslySetInnerHTML={markup}/>
                          <p dangerouslySetInnerHTML={markupDetailed}/>
                        </div>/*{description /*.replace(/<\/?[^>]+>/gi, '')}*/
                      : <h3>Features</h3>
                    }  
                  </div>
                </div>
              </div>
            </div>
      }
      {
        isLoading 
          ? null
          : <SliderForCards products={productsForSlide}/>
      }
    </div>
  )
}

export default ProductIdPage