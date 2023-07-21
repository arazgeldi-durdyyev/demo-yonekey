import React, { useMemo } from 'react'


export const useSortedProducts = (products, sort) => {
    const sortedProducts = useMemo(()=> {
        if(sort) {
            return [...products].sort( (a, b) => a[sort].localeCompare(b[sort]) )
        }
        return products
    }, [products, sort])

    return sortedProducts
}

export const useProducts = (products, sort, query) => {

    const sortedProducts = useSortedProducts(products, sort)

    const sortedAndSearchedProducts = useMemo(()=> {
        return sortedProducts.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedProducts])

    return sortedAndSearchedProducts
}
/**Hook that sorts and searches */