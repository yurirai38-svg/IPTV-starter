# IPTV Starter

Starter project for an IPTV platform with:
- NestJS API
- PostgreSQL + Prisma
- Next.js web app
- HLS video player
- JWT authentication

## Stack
- Backend: NestJS + Prisma + PostgreSQL
- Frontend: Next.js + TypeScript + HLS.js

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start PostgreSQL with Docker:
   ```bash
   docker run --name iptv-db -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=iptv -p 5432:5432 -d postgres:15
   ```

3. Configure backend env:
   ```bash
   cp apps/api/.env.example apps/api/.env
   ```

4. Set up Prisma and database:
   ```bash
   cd apps/api
   npx prisma generate
   npx prisma db push
   ```

5. Run backend:
   ```bash
   cd apps/api
   npm run dev
   ```

6. Run frontend:
   ```bash
   cd apps/web
   npm run dev
   ```

7. API: http://localhost:3001
8. Web: http://localhost:3000

## Demo user

Register:
```bash
curl -X POST http://localhost:3001/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@iptv.com",
    "password": "123456",
    "name": "Admin"
  }'
```

Login:
```bash
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@iptv.com",
    "password": "123456"
  }'
```

Create a channel with the returned token:
```bash
curl -X POST http://localhost:3001/channels \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{
    "name": "TV Demo",
    "slug": "tv-demo",
    "category": "Notícias",
    "language": "pt-BR",
    "streamUrl": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    "logoUrl": "https://placehold.co/200x120",
    "order": 1
  }'
```

## Notes

This is a starter project for an IPTV/OTT app that supports:
- channel catalog
- live streaming via HLS
- JWT login
- admin API for channels
- web player

This is intended for legal, licensed content usage only.
