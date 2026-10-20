#!/bin/sh
set -eu

attempt=1
max_attempts=30

while ! npx knex migrate:latest; do
  if [ "$attempt" -ge "$max_attempts" ]; then
    echo "Database migrations failed after $max_attempts attempts."
    exit 1
  fi

  echo "Database is not ready yet; retrying migration (attempt $((attempt + 1))/$max_attempts)..."
  attempt=$((attempt + 1))
  sleep 2
done

exec npm start
