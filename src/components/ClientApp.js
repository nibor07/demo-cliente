import React, { useState } from 'react'
import { BuscarProducto } from './BuscarProducto';
import Header from './Header';
import { ListaProductos } from './ListaProductos';

export const ClientApp = () => {
    const style = {
        textAlign: "center",
        backgroundColor: "rgb(0, 113, 206)"
      };
    const [productos, setProductos] = useState([]);

    console.log( 'URL: ', process.env.REACT_APP_BACKEND_URL);
    return (
        <div>
        <div className='rows'  style={style}>
            <Header />
            <BuscarProducto setProductos={ setProductos }/>
            <hr />
        </div>
            {
                    productos.map( producto  => (
                        <ListaProductos 
                            key={ producto }
                            producto={ producto }
                        />
                    ))
            } 
        </div>       
    )
}