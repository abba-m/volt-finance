import type { Knex } from "knex";

const connection = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "volt_db",
};

const config: { [key: string]: Knex.Config } = {
  development: {
    client: process.env.DB_DIALECT || "mysql",
    connection,
    migrations: {
      tableName: "knex_migrations",
      directory: "../migrations"
    }
  },

  staging: {
    client: process.env.DB_DIALECT || "mysql",
    connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: process.env.DB_DIALECT || "mysql",
    connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

export default config;
