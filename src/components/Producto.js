import React from 'react'

export const Producto = ({ producto }) => {

    let imagen = "https://"+producto.url;

    const styleMarca = {
        fontWeight: "bold",
        color: "rgb(0, 0, 0)"
    };
    
    return (

        <div className="columns is-mobile">
            <div className="column is-1"></div>
            <div className="column is-2">
                <article className="tile is-child box">
                    <p className="title"><img className="card-img-top" src={imagen} alt={imagen} /></p>
                    <div className="linea-separacion"></div>
                    <div className="rows">
                        <span style={styleMarca}>{producto.brand}</span> <span>{producto.description}</span>

                        { 
                            producto.isDescuento ? 
                            <div>
                                <div className="precio">{producto.precioConDescuento} <span className="porcentaje-descuento">&nbsp; 50%</span></div>
                                <div className="row precio-referencia">{producto.price}</div>
                            </div> :
                            <div>
                                <div> {producto.price}  </div> 
                            </div>
                        }

                        <br></br>
                        <div className="btn-centrado">
                            <button className="button is-rounded"> &nbsp;&nbsp;Agregar &nbsp;&nbsp;</button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}