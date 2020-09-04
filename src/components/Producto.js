import React from 'react'

export const Producto = ({ producto }) => {

    let imagen = "https://"+producto.url;

    const styleMarca = {
        fontWeight: "bold",
        color: "rgb(0, 0, 0)"
    };
    
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={imagen} alt={imagen} className="card-img-top" />
            {    producto.isDescuento ? 
                <div className="card-body">
                    <p className="card-text"><span style={styleMarca}>{producto.brand}</span> <span>{producto.description}</span></p>
                    
                    <p className="card-text precio">{producto.precioConDescuento} <span className="porcentaje-descuento">&nbsp; 50%</span></p>
                    <p className="card-text precio-referencia">{producto.price} Vistas</p>
                </div>
                :
                <div className="card-body">
                    <p className="card-text"><span style={styleMarca}>{producto.brand}</span> <span>{producto.description}</span></p>
                    <p className="card-text precio">{producto.price} Vistas</p>
                </div>
            }
                <div className="card-footer">
                    <a
                        href={imagen}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary"
                    >Agregar</a>
                </div>
            </div>
        </div>
    );
}