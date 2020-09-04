import React from 'react';
import { shallow } from 'enzyme'
import { Producto } from '../../components/Producto';

describe('Tests de <Producto />', () => {
    
    const producto = {  id: 123412,
                        url: "wwww.lider.cl/1.jpg",
                        brand: "Televisor DAEWOO",
                        description: "jausau",
                        precioConDescuento: 23421,
                        isDescuento: true,
                        price: "123"                        
                    };
    
    const wrapper = shallow(<Producto key={ producto.id }
                                    producto={producto}
                        />);
    
    test('debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe tener un párrafo con el brand del producto buscado', () => {
        
        const hdos = wrapper;
        //TODO revisar esta pruebaw
        console.log('data==>',hdos);
        //expect( hdos.text().trim() ).toBe( producto.price );

    })

    *test('debe de tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        console.log(img);
        expect( img.prop('src') ).toBe( "https://"+producto.url );
        expect( img.prop('alt') ).toBe( "https://"+producto.url );

    });

})
