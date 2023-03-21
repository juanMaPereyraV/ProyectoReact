import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {

    const [item, setItem] = useState (null)
    const [loading, setLoading] = useState (true)
    const {itemId} = useParams ()

    console.log (itemId)
    console.log (item)
    
    useEffect (() => {
         setLoading (true)

        pedirDatos ()
            .then ((res) => {
                
                setItem ( res.find ((prod) => prod.id === Number (itemId)) )
             })
             
             .finally (() => {
                setLoading (false)
             })
    }, [])

    return (

        <div className="container my-5">
            
            <h2>Item Detail Container</h2>

        </div>
            


    )
}


export default ItemDetailContainer