import React from 'react';
import { useFetchProductos } from '../hooks/useFetchProductos';
import { Producto } from './Producto';
import loSentimos from '../img/lo_sentimos.webp'; 

const styleLogo = {
    textAlign: "center",
    height: "100px"
  };

const styleResultado = {
    textAlign: "center",
    height: "35px"
};

  export const ListaProductos = ({ producto }) => {

    //let query = producto;
    const { data:productos, loading } = useFetchProductos( producto );
    console.log('data=>', productos);
    if(productos){
        return (
            <>
                <h2 className="margen-query"> Resultados para <span className="precio">{ producto }</span> </h2>

                { loading && <p className="animate__animated animate__flash">Loading</p> }
                
                    
                    {
                        
                        productos.map( producto => (
                            <Producto
                                key={ producto.id }
                                producto={producto}
                            />
                        ))
                        
                    }


            </>
        );
    }else{
        return(
            <div>
            <div className="rows sin-resultado is-5">
                <div className="column is-centered" ><img src={loSentimos} style={styleLogo} /></div>
                <div className="row is-vcentered mensaje-resultado">¡Lo sentimos!</div>
                <div className="row is-vcentered mensaje-sin-dato" >No encontramos resultados para tu búsqueda de <span>"{producto}" </span></div>
                <div className="row is-vcentered linea"></div>
                <div className="row is-vcentered cFwMqv" style={styleResultado}><spam className="tips">Algunos tips:</spam> Revisa si escribiste correctamente lo que buscas. Puedes probar nuevamente usando términos menos específicos.</div>
            </div>
            </div>
        )

    }
}