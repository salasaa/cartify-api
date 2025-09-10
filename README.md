# Cartify API

REST API to explore grocery information, specifically for daily needs.

## Introduction

Considering that in my previous project I created the Cartify grocery list app, I want to create a simple API to provide information about daily grocery needs.

## REST API Specification

| Endpoint               | HTTP Method | Description                                        | Done |
| ---------------------- | ----------- | -------------------------------------------------- | ---- |
| `/groceries`           | `GET`       | Get all groceries                                  | ✅   |
| `/groceries/:id`       | `GET`       | Get grocery by id                                  | ✅   |
| `/groceries/:category` | `GET`       | Get grocery by category                            | ✅   |
| `/groceries`           | `POST`      | Create a new grocery                               | ✅   |
| `/groceries/:id`       | `DELETE`    | Delete grocery item by id                          | ✅   |
| `/groceries/`          | `DELETE`    | Delete all grocery items                           | ✅   |
| `/groceries/:id`       | `PATCH`     | Update grocery item by id                          |
| `/groceries/:id`       | `PUT`       | Update grocery item by id, create if doesn't exist |

## Design Schemas

Design database shema using dbdiagram.io

- [cartify-api database schema](https://dbdiagram.io/d/cartify-api-database-schema-68c0f6cd61a46d388e4f18df)

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
