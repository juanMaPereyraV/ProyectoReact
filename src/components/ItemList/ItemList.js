import Item from '../Item/Item';
import './ItemList.scss'

const ItemList = ({items} ) => {

    return (
        <div>
        <h2 className=" titulo list-container-title"> Nuestras Semillas </h2>
        <hr/>
        <div className="row">
            {items.map (producto => <Item key = {producto.id} item={producto} />)}
        </div> 
        </div>






    )
}

export default ItemList