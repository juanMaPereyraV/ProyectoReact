

const ItemDetail = ({item} ) => {

    return (

        <div>
            <h2>{item.Nombre} </h2>
            <hr/>
            <img src= {item.img} alt = {item.Nombre} />
            <p>{item.Descripcion} </p>
            <p>Precio $ {item.Precio} </p>

        </div>


    )


}

export default ItemDetail