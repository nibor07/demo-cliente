import React, { useState } from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ContenedorImg = styled.img`
    width: 152px; 
    height: 35px; 
    margin-top: 12px; 
    margin-bottom: 6px;
`;

const ContenedorFondo = styled.div`
    background-color: rgb(0, 113, 206);
    font-size: 8pt;
    color: #fff;
`;

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
            <ContenedorFondo className="col-xs-8">
            <div className="logo">
                <a href="/catalogo/">                    
                    <ContenedorImg alt="Lider Logo" src="https://www.lider.cl/catalogo/images/lider-logo.svg"/>
                </a>
            </div>        
            <div>
            <form className="col-12" onSubmit={ handleSubmit }>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="search"
                        value={ inputValue }
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Producto"
                        onChange={handleInputChange}
                    />
                </div>

            </div>
        </form>
        </div>
        </ContenedorFondo>            
    )
}

BuscarProducto.propTypes = {
    setProductos: PropTypes.func.isRequired
}