import React, { useState } from 'react'
import { BuscarProducto } from './BuscarProducto';
import Header from './Header';
import { ListaProductos } from './ListaProductos';

export const ClientApp = () => {

    const [productos, setProductos] = useState([]);

    console.log( 'URL: ', process.env.REACT_APP_BACKEND_URL);
    return (
        <div>
            <Header />
            <BuscarProducto setProductos={ setProductos }/>
            <hr />
            <ol>
            {
                    productos.map( producto  => (
                        <ListaProductos 
                            key={ producto }
                            producto={ producto }
                        />
                    ))
            }
            </ol>     
        </div>
    )
}