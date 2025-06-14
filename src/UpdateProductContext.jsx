import React, { createContext,useState} from 'react'

export const UpdateProductContext = createContext()

export const UpdateProductContextProvider = ({children}) => {
    const [updateProduct, setUpdateProduct] = useState({
        id: '',
        ProductName: '',
        ProductPrice: '',
        ProductDescription: '',
        ProductQuantity: '',
        ProductQuantitySold: '',
        ProductRevenue: ''
    })

    return (
        <UpdateProductContext.Provider value={{updateProduct, setUpdateProduct}}>
            {children}
        </UpdateProductContext.Provider>
    )

} 