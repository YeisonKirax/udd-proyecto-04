import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import FormularioReservacion from './FormularioReservacion/FormularioReservacion';
import ListaReservaciones from './ListaReservaciones/ListaReservaciones';

import './reservas.css';

export default function Reservas() {

  return (
    <Tabs defaultActiveKey={ "reservaciones" } id="reservaciones-tabs" fill={ true }>
      <Tab eventKey={ "reservaciones" } title="Reservaciones">
        <ListaReservaciones></ListaReservaciones>
      </Tab>
      <Tab title="Reservar hora" eventKey={ "reservar" }>
        <FormularioReservacion></FormularioReservacion>
      </Tab>
    </Tabs>
  );
}