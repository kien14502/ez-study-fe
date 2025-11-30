FROM --platform=linux/amd64 node:20-alpine AS builder



RUN apk add --no-cache yarn



WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install --ignore-scripts

COPY . ./

RUN yarn exec next telemetry

RUN yarn build


FROM --platform=linux/amd64 node:20-alpine AS runner



WORKDIR /app



ENV PORT=3000

ENV NODE_ENV=production



COPY --from=builder /app/public ./public

COPY --from=builder /app/.next/standalone ./

COPY --from=builder /app/.next/static ./.next/static

COPY --from=builder /app/locale ./locale 



EXPOSE ${PORT}



CMD ["node", "server.js"]