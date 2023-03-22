import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {

    const [item, setItem] = useState (null)
    const [loading, setLoading] = useState (true)
    const {itemID} = useParams ()

    console.log (itemID)
    console.log (item)
    console.log (loading) //se usa provisoriamente porque tira un warning del loading y no compila en Netlify
    
    useEffect (() => {
         setLoading (true)

        pedirDatos ()
            .then ((res) => {
                
                setItem ( res.find ((prod) => prod.Id === Number (itemID)) )
             })
             
             .finally (() => {
                setLoading (false)
             })
    }, [itemID])

    return (

        <div className="container my-5">
            
            <h2>Item Detail Container</h2>

        </div>
            


    )
}


export default ItemDetailContainer