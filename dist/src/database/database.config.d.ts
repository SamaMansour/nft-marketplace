declare const _default: (() => {
    type: string;
    logging: boolean;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    autoLoadEntities: boolean;
    synchronize: boolean;
    entities: string[];
    migrations: string[];
    cli: {
        migrationsDir: string;
    };
    seeds: string[];
    factories: string[];
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    logging: boolean;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    autoLoadEntities: boolean;
    synchronize: boolean;
    entities: string[];
    migrations: string[];
    cli: {
        migrationsDir: string;
    };
    seeds: string[];
    factories: string[];
}>;
export default _default;
