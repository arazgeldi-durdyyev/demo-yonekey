import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import cl from './ProductCard.module.css'
import { useNavigate } from 'react-router-dom'

export const exchangeRate = 26.9 //can be changed

const ProductCard = ({productData}) => {
    const {id, name, buyCount, img, oldPrice, price} = productData
    const imgURL = 'https://yonekey.com/api/static/product/'
    
    const image = `${imgURL}${img[0].name}`

    const navigate = useNavigate()
    const changePage = (path) => {
        navigate(path)
    }
  return (
    <div>
        <Card variant='elevation' sx={{transition: "all .2s linear",
            }} onClick={()=> changePage(`/product/${id}`)}>
                
            <CardContent className={cl.cardStyle} sx={{
                position:"relative",
                display: "flex",
                flexDirection:"column",
                transition: "all .2s linear",
                "&:hover": {
                    border: "1px solid black",
                    cursor: "pointer"
                }
            }}>
                <div style={{width: "90%", margin: "0 auto"}}>
                    <CardMedia component={"img"} image={image} title='test' 
                        sx={{
                            display:"block",
                            objectFit:"contain",
                            borderRadius: ".4rem"
                    }}/>
                </div>
                <hr/>
                <div className={cl.card__priceTag}>
                    <div className={cl.priceTag__bg_one}>
                        <p className={cl.priceTag__bg_one__price}>
                            {(oldPrice * exchangeRate).toFixed(2)}
                            <Typography sx={{fontSize: ".8rem"}} variant='span'>TMT</Typography>
                        </p>
                    </div>
                    <div className={cl.priceTag__old}>{(price * exchangeRate).toFixed(2)}</div>
                </div>
                <p title={name} className={[cl.card__productTitle, cl.textTrunc].join(" ")}>{name}</p>
                <div className={cl.card__soldContainer}>
                    <p className={cl.card__sold}>Satyldy: {buyCount}</p>
                </div>
                <div className={cl.card__buttonContainer}>
                    <button className={[cl.cardButton, cl.card__buttonBuy].join(' ')}>Satyn al</button>
                    <button className={[cl.cardButton, cl.card__buttonAddBasket].join(' ')}>Sebede goş</button>
                </div>

            </CardContent>
        </Card>
    </div>
  )
}

export default ProductCard