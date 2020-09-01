import React, { useState } from 'react'
import { BuscarProducto } from './BuscarProducto';

export const ClientApp = (seach) => {

    console.log( 'URL: ', process.env.REACT_APP_BACKEND_URL);
    return (
        <div>
            <BuscarProducto search='hola'/>
        </div>
    )
}