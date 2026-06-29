import { useEffect, useState } from "react";
import Keycloak from 'keycloak-js'
import type { AxiosRequestConfig } from "axios";

let _jwt : string;

function useAuthenticationRequestConfig() : AxiosRequestConfig {
    const config : AxiosRequestConfig = {
        headers : {
            authorization : `Bearer ${_jwt}`
        }
    }
    return config;
}

const useAuthentication = () => 
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
            console.log(client.token)
            _jwt = client.token!;
        })
        return
    }, [])

    return isAuthenticated;
}
export { useAuthentication, useAuthenticationRequestConfig }