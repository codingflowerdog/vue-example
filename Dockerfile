# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
#ARG NODE_ENV="dev"
RUN npm install
COPY . .
RUN NODE_ENV=$NODE_ENV npm run build

# production stage
FROM nginx:stable-alpine as production-stage
#COPY /config/nginx/stage.conf /etc/nginx/conf.d/default.conf
#COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]