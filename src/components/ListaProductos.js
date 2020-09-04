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
    const { data:productos } = useFetchProductos( producto );
    console.log('data=>', productos);


    if(productos){
        
        return (
            <div className="col-12 p-5 row">
            {
                productos.map( producto => (
                    <Producto
                        key={ producto.id }
                        producto={producto}
                    />
                ))}



        </div>
        );
    }else{
        return(
            <div>
            <div className="rows sin-resultado is-5">
                <div className="btn-centrado" ><img src={loSentimos} style={styleLogo} alt="Lo sentimos!"/></div>
                <div className="btn-centrado mensaje-resultado">¡Lo sentimos!</div>
                <div className="btn-centrado mensaje-sin-dato" >No encontramos resultados para tu búsqueda de <span>"{producto}" </span></div>
                <div className="btn-centrado linea"></div>
                <div className="btn-centrado cFwMqv" style={styleResultado}><spam className="tips">Algunos tips:</spam> Revisa si escribiste correctamente lo que buscas. Puedes probar nuevamente usando términos menos específicos.</div>
            </div>
            </div>
        )

    }
}