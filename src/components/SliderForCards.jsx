import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import ProductCard from './ProductCard';
import { Navigate, useNavigate } from 'react-router-dom';
import ProductIdPage from './ProductIdPage';
//exported to ProductIdPage
const SliderForCards = ({products}) => {
    const navigate = useNavigate()
    const changePage = (path) => {
      navigate(path)
    }
  return (
    <div>
        <h3 style={{fontSize:'1.5rem', marginLeft:'3rem', marginTop:'2rem'}}>Meňzeş harytlar</h3>
        <Swiper modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={2}
            slidesPerView={5}
            navigation
            style={{margin:'33px'}}
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 2
                },
                720: {
                    slidesPerView: 4,
                    spaceBetween: 4
                }
            }}
            className='swiper-container'>
                {products.map((thisProd) => 
                    <SwiperSlide key={thisProd.id}>
                        <ProductCard productData={thisProd}/>
                    </SwiperSlide>
                )}
            </Swiper>
    </div>
  )
}

export default SliderForCards