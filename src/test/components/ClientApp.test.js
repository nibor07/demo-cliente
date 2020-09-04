import React from 'react';
import { shallow } from 'enzyme';
import { ClientApp } from '../../components/ClientApp';


describe('Pruebas en <ClientApp />', () => {
    
    test('debe mostrarse correctamente', () => {

        const wrapper = shallow(<ClientApp /> );
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe mostrar una lista vacia de productos', () => {

        const productos = [];
        const wrapper = shallow(<ClientApp producto={ productos } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('ListaProductos').length ).toBe( productos.length );

        
    })
    

})
