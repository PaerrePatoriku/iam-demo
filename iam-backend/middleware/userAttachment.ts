import { Request, Response, NextFunction } from "express";

const attachUser = (req : Request,  res : Response, next : NextFunction) => {
    const token = req.auth;
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