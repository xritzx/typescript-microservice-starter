export enum ENV {
    DEV = "dev",
    PROD = "prod",
    TEST = "test",
    QA = "qa"
}

export type Config = {
    hostName: string;
    restPort: number;
    postgresDB: {
        host: string;
        port: number;
        username: string;
        password: string;
    };
    redisDB: {
        host: string;
        port: number;
    },
    env: ENV;
}

export function initConfig(): Config {
    return {
        hostName: process.env.HOST_NAME || "localhost",
        restPort: parseInt(process.env.HTTP_PORT || "3000"),
        postgresDB: {
            host: process.env.POSTGRES_HOST || "localhost",
            port: parseInt(process.env.POSTGRES_PORT || "5432"),
            username: process.env.POSTGRES_USERNAME || "postgres",
            password: process.env.POSTGRES_PASSWORD || "postgres"
        },
        redisDB: {
            host: process.env.REDIS_HOST || "localhost",
            port: parseInt(process.env.REDIS_PORT || "6379")
        },
        env: process.env.NODE_ENV as ENV || ENV.DEV
    }
}