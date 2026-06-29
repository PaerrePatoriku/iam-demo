/*
We are using typescript, so some type modification is required for the middlewares to work properly.
We first add the keycloak token, since this is added by express-jwt.
Also we want to have the user data in the context of the request, so lets have a type for that added as well.
*/

import { RequestUser, UserToken } from "./requestExtensions"
declare global {
    namespace Express {
        interface Request {
            auth? : UserToken,
            user? : RequestUser
        }

    }
}