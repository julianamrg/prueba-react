import React, { useContext, useState } from 'react'
// import { DataContext } from '../../context/DataContext';
import './modal.css';
import Swal from "sweetalert2";
import { DataContext } from '../../context/DataContext';

const CreateUser = ({isActiveModalRegister, setIsActiveModalRegister, callbackGetDataBills}) => {


  const { setDataUsers, dataUsers } = useContext(DataContext);

  // función para cerrar el modal con el botón de la x o el botón de Cancelar 
  const handleCloseModal = () => {
    setIsActiveModalRegister(false);
    // cambiando el estado del modal a falso
  }

  // Formulario inicial
  const initialForm = {
    "firstName": '',
    "lastName": '',
    "email": '',
    'status': true,
   }

   // estado inicial del nuevo usuario
   const [newUser, setNewUser] = useState(initialForm);

// función para capturar la información de los usuarios de los inputs 
   const handleChange = ({target}) => {
      const { name, value } = target;
     
    //   setNewUser({ ...newUser,[name]: value });
      setNewUser((prevUser) => 
        ({
        ...prevUser,
        [name]: value,
      }));
  }

  // añadir al nuevo usuario
  const handleAddUser = (e) => {
    e.preventDefault();
    setDataUsers((prevUsers) => [...prevUsers, { id: prevUsers.length + 1, ...newUser }]);
    setNewUser({ firstName: '', lastName: '', email: '', status: '' });  // limpiar el formulario
    setIsActiveModalRegister(false); // cerrar modal 
    showSuccessfulRegister() // mostrar modal de registro exitoso al crear un usuario
  };

  // console.log(dataUsers, 'hola')
// Alerta que muestra el registro existoso de un usuario
const showSuccessfulRegister =() =>{
 Swal.fire({
    title: "Registro exitoso",
    icon: "success",
    button: "Aceptar",
  });
}

// Alerta que muestra que hubo un error al registrar un usuario
const showErrorRegister =() =>{
  Swal.fire({
    title: "No se pudo registrar :(",
    text: "Intentalo de nuevo",
    icon: "error",
    button: "Aceptar",
  });
}



  return (
  
<div className={isActiveModalRegister ? 'is-active modal' : 'modal'}>
  <div className="modal-background"></div>
    <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title is-size-3 title-new-color"><strong> Creación de usuarios </strong> </p>
      <button className="delete" aria-label="close" onClick={handleCloseModal}></button>
    </header>

    <section className="modal-card-body">
      <form>
        <div className="field">
          <p className="modal-card-title"> Primer nombre:</p>
            <div className='control'>
                <input 
                className="input" 
                type="text" 
                placeholder="Ejemplo: Carlos"
                value={newUser.firstName}
                name="firstName"
                onChange={handleChange}            
                />

            </div>
        </div>
      
      <div className="field">
        <p className="modal-card-title"> Apellido: <br/> </p>
            <div className='control'>
                <input 
                className="input" 
                type="text" 
                placeholder="Ejemplo: Romero"
                value={newUser.lastName}
                name="lastName"
                onChange={handleChange}            
                />

            </div>
        
      </div>

      <div className="field">
        <p className="modal-card-title"> Correo electrónico:  </p>
            <input 
            className="input" 
            type="text" 
            placeholder="ejemplo: correo@ejemplo.com"
            value={newUser.email}
            name="email"
            onChange={handleChange}
            
            />

      </div>
      </form>
    </section>
    <footer className="modal-card-foot">
      <button className="button is-primary is-size-6 addUser-btn" 
        onClick={handleAddUser}
      > Crear usuario </button>

      <button className="button" onClick={handleCloseModal}> Cancelar </button>
    </footer>
  </div>
</div>



  )
}

export default CreateUser