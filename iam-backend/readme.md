# The backend portion
Authorizes data to the user based on the authentication using keycloak


# Basic structure
My basic idea for the demo backend:

Typescript express api with...
/routes folder to specify each level in the API hierarchy with each file
/service folder to define a controller/service architecture in one simple format
/schema to define zod schemas, that then validate to payloads. We are using typescript so it makes sense to do type inferences for autofill and validation, and function parameter typing use.

So far the "database" will work in-memory to simplify the demo.

This could be extended by adding a typescript compatible ORM on top. Best format for this would be to build a repo interface with both a memory and prisma, etc- repo as implementations.

For this to happen the repo level should be built first.

