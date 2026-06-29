import { Request, Response, NextFunction } from "express";

const attachUser = (req : Request,  res : Response, next : NextFunction) => {
    const token = req.auth;
    /*
        The idea: attaching an "user" to the request allows us to reject or allow the request
        using our own signature, rather than whatever syntax keycloak or some other system does.
        The keycloak jwt data is transformed into an internal type, that then can be used to allow or deny requests and transmit other data.
    */
    req.user = {
        id : token?.sub,
        username : token?.preferred_username,
        roles : {
            realm : token?.realm_access?.roles || [],
            backend : token?.resource_access?.backend?.roles || []
        }
    }

    console.log(req.user);
    next();
}
export { attachUser }