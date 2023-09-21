FROM node:18-alpine AS runner

WORKDIR /app/server

COPY package*.json ./
COPY .env.example ./.env

RUN npm install rimraf
RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app/server

COPY package*.json ./

RUN npm install --only=production

COPY . ./

COPY --from=runner /app/server/dist ./dist
COPY --from=runner /app/server/public ./public

EXPOSE 3000

CMD ["npm", "run", "start:prod"]