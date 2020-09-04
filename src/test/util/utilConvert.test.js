import { numberFormat } from '../../util/utilConvert'

describe('Prueba con el utilitario de conversion de moneda', () => {
    test('Debe convertir a formato peso, incluyendo el simbolo $ ', () => {
        expect( numberFormat(10457) ).toBe( "$10.457" );numberFormat(10);
    })
    
})
