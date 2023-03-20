


const Item = ({item} ) => {

return (


            <div className="col-3 m-2">
                <h2> {item.Nombre} </h2>
                <img src= {item.img} alt= "foto producto"/>
                <p>{item.Descripcion}</p>
                <p> Precio: ${item.Precio} </p>
                <button className="btn btn-primary"> Ver mas</button>
            </div>




)

}
export default Item