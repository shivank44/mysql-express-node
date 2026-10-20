# For Development

## Run with Docker

Run the API and MySQL with:

```bash
docker compose up --build
```

The API is available at `http://localhost:5000`. Knex migrations run automatically when the app starts. Stop the services with:

```bash
docker compose down
```

MySQL data is stored in the `mysql_data` Docker volume.

Clone Repository 
Rename .env.example to .env
Add MySql credentials with your credentials in .env

Run the batch of commands
- npm install
- npx knex migrate:latest
- npx knex seed:run
