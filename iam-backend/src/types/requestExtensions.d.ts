export interface UserToken { /* From the jwt token. The tail end of the token specifies this info*/
    sub : string,
    preferred_username? : string,
    realm_access? : {
        roles : string[]
    }
    resource_access : {
        backend: { roles : string[] } //Since our backend is simply called "backend", we should give resource access into this prop, if any exist.
    }

}

/*
    In my mind it makes sense to separate the "transport layer user" that is in the middlewares
    from the user in the "services". Transport layer user talks about what the user is in the authentication/authorization, but
    in-app a "app-user" should be derived to give more info, like preferences, user settings,preferred language etc....

    Therefore the user in the middleware is called a "RequestUser"
*/
export interface RequestUser {
    id? : string,
    username? : string, //This is a simple app, so lets just add in some details from the token and call it a day ;)
    roles : {
        realm? : string[],
        backend? : string[]
    }
}