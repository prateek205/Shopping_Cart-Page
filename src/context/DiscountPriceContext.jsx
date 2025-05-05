import {createContext, useContext} from 'react'


const DiscountContext = createContext()

export const DiscountProvider = ({children}) => {

    const getDiscountPrice = (price, discount) => {
        return Math.round(price - (price * discount) / 100)
    }

    return(
        <DiscountContext.Provider value={{getDiscountPrice}}>
            {children}
        </DiscountContext.Provider>
    )

}

export const useDiscountPrice = () => useContext(DiscountContext)