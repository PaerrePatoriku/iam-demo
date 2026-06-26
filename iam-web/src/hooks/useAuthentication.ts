import { useEffect, useState, useRef } from "react";
import Keycloak from 'keycloak-js'
export const useAuthentication = () => 
{
    const [isAuthenticated, setAuthenticated] = useState(false)
    //Strict mode causes fun issues in dev (useEffect runs twice here) so add a ref to track state
    const isInitialized = useRef(false);
    useEffect(() => {
        if (isInitialized.current)
            return;

        isInitialized.current = true

        const client = new Keycloak({
            url : import.meta.env.VITE_KEYCLOAK_URL,
            realm : import.meta.env.VITE_KEYCLOAK_REALM,
            clientId : import.meta.env.VITE_KEYCLOAK_CLIENT_ID
        })

        client.init({ onLoad : "login-required" })
            .then((res) => { 
            console.log(res);
            setAuthenticated(res)

        })

    }, [])

    return isAuthenticated;
}
