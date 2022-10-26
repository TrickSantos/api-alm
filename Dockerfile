# FROM node:16.14.0-alpine
# 
# WORKDIR /app
# COPY --chown=node:node package*.json ./
# RUN yarn install --production
# RUN npx prisma generate
# COPY . .
# RUN yarn build
# 

# 
# CMD ["yarn", "start:prod"]
FROM node:16-alpine AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json ./
COPY yarn.lock ./
COPY prisma ./prisma/

# Install app dependencies
RUN yarn install

COPY . .

RUN yarn build

FROM node:16-alpine as production

ARG DATABASE_URL=${DATABASE_URL}
ARG JWT_SECRET=${JWT_SECRET}
ARG BULL_HOST=${BULL_HOST}
ARG BULL_PORT=${BULL_PORT}
ARG BULL_PASSWORD=${BULL_PASSWORD}
ARG PORT=${PORT}

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/dist ./dist

CMD ["yarn", "run", "start:prod"]
