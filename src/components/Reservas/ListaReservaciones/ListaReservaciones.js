import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { db } from '../../../config/firestore';

import './lista-reservaciones.css';

export default function ListaReservaciones() {
  const [ reservas, setReservas ] = useState( [ {} ] )
  
  useEffect( () => {
    const obtenerReservaciones = async () => {
      const reservasCollectionRef = collection( db, "Reservas" )
      const querySnapshot = await getDocs(
        reservasCollectionRef )
      const reservas = querySnapshot.docs.map( doc => {
        return { id: doc.id, ...doc.data() }
      } )
      setReservas( reservas )

    }
    try {
      obtenerReservaciones()
    } catch ( error ) {
      console.error( error )
    }
  }, [] )
  return (
    <Container>
      <p>A continuación, podrá ver el listado de reservaciones realizadas</p>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Persona a cargo</th>
            <th>Tipo de mesa</th>
            <th>Fecha reservada</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {
            reservas.length === 0 ?
              (
                <tr>
                  <td colSpan={ 4 }>No hay reservaciones</td>
                </tr>
              )
              :
              reservas.map( reservacion => (
                <tr key={ reservacion.id }>
                  <td>{ reservacion.nombreCliente }</td>
                  <td>{ reservacion.tipoMesa }</td>
                  <td>{ reservacion.fechaReserva }</td>
                  <td>{ reservacion.horaReserva }</td>
                </tr>
              ) )
          }
        </tbody>
      </Table>
    </Container>
  )
}