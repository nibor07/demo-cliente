import { getProductos } from '../../helpers/getProductos';
import {clienteAxios} from '../../config/axios';



describe('Pruebas con getProductos Fecth', () => {
    jest.mock(clienteAxios);
    test('debe de traer 2 elementos', () => {
        /*const productos = [{
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
        }];*/
        console.log('clienteAxios: ', clienteAxios);
        //clienteAxios.create.mockResolvedValue(resp);
        /*clienteAxios.mockReturnValue({
            data: productos
            //loading: false
        });*/

        //const productosObtenido = await getProductos('131');
        //console.log('XX', productosObtenido);
        //expect( productosObtenido.length ).toBe( 2 );

    })

    /*
    test('debe de traer 10 elementos', async() => {
        
        const productos = await getProductos('');

        expect( productos.length ).toBe( 0 );

    })*/    

})