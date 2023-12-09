declare namespace NodeJS {
    export type ProcessEnv = {
        PORT:number
        DATABASE_URL: string
        DATABASE_URL_LOCAL: string
        NODE_ENV: string
        DEFAULT_PASS: string
    }
}