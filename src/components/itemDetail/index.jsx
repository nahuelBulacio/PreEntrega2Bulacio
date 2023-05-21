import { ItemCount } from "../itemCount"

export const ItemDetail = ({item}) => {
    return (
        <div className="detail">
            <img className="detail-img" src={item.imagen} alt="Card cap"></img>
            <div className="card-sody">
                <h1 className="texto-nombre">{item.nombre}</h1>
                <h4 className="texto-descripcion">Descripcion: {item.descripcion}</h4>
                <h3 className="texto-precio"> Precio ${item.precio}</h3>
                <h4 className="texto-stock">Stock disponible: {item.stock}</h4>
                <h3 className="texto-tipo">{item.tipo}</h3>
                <ItemCount id={item.id} nombre={item.nombre} precio={item.precio}></ItemCount>
            </div>
        </div>
    )
}
