import "dotenv/config"
import path from "path"
import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { Default1683043011278 as migration } from "./migrations/1683043011278-default"
import { User } from "./entities/users.entities"
import { Ads } from "./entities/ads.entities"
import { Comments } from "./entities/comments.entities"
import { Gallery } from "./entities/gallery.entities"
import { Address } from "./entities/address.entities"

const dataSourceConfig = (): DataSourceOptions => {

    const entitiesPath: string = path.join(__dirname, "./entities/**.{js, ts}")
    const migrationsPath: string = path.join(__dirname, "./migrations/**.{js, ts}")

    const dbUrl: string | undefined = process.env.DATABASE_URL

    if (!dbUrl) {
        throw new Error("ENV var DATABASE_URL does not exists")
    }

    const nodeEnv: string | undefined = process.env.NODE_ENV

    if (nodeEnv === "test") {
        return {
            type: "sqlite",
            database: path.join(__dirname, '/sqlite3.db'),
            synchronize: true,
            entities: [entitiesPath]
        }

    }

    return {
        type: "postgres",
        url: process.env.DATABASE_URL!,
        synchronize: true,
        logging: true,
        migrations: [migration],
        entities: [User, Address, Ads, Comments, Gallery]
    }
}

const AppDataSource = new DataSource(dataSourceConfig())

export { AppDataSource }
