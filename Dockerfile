FROM node:16.14.0-alpine

WORKDIR /app
COPY ./dist /app
EXPOSE 80

ARG DATABASE_URL=${DATABASE_URL}
ARG JWT_SECRET=${JWT_SECRET}

CMD ["node", "dist/src/main"]
