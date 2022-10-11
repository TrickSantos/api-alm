FROM node:16.14.0-alpine
WORKDIR /app
RUN yarn run build
COPY ./dist /app
RUN yarn install --production
EXPOSE 80

ARG DATABASE_URL=${DATABASE_URL}
ARG JWT_SECRET=${JWT_SECRET}

RUN npx prisma migrate dev --name initial

CMD ["yarn", "start:prod"]
