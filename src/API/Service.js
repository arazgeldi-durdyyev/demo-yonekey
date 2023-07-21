import axios from "axios" 

export default class Service {
    static async getAll(limit, page=1, sort=null) {
        const response = await axios.get("https://yonekey.com/api/ecommerce/product", {
            params: {
                limit: limit,
                page: page,
                search: null,
                sort: sort,
                onlyWithDiscount: false,
                categoryId: [],
                subCategoryId: [],
                tag: [],
                color: [],
                detailValue: [],
                min_price: 0,
                max_price: 5000,
                brand:[]
            }
        })
        return response
    }
    static async getById(id) {
        const response = await axios.get("https://yonekey.com/api/ecommerce/product/one", {
            params: {
                id: id
            }
        })
    
        return response
    }
    
    static async getCategory() {
        const response = await axios.get("https://yonekey.com/api/main-page/title-category", {
            params: {
                category: true
            }
        })
        return response
    }
}