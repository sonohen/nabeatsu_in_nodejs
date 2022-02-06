# Dev container
FROM node:16 AS build-env
COPY ./app /app
WORKDIR /app
RUN npm ci

FROM gcr.io/distroless/nodejs:16
COPY --from=build-env /app /app
WORKDIR /app
EXPOSE 3000
CMD ["server.js"]
