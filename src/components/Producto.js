import React from 'react'

export const Producto = ({ producto }) => {

    let imagen = "https://"+producto.url;
    
    return (        
        <div className="col-md-4 mb-5">
            <div className="card">                 

                 <img className="card-img-top" src={imagen} alt={imagen} />
                 <h1 className="card-header" >{producto.brand} <span className="description"> {producto.description}</span></h1>

                 { 
                    producto.isDescuento ? 
                    <div>
                         <div> {producto.price}  </div> {producto.precioConDescuento}
                         <div> {producto.price}  </div>
                    </div> :
                    <div>
                        <p> {producto.price}  </p> 
                        <p> {producto.price} </p>
                   </div> 

                 }
                 <div className="card-body">
                     <button
                        type="button"
                        className="btn btn-block btn-light"
                        onClick={() => {
                        }}
                     >
                         Agregar
                     </button>

                 </div>
            </div>
        </div>

    )
}