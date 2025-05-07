
const Users = ({element,   handleDeleteUser}) => {

    
  return (
    <tr>
      {/*renderizando las filas de los usuarios de la tabla */ }

        <th> {element.id} </th>
        <td> {element.firstName} </td>
        <td> {element.lastName} </td>
        <td> {element.email} </td>
        <td> <button className='button is-light' 
             onClick={() => handleDeleteUser(element.id)}
        >
            <strong> Eliminar </strong> 
               
            </button> </td>
    </tr>
  )
}

export default Users