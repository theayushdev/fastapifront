import React, {createContext ,useState} from "react";

export const SupplierContext = createContext();

export const SupplierContextProvider = ({children}) => {
    const [Supplier, setSupplier] = useState(
        {
            name : '',
            company: '',
            address: '',
            phone_number : '',
            email : '',
            id: ''
        }
    )

    return (
        <SupplierContext.Provider value={{ Supplier, setSupplier }}>
        {children}
      </SupplierContext.Provider>
    )

}
