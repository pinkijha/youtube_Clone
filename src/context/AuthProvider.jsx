import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchData } from '../utils/rapidApi';

export const AuthContext = createContext()


export default function AuthProvider ({children})  {

    const [ loading, setLoading ] = useState(false);
    const  [ value, setValue ] = useState('New');
    const [ data, setData ] = useState([]);

    useEffect(() => {
        fetchAllData(value)
    }, [value]);

    const fetchAllData = (query) =>{
        setLoading(true);
        fetchData(`search/?q=${query}`).then(({contents})=> {
            setData(contents);
            setLoading(false);
        })
    }

  return (
    <AuthContext.Provider value={{loading, data, value, setValue}}>
        {children}

    </AuthContext.Provider>
  )
}

// export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
