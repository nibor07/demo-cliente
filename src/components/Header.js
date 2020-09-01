import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const ContenedorFondo = styled.div`
    background-color: #041e42;
    font-size: 8pt;
    color: #fff;
`;


const Header = () => {
    return(
        <Fragment>
        <ContenedorFondo>
        <span>Servicio al cliente de Lider.cl: WhatsApp 
            <a href="https://api.whatsapp.com/send?phone=56957211492&amp;text=Hola!%20Tengo%20una%20consulta">+56957211492
            </a>
             | Horario: de lunes a viernes de 8:00 a 22:00 y sábado, domingo y festivos de 9:00 a 22:00
        </span>
        </ContenedorFondo>
        </Fragment>
    );
}

export default Header;