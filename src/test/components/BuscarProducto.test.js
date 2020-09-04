import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { BuscarProducto } from '../../components/BuscarProducto';


describe('Pruebas en <BuscarProducto />', () => {

    const setProductos = jest.fn();
    let wrapper = shallow( <BuscarProducto setProductos={ setProductos } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <BuscarProducto setProductos={ setProductos } /> );
    });

    
    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('No debe enviar la información con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setProductos ).not.toHaveBeenCalled();

    })
    
    test('debe de llamar el setProductos y limpiar la caja de texto', () => {

        const value = 'Prueba productos';

        // 1. simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });

        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3. setCategories se debe de haber llamado
        expect( setProductos ).toHaveBeenCalled();
        expect( setProductos ).toHaveBeenCalledTimes(1);
        expect( setProductos ).toHaveBeenCalledWith( expect.any(Function)  );

        // 4. el valor del input debe de estar ''
        expect( wrapper.find('input').prop('value') ).toBe('');
        
    })
    
    

})
