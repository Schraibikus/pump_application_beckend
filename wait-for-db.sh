#!/bin/sh
# wait-for-db.sh

host="$1"
port="$2"
shift 2
cmd="$@"

echo "Waiting for database ($host:$port)..."

until nc -z "$host" "$port"; do
  >&2 echo "Database is unavailable - sleeping"
  sleep 1
done

>&2 echo "Database is up - executing command"
exec $cmd