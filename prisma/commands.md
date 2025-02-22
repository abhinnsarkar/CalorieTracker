# Prisma Commands Cheat Sheet

## About Prisma & Migrations

Prisma is an ORM (Object-Relational Mapping) tool that helps manage database connections and queries in your application. It connects to your database using a connection string and generates a type-safe client to interact with it.

Migrations in Prisma help keep your database schema in sync with your `schema.prisma` file. Whenever you add or modify models, you create a new migration to apply these changes to the database in a structured way. For quick updates without migrations, `db push` can be used, but it is not recommended for production.

## Setup

Initialize Prisma:

```sh
npx prisma init
```

## Load Environment Variables

```sh
npx dotenv -e .env.local -- npx prisma generate
```

## Apply Changes to Database (Migrations)

When you modify your `schema.prisma` file (e.g., adding a new model or changing a field), you need to apply these changes to your database using migrations.

```sh
npx dotenv -e .env.local -- npx prisma migrate dev --name update
```

-   **Purpose:** Creates a migration file and updates the database schema.
-   **Use Case:** When adding new models or making structural changes that need to be versioned.
-   **Sync Needed?** No, because this command ensures your database matches your schema.

## Quick Sync Without Migrations (Not for Production)

```sh
npx dotenv -e .env.local -- npx prisma db push
```

-   **Purpose:** Updates the database to match `schema.prisma` without using migrations.
-   **Use Case:** When making quick, non-critical changes in development.
-   **Sync Needed?** Yes, but this does not create a migration history, so it's not recommended for production.

## Sync with Existing Database

If your database already has tables and you want Prisma to reflect those structures:

```sh
npx dotenv -e .env.local -- npx prisma db pull
```

-   **Purpose:** Fetches the current database schema and updates `schema.prisma`.
-   **Use Case:** When integrating Prisma with an existing database.

## Reset Database (Deletes Data)

```sh
npx dotenv -e .env.local -- npx prisma migrate reset
```

-   **Purpose:** Resets the database and reapplies migrations.
-   **Use Case:** When you need a fresh start during development.

## Deploy Migrations to Production

```sh
npx dotenv -e .env.local -- npx prisma migrate deploy
```

-   **Purpose:** Applies all pending migrations in a production environment.
-   **Use Case:** When deploying changes to a live database.

## Regenerate Prisma Client

Whenever you change your schema, regenerate the Prisma Client:

```sh
npx dotenv -e .env.local -- npx prisma generate
```

## Open Prisma Studio

View and interact with your database via Prisma Studio:

```sh
npx dotenv -e .env.local -- npx prisma studio
```
