import './ItemListContainer.scss'



export const ItemListContainer = ({greeting}) => {
    return (
        <div className="list-container">
        <h2 className="list-container-title"> Lista de Productos </h2>
        <hr/>

        <p>{greeting}</p>

       
        </div>
    )
}

