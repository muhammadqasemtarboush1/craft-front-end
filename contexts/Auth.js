// in this provider, I will check if I have a token, and create a login function

// 1. create the provider , that will provide the global state to my app



import { createContext, useState ,useEffect} from "react";
import axios from 'axios';
import { useRouter } from 'next/router'

// 1.1  create the context 
export const AuthContext = createContext();
// 1.2  create the context wrapper // provider


export function AuthWrapper({ children }) {
    // I need tokens and login funciton to be global
    const router = useRouter()
    const [globalState, setGlobalState] = useState({
        tokens: null,
        // login : login ,
        login,
    })
    // create login function that will send request to the server and recive a token, I need to update the state
    async function login(userInfo) {
        
        const url = "https://craft-herfah.herokuapp.com/api/token/";
        const res = await axios.post(url, userInfo);
        
        setGlobalState({
            tokens: res.data,

            login,
        })
        

    }
    useEffect(()=>{!globalState.tokens && router.push('/Login') },[globalState.tokens])
    return (
        <>
            <AuthContext.Provider value={globalState}>
                {children}
            </AuthContext.Provider>
        </>
    )
}