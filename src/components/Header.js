import React from 'react';
import agenda from '../img/agenda_icon.svg';


const style = {
    textAlign: "left",
    fontSize: "8px",
    backgroundColor: "#041e42",
    color: "#fff",
    position: "relative",
    zIndex: 4,
    height: "45px",
    width: "100%"   
  };

  const styleAgendaLocal = {
    color: "#fff",
    fontSize: "11px"
  };

const Header = () => {
    return(
            <div className="columns" style={style}>
                <div className= "column is-10">
                    <span className="column header" background-color="#041e42">Servicio al cliente de Lider.cl: WhatsApp 
                        <a href="https://api.whatsapp.com/send?phone=56957211492&amp;text=Hola!%20Tengo%20una%20consulta">+56957211492
                        </a>
                        | Horario: de lunes a viernes de 8:00 a 22:00 y sábado, domingo y festivos de 9:00 a 22:00
                    </span>
                </div>
                <div className="column is-1">
                <span className="column" background-color="#041e42">
                    <a href="https://www.lider.cl/agenda/#JuntosNosCuidamos" className="styled__StoreLink-sc-17jbrkg-0 kkNTwS">
                        <img height="13px" alt="agenda" src={agenda}/> &nbsp;
                        <span style={styleAgendaLocal}>agenda tu visita</span>
                    </a>
                    </span>
                </div>
                <div className="column is-1">
                    <span className="column" background-color="#041e42">
                    <a href="https://www.lider.cl/tiendas" className="styled__StoreLink-sc-17jbrkg-0 kkNTwS">
                    <img height="13px" alt="locales" src={agenda}/>&nbsp;
                        <span style={styleAgendaLocal}>locales y horarios</span>
                    </a>
                    </span>
                </div>

            </div>
    );
}

export default Header;