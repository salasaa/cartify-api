# Cartify API

REST API to explore grocery information, specifically for daily needs.

[cartify-api database](https://cartify-api.salasa.id)

## Introduction

Considering that in my previous project I created the Cartify grocery list app, I want to create a simple API to provide information about daily grocery needs.

## Tech Stack

- Bun
- Docker
- dbdiagram.io (for database schema design)
- Prisma
- PostgreSQL
- Scalar (for API testing)
- TablePlus (for database management)
- Railway (for deployment)

## REST API Specification

| Endpoint                  | HTTP Method | Description               | Done |
| ------------------------- | ----------- | ------------------------- | ---- |
| `/groceries`              | `GET`       | Get all groceries         | ✅   |
| `/groceries/:id`          | `GET`       | Get grocery by id         | ✅   |
| `/groceries/category/:id` | `GET`       | Filter by category id     | ✅   |
| `/groceries`              | `POST`      | Create a new grocery      | ✅   |
| `/groceries/:id`          | `DELETE`    | Delete grocery item by id | ✅   |
| `/groceries/:id`          | `PATCH`     | Update grocery item by id | ✅   |

## Design Schemas

Design database schema using dbdiagram.io

- [cartify-api database schema image](./public/cartify-api-database-schema.png)

## Development

To install dependencies:

```sh
bun install
```

To run:

```sh
bun dev
```

Open http://localhost:3000
