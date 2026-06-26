//https://vite.dev/guide/env-and-mode
//Vite recognizes this file for env type definitions!

interface ViteTypeOptions {

  strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_KEYCLOAK_URL: string
  readonly VITE_KEYCLOAK_REALM: string
  readonly VITE_KEYCLOAK_CLIENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}