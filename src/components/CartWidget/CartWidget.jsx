import cart from "./Assets/carrito-compras.png"

export const CartWidget = () => {

    return (
        <div>
            <img src={cart} alt="cart-widget" className="imagen"></img>
            (0)
        </div>
    );
}
