# build stage
FROM oven/bun AS build-stage
WORKDIR /app
COPY package*.json ./
RUN bun install
COPY . .
RUN bun run build

# production stage
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]