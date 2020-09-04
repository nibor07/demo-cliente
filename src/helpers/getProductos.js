
import clienteAxios from '../config/axios';

export const getProductos = async( producto ) => {
    let productos;
    console.log("PR==>producto: ", producto);

    try {
        const respuesta = await clienteAxios.get('/api/search', {
            params: {
                    query: producto
            }
        });
        console.log("respuesta: ", respuesta.data.productos);
        console.log("respuesta: ", respuesta.data.codigo);
        console.log("respuesta: ", respuesta.data.isPalindromo);
        
        if(respuesta && respuesta.data.codigo === "00"){
            productos = respuesta.data.productos.map( producto => {
                return {
                    id: producto.id,
                    brand: producto.brand,
                    description: producto.description,
                    url: producto.image?producto.image:'',
                    isDescuento: respuesta.data.isPalindromo,
                    precioConDescuento: Math.round(producto.price),
                    price: respuesta.data.isPalindromo ? producto.price * 2 : producto.price
                }
            })
        
        }else{

        }
        
    } catch (error) {
        console.log(error);
    }
    console.log('productos:', productos);
    return productos;
}