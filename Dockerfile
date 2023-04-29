# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY ./dist ./

# Runtime stage
FROM node:18-alpine

ENV NODE_ENV production
ENV PORT 
ENV SCORE_SERVICE_URL_PROD 
ENV USER_SERVICE_URL_PROD 
ENV JWT_KEY 

COPY --from=builder /app /app
WORKDIR /app
EXPOSE 5000
CMD [ "node", "main" ]
