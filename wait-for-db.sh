#!/bin/sh
# wait-for-db.sh

host="$1"
port="$2"
shift 2  # Убираем host и port из аргументов
cmd="$@"

until nc -z "$host" "$port"; do
  echo "Ждем, пока база данных $host:$port станет доступной..."
  sleep 1
done

echo "База данных $host:$port доступна!"
exec $cmd