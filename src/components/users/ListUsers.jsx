
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataContext';
import Users from './Users';
import './listUsers.css'
import CreateUser from '../modal/CreateUser';
import Swal from 'sweetalert2';


export const ListUsers = () => {
  const {
    dataUsers, 
    setDataUsers,
    fetchDataTableUsers,

   } = useContext(DataContext);
  
// const fakeData = [
//   {
//     id: 1,
//     first_name: 'pepe',
//     last_name: 'ruperto',
//     email: 'email@example.com',
//     status: true
//   },
//   {
//     id: 2,
//     first_name: 'Blacky',
//     last_name: 'Rodriguez',
//     email: 'email@example.com',
//     status: true
//   },
//   {
//     id: 3,
//     first_name: 'Foxy',
//     last_name: 'Rodriguez',
//     email: 'email@example.com',
//     status: false
//   },
// ]

// hacer la petición get al backend para traer la información de la api
useEffect(() => {
    fetchDataTableUsers()

}, [])


const [isActiveModalRegister, setIsActiveModalRegister] =  useState(false); // estado inicial del modal cuando está cerrado es falso

 // función para abril el modal para crear un nuevo usuario del botón de (+)
 const buttonRegisterMovement = () => {
  setIsActiveModalRegister(true);
}

  // Eliminar un usuario 
  const handleDeleteUser = (id) => {
 
    Swal.fire({
      title: '¿Estás seguro de eliminarlo?',
      text: "Esta acción no puede revertirse",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      confirmButtonColor: ' #00d1b2',
      cancelButtonText: 'Cancelar',
    }).then(async(result) => {
      if (result.isConfirmed) {
        const updatedUsers = dataUsers.filter(user => user.id !== id);
        setDataUsers(updatedUsers);
        Swal.fire({
          title: 'Eliminado',
          text: 'El usuario ha sido eliminado.',
          icon: 'success',
          showConfirmButton: true,
          confirmButtonText: 'Ok'
        });
      }
    });
  };


  return (
    <>
 

<div className="hero halfheight fondo">
     
    <div className='hero-body fondo' >
        <div className='nueva '>
            <div>
              <h1 className='is-size-2 title-color'> LISTA DE USUARIOS </h1>
            </div>
            <div>  
              <button className="button  is-right is-primary is-size-8 addUser-btn"
                onClick={buttonRegisterMovement}
              >
                <strong> Crear usuario + </strong> 
              </button>
            </div>
      </div>
     <div className='table-container is-centered margin-top'>
 
       <table className="table is-striped is-fullwidth is-bordered mb-2 is-hoverable">
         <thead className='is-size-3 is-narrow'>
             <tr>
               <th className='is-primary'>N. </th>
               <th className='is-primary'> PRIMER NOMBRE </th>
               <th className='is-primary'> APELLIDO </th>
               <th className='is-primary'> CORREO </th>
               <th className='is-primary'> ACCIÓN </th>
             
             </tr>
         </thead>
  
   <tbody className='is-size-4'>

 {/*Si la data existe,  trae el componente de fila de la tabla  */}
     {dataUsers?.map(element => (
        
        // sólo se muestra el elemento en la fila cuando el status es igual a true
        element?.status === true && (    

          <Users
           key={element.id}
           element= {element}
           handleDeleteUser={handleDeleteUser}
          />
      )
      ))}
    
     </tbody>
   </table>
         
      </div>
    </div>
  </div>

   <CreateUser
    isActiveModalRegister={isActiveModalRegister}
    setIsActiveModalRegister={setIsActiveModalRegister}
   />

    </>
  )
}
