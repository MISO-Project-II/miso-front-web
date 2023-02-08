FROM node:lts-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run prod

FROM nginx:1.19
COPY ./nginx.conf /etc/nginx/nginx/conf
COPY --from=build /app/dist/SportApp/ /usr/share/nginx/html