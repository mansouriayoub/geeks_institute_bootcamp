# NexusMarket Backend - Postman Testing Guide

This guide explains how to test the NexusMarket backend API using Postman.

## Prerequisites
- MongoDB must be running (connected via `MONGO_URI` in `.env`).
- Server should be running: `npm run dev` (starts on `http://localhost:5000` by default).

---

## 1. User Management

### Register a User
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/users/register`
- **Body:** `JSON` (raw)
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "securePassword123",
  "role": "user"
}
```
*Note: Roles can be "user", "admin", or "vendor".*

### Get User by ID
- **Method:** `GET`
- **URL:** `http://localhost:5000/api/users/<USER_ID>`
*(Replace `<USER_ID>` with the `_id` returned from the registration response)*

---

## 2. Product Management

### Create a Product
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/products`
- **Body:** `JSON` (raw)
```json
{
  "title": "Ergonomic Chair",
  "price": 299.99,
  "description": "Premium office chair for long working hours.",
  "stock": 50,
  "category": "Furniture",
  "owner": "<USER_ID>"
}
```
*(Replace `<USER_ID>` with the `_id` of a vendor/user)*

### Get Products by Vendor
- **Method:** `GET`
- **URL:** `http://localhost:5000/api/products/vendor/<USER_ID>`

---

## 3. Order Management

### Place an Order (Snapshot Pattern)
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/orders`
- **Body:** `JSON` (raw)
```json
{
  "buyerId": "<BUYER_ID>",
  "items": [
    {
      "productId": "<PRODUCT_ID>",
      "quantity": 1
    }
  ]
}
```
*(Replace `<BUYER_ID>` and `<PRODUCT_ID>` with valid IDs from previous steps)*

---

## Technical Features Tested
- **Bcrypt Hashing**: Passwords are automatically hashed before saving (verified in DB).
- **Snapshot Pattern**: Orders save the product name and price at the time of purchase.
- **Stock Management**: Stock decreases automatically using `$inc` when an order is placed.
- **Populate**: User objects are populated in product and order queries.
