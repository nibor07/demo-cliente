import React, { useState } from 'react'
import PropTypes from 'prop-types';
import lidercategoria from '../img/lider-categoria.jpg'; 
import shop from '../img/compra.jpg';


const style = {
    textAlign: "center",
    height: "35px",
    marginTop: "10px",
    zIndex: 5,
    backgroundColor: "rgb(0, 113, 206)"
  };

  const styleLogos = {
    textAlign: "center",
    height: "45px",
    marginTop: "1px",
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
        <div className='row is-full' style={style}> 
        <div className="columns is-vcentered" style={styleLogos}>
            <div className="column is-3"><img src={lidercategoria} alt="Seleccione las categorías" /> </div>
            <div className="column is-6 is-narrow">
                <form className="col-12" onSubmit={ handleSubmit }>
                    <div className="col-md-4">
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
            <div className="column is-3" align="right"><img src={shop} alt="Pagar"/></div>
        </div>
        </div>
    )
}

BuscarProducto.propTypes = {
    setProductos: PropTypes.func.isRequired
}