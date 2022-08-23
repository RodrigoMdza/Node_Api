import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql", // driver we're using
    host: "localhost", // host of our db
    port: 3306, // default mysql port
    username: "root", // username created to login into mysql server, mine is root for example
    password: "root", // password for the username create when installing the mysql server
    database: "node_class_crm", // our recently created database
    synchronize: false, // this options syncs our models on demand, let's disable it for now
    logging: false, // we don't need this for local development
    entities: ["src/entity/*.ts"], // entities we created in our project, note that the typeorm quick start command created this example entity for us on /entity/User.ts
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
})
