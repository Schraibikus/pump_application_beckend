FROM node:22.14.0

WORKDIR /app

# Устанавливаем PostgreSQL-клиент
RUN apt-get update && apt-get install -y postgresql-client netcat-openbsd

# Сначала копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем все зависимости включая devDependencies
RUN npm install --production=false

# Копируем исходный код
COPY . .

# Компилируем TypeScript
RUN npm run build

EXPOSE 5000

CMD ["./wait-for-db.sh", "db", "5432", "node", "dist/server.js"]


