import { useFetchProductos } from '../../hooks/useFetchProductos'
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchProductos', () => {


    test('debe de retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchProductos( 'Samsung' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })

    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchProductos( 'Xiaomi' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        //expect( data.length ).toBe(  );
        expect( loading ).toBe( false );
    });
    
    
    
})
