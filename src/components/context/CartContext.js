import {useState, createContext} from "react"


export const CartContext = createContext ()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState ([])
    console.log (cart)

    const agregarAlCarrito = (item) =>{
    setCart ([...cart, item])
}

    const removeItem = (id) =>{
        setCart (cart.filter ((prod) => prod.id !== id))
    }

    const editCantidad = (id,num) =>{
        const _cart = cart.slice ()
        const item = _cart.find ((prod) => prod.id === id)
        item.cantidad += num

        setCart (_cart)
    }

    const isInCart = (id) =>{
    return cart.some ((prod) => prod.Id === id)
}

    const totalCantidad = () =>{
    return cart.reduce ((acc, prod) => acc + prod.cantidad, 0)
}   
    const totalCarrito = () =>{
    return cart.reduce ((acc, prod) => acc + prod.cantidad * prod.Precio, 0)
}


    const vaciarCarrito = () =>{
        setCart ([])
    }

    return (

        <CartContext.Provider value= {{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad,
            vaciarCarrito,
            removeItem,
            totalCarrito,
            editCantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}