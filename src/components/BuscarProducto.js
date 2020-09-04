import React, { useState } from 'react'
import PropTypes from 'prop-types';
import lidercategoria from '../img/lider-categoria.jpg'; 
import shop from '../img/compra.jpg';

  const styleLogos = {
    textAlign: "center",
    height: "35px",
    marginTop: "10px",
    zIndex: 6
  };

  export const BuscarProducto = ( { setProductos } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if( inputValue.trim().length > 0 ){
            setProductos(  prods => [ inputValue ]);
            setInputValue('');
        }
        
    }

    return (
        <div className='container'> 
        <div className="row row-cols-4" style={styleLogos}>
            <div className="col"><img src={lidercategoria} alt="Seleccione las categorías" /> </div>
            <div className="col-6">
                <form onSubmit={ handleSubmit }>
                    <div>
                        <input
                            name="search"
                            value={ inputValue }
                            className="input is-rounded"
                            type="text"
                            placeholder="¿Qué estás buscando?"
                            onChange={handleInputChange}
                        />
                    </div>
                </form>
            </div>
            <div className="col" align="right"><img src={shop} alt="Pagar"/></div>
        </div>
        </div>
    )
}

BuscarProducto.propTypes = {
    setProductos: PropTypes.func.isRequired
}