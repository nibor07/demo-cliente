import React, { useState } from 'react'
import axios from 'axios' ;

//import PropTypes from 'prop-types';

export const BuscarProducto = ( search ) => {

    
    const busca =  async () => {
        console.log('jjajaja');
        const url = 'https://demo-servidor.herokuapp.com/api/auth?search=pelota';
        const resultado = await axios.get(url);
        console.log('RES==>',resultado);
    };

    let inputValue = "";
    const handleSubmit = (e) =>{
        console.log('goooooooooo');
        e.preventDefault();

        if( inputValue.trim().length > 0 ){
            //buscamos
            //setProductos(  prods => [ inputValue ]);
            //setInputValue('');

        }
        
    }

    return (
            <div className="col-xs-8">
            <div className="logo">
                <a href="/catalogo/">                    
                    <img alt="Lider Logo" src="https://www.lider.cl/catalogo/images/lider-logo.svg"/>
                </a>
            </div>        
            <div>
            <form className="col-12" onSubmit={ handleSubmit }>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="search"
                        className="form-control"
                        type="button"
                        placeholder="Buscar por Producto"
                        onClick={busca}
                    />
                </div>

            </div>
        </form>
        </div>
        </div>            
    )
}