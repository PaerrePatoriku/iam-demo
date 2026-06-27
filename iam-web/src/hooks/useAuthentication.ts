import { useEffect, useState } from "react";
import Keycloak from 'keycloak-js'
export const useAuthentication = () => 
{
    const [isAuthenticated, setAuthenticated] = useState(false)

    var client : Keycloak;
    useEffect(() => {
        //Since we are using useEffect, it runs twice for a checkup in development
        //We do not want to init keycloak twice, so check the state beforehand
        if (client && client.didInitialize)
            return;
        
        client = new Keycloak({
            url : import.meta.env.VITE_KEYCLOAK_URL,
            realm : import.meta.env.VITE_KEYCLOAK_REALM,
            clientId : import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
        })

        client.init({ onLoad : "login-required" })
            .then((res) => { 
            console.log(res);
            setAuthenticated(res)

        })
        return
    }, [])

    return isAuthenticated;
}
