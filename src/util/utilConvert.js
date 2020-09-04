function numberFormat(amount) {

    return Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(amount);
}

module.exports= { numberFormat:numberFormat};