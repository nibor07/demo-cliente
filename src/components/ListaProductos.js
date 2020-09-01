import React from 'react';
import { useFetchProductos } from '../hooks/useFetchProductos';
import { Producto } from './Producto';

export const ListaProductos = ({ producto }) => {

    const { data:productos, loading } = useFetchProductos( producto );
    console.log('data=>', productos);
    if(productos){
        return (
            <>
                <h3 className="animate__animated animate__fadeIn"> { producto } </h3>

                { loading && <p className="animate__animated animate__flash">Loading</p> }

                <div className="card-grid">
                    
                    {
                        productos.map( producto => (
                            <Producto
                                key={ producto.id }
                                producto={producto}
                            />
                        ))
                    }
                
                </div>
            </>
        );
    }else{
        return(
            <div className="styled__NoResultsText-sc-1w20d9o-5 dTOjoM">
            No encontramos resultados para tu búsqueda de <span>{producto} </span>
        </div>
        )

    }
}