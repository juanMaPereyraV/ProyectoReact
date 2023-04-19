import { Link } from "react-router-dom"
import './Item.scss'


const Item = ({item} ) => {

return (


            <div className=" cards col-3 m-2">
                <h2> {item.Nombre} </h2>
                <img src= {item.img} alt= "foto producto"/>
                <p>{item.Descripcion}</p>
                <p> Precio: ${item.Precio} </p>
                <Link to= {`/Detail/${item.Id}`} className="btn btn-primary"> Ver mas </Link>
            </div>

)

}
export default Item


