# build stage
FROM oven/bun AS build-stage
WORKDIR /app
COPY package*.json ./
RUN bun install
COPY . .
ARG GITHUB_TOKEN
RUN GITHUB_TOKEN=$GITHUB_TOKEN bun run build

# production stage
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]