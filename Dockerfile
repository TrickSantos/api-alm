FROM node:16.14.0-alpine
WORKDIR /app

COPY dist /app

COPY package.json /app
COPY yarn.lock /app
COPY prisma ./prisma/

RUN yarn install

ARG DATABASE_URL=${DATABASE_URL}
ARG JWT_SECRET=${JWT_SECRET}
ARG BULL_HOST=${BULL_HOST}
ARG BULL_PORT=${BULL_PORT}
ARG BULL_PASSWORD=${BULL_PASSWORD}
ARG PORT=${PORT}

CMD ["yarn", "run", "start:prod"]