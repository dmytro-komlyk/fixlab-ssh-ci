# FROM node:18 AS server-builder

# WORKDIR /app

# COPY . .

# RUN npm install 
# RUN npm run build

# EXPOSE 3000

# CMD ["npm", "run", "start:prod"]
FROM node:18 AS development

WORKDIR /app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:18 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /app/dist ./dist

EXPOSE 3000

CMD ["npm", "run", "start:prod"]