import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext();

const UsersProvider = ({children}) => {
    const [users, setUsers] = useState('');

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data))
    },[users]);

    return (
        <UsersContext.Provider value={{users}}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider;