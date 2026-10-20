# For Development

Clone Repository 
Rename .env.example to .env
Add MySql credentials with your credentials in .env

Run the batch of commands
- npm install
- npx knex migrate:latest
- npx knex seed:run
