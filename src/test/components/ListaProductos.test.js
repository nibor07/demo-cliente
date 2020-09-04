import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { ListaProductos } from '../../components/ListaProductos';
import { useFetchProductos } from '../../hooks/useFetchProductos';
jest.mock('../../hooks/useFetchProductos');

describe('Pruebas en el <ListaProductos />', () => {

    const producto = {
        brand:"Lg" ,
        description: "", 
        id: 456
    };

    test('debe mostrarse correctamente', () => {

        useFetchProductos.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <ListaProductos producto={ producto } /> );
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de mostrar items cuando se cargan imágenes de los productos de useFetchProductos', () => {
        
        const productos = [{
            id: 1,
            price: 345,
            brand: 'Samsung',
            url: 'https://localhost/cualquier/cosa.jpg',
            description: 'Edge 7'
        },
        {
            id: 2,
            price: 145,
            brand: 'Xiaomi',
            url: 'https://localhost/cualquier/cosa.jpg',
            description: 'Xiaomi mi8'
        }];

        useFetchProductos.mockReturnValue({
            data: productos,
            loading: false
        });

        const wrapper = shallow( <ListaProductos producto={ producto } /> );
        
        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('Producto').length ).toBe( productos.length );
    })
    
    

})