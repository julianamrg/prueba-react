import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children}) => {
  
    const [pathName, setPathName] = useState('/');
    const [dataUsers, setDataUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    // Petición get al backend para traer los datos de la tabla
    const fetchDataTableUsers = async () => {
            
        setIsLoading(true);

        // url
        const response = await fetch(
          "https://api.fake-rest.refine.dev/users"
        );

        // si la respuesta es satisfactoria, se almacena la respuesta
        if (response.status === 200 || 201) {
          
          const users = await response.json();
          setDataUsers(users)
          setIsLoading(false);
        
        } else {
          setError("Hubo un error al obtener el usuario");
          console.log('errores')
        }

    }


    return (
        <DataContext.Provider
            value={{
                dataUsers,
                fetchDataTableUsers,
                pathName,
                setDataUsers,
                setPathName,
                
            }}
        >
            {children}
        </DataContext.Provider>
    ); 
};