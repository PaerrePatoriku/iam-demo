import { expressjwt as jwt } from 'express-jwt'
import JwksRsa from 'jwks-rsa'
import dotenv from 'dotenv'

dotenv.config({ path: `.env` })
const checkJwtToken = () => {

    /*
        Explanation:
        The verification is done on an assymetric rsa256 key.
        This means that we can fetch and cache the public key stored in the keycloak.
        Keycloak also knows the private key so only keycloak can create the tokens. The public side only verifies.
        The middleware cares about the following things:
            Can the public key validate the JWT?
            Is the issuer correct?
            Is the audience correct? 

        Once these are OK, we can be certain that the token is valid and correct for the app.
        The token also contains a bunch of other info that we can use in-app to do further app specific authorization.

        The audience can be mapped cross clients with adding a mapper for audience that matches the desired audience, then 
        adding this as a new client scope to the desired public client "client scope"    */
        console.log(process.env.NODE_KEYCLOAK_URL, process.env.NODE_KEYCLOAK_URL)
    return jwt({ 
        secret : JwksRsa.expressJwtSecret({
            cache : true,
            jwksUri : `${process.env.NODE_KEYCLOAK_URL}/realms/${process.env.NODE_KEYCLOAK_REALM}/protocol/openid-connect/certs`
        }),
        audience : "backend",
        issuer : `${process.env.NODE_KEYCLOAK_URL}/realms/${process.env.NODE_KEYCLOAK_REALM}`,
        algorithms : ["RS256"]
    })
}
export { checkJwtToken }