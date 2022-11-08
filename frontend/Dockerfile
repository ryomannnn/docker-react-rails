#開発環境用
FROM node:16.18.0-slim AS dev

ENV NODE_ENV=development

ENV ROOT=/app

WORKDIR /app

#RUN useradd node && chown -R node /app

#User node

COPY package.json .

RUN npm install --no-progress

COPY . .


CMD ["npm","run", "dev"]

EXPOSE 3000


# # #本番環境パッケージインストール+ビルド
# FROM node:16.18.0-slim AS build-stage

# WORKDIR /app

# RUN useradd node && chown -R node /app

# User node

# COPY package.json package-lock.json 

# RUN npm install --production --no-progress

# RUN npm run build

# #本環境ランタイム用
# FROM node:16.18.0-slim AS prod

# WORKDIR /app

# RUN useradd  node && chown -R node /app

# ENV NODE_ENV=production

# User node

# COPY --from=build-stage /app/build ./build

# COPY --from=build-stage /app/node_modules ./node_modules

# EXPOSE 3000

# CMD ["npm","start"]