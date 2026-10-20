FROM node:20-bookworm-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

ENV NODE_ENV=development
ENV PORT=5000

EXPOSE 5000

ENTRYPOINT ["sh", "/usr/src/app/docker-entrypoint.sh"]
