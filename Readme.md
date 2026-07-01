# IAM Demo - A client authorization project using Keycloak for user control (WIP)

<p align="center">
  <img src="/docs/kc.png" width="60" />
  <img src="/docs/node.png" width="60" />
  <img src="/docs/react.png" width="60" />
  <img src="/docs/ts.png" width="60" />
  <img src="/docs/vite.png" width="60" />
</p>

This is a sample project that I've made to study usage of Keycloak, to learn more about external identity providers.  
The Keycloak instance within the Docker container uses a realm of users to authorize logins and permissions within a full-stack application.

The front-end application is a somewhat ordinary React app that is connected to a Node.js Express backend server.

<p align="center">
  <img src="/docs/basic-architecture.drawio.png" width="500" />
</p>

# Missing content

Docker turnkey setup - missing default realms, clients, mappers etc.  
Adding a router for the react app.  
Adding role based auth demos   
Adding styling and more visual content to the react app  
Proper session related ui elements such as logout and an improved login.  
