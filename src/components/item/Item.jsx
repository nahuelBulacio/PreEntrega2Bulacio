import { Link } from "react-router-dom"

export const Item = ({ id, nombre, tipo, descripcion, precio, stock, imagen }) => {

  return (
    <div className="card">
      <img src={imagen} alt="Card cap" className="card-img-top img" />
      <div className="card-sody">
        <h2 className="texto-tipo">{tipo}</h2>
        <h2 className="texto-nombre">{nombre}</h2>
        <h3 className="texto-precio">Precio: ${precio}</h3>
        <h3 className="texto-descripcion">{descripcion}</h3>
        <h3 className="texto-stock">Stock disponible: {stock}</h3>

        <Link id={id} className="btn btn-secondary agregar" to={`/item/${id}`}>Ver detalle del producto</Link>
      </div>
    </div>
  )
}
