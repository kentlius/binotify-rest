# Binotify REST Service

## Skema Basis Data

[`Prisma Schema`](prisma/schema.prisma)

## Endpoint, payload, dan response API

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/20643685-cee84df9-53be-43b2-9e1f-4292472613e6?action=collection%2Ffork&collection-url=entityId%3D20643685-cee84df9-53be-43b2-9e1f-4292472613e6%26entityType%3Dcollection%26workspaceId%3Deb9d48fd-f43b-4993-a857-08f6401860f6)

## Daftar Requirement

- NodeJS
- npm
- Postgresql

## Cara Instalasi

Clone repository

```sh
git clone https://gitlab.informatika.org/if3110-2022-k02-01-06/binotify-rest.git
```

Install npm dependencies

```sh
cd binotify-rest
npm install
```

Konfigurasi file `.env`

```sh
cp .env.example .env
```

Create database and seeding

```sh
npx prisma migrate dev --name init
```

## Cara Menjalankan Server

```sh
npm run dev
```

Lalu buka http://localhost:3000/

## Pembagian Tugas
Backend Binotify Premium Database: 13520069
Backend Binotify Premium Fungsi Autentikasi Pengguna : 13520006, 13520069
Backend Binotify Premium Fungsi Pengelolaan Lagu Premium : 13520069, 13520167 
Backend Binotify Premium Fungsi List Penyanyi : 13520006,13520069  
Backend Binotify Premium Fungsi List Lagu dari Penyanyi: 13520069, 13520167  
