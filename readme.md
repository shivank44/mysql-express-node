# For Development

Clone Repository 
Rename .env.example to .env
Change in knexfile_example.js to knexfile.js and replace MySql credentials with your credentials

Run the batch of commands
- npm install
- knex migrate:latest
- knex seed:run
