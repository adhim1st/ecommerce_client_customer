# ecommerce_client_customer

POSTMAN Documentation  
[https://documenter.getpostman.com/view/13590478/TVmQfcBZ](https://documenter.getpostman.com/view/13590478/TVmQfcBZ)

DEMO  
[https://e-commerce-client-adhim1st.web.app/](https://e-commerce-client-adhim1st.web.app/)

List of available endpoints:

- `POST /login`
- `POST /register`
- `GET /products`
- `GET /products/:id`
- `GET /cart`
- `POST /cart`
- `PUT /cart/increase`
- `PUT /cart/decrease`
- `DELETE /cart`
- `GET /wishlist`
- `POST /wishlist`
- `DELETE /wishlist`

### POST /login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
  "access_token": "string"
}
```

### POST /register

Request:

- data:

```json
{
  "email": "bigshow@wwe.com",
  "password": "bigshow"
}
```

Response:

- status: 200
- body:
  ​

```json
{
  "email": "bigshow@wwe.com",
  "id": 7
}
```

### GET /products

Description: Get all products

Request:

- headers:
  - access_token: string

Response:

- status: 200
- body:
  ​

```json
[
    {
        "id": 9,
        "name": "Xiaomi Redmi Note 9",
        "image_url": "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-9-4.jpg",
        "price": 2628000,
        "stock": 50,
        "createdAt": "2020-12-15T10:53:27.565Z",
        "updatedAt": "2020-12-15T10:53:27.565Z"
    },
    {
        "id": 8,
        "name": "iphone",
        "image_url": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg",
        "price": 100,
        "stock": 10,
        "createdAt": "2020-12-14T17:00:00.000Z",
        "updatedAt": "2020-12-14T17:00:00.000Z"
    },
  ...
]
```

### GET /products/:id

Description: Get all products

Request:

- headers:
  - access_token: string
  - params:

```json
{
  "id": 3
}
```

Response:

- status: 200
- body:
  ​

```json
[
    {
        "id": 3
        "name": "Iphone 12 128GB",
        "image_url": "https://www.citypng.com/public/uploads/small/21602681980nyvpfanmd9fycm48ugtwzaiejtxxvsjzc8uaf0yglia3ijghfcd343eq3cdqvl6sgxs8gl05dh7ttkigntwkvme8x1uxazefw9rb.png",
        "price": 16499000,
        "stock": 20,
        "createdAt": "2020-12-12T05:42:34.594Z",
        "updatedAt": "2020-12-12T07:14:24.762Z"
    }
]
```

### GET /cart

Description: Get all User Cart

Request:

- headers:
  - access_token: string

Response:

- status: 200
- body:
  ​

```json
[
    {
        "UserId": 2,
        "ProductId": 9,
        "quantity": 2,
        "createdAt": "2020-12-17T02:08:40.425Z",
        "updatedAt": "2020-12-17T02:08:42.387Z",
        "Product": {
            "id": 9,
            "name": "Xiaomi Redmi Note 9",
            "image_url": "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-9-4.jpg",
            "price": 2628000,
            "stock": 50,
            "createdAt": "2020-12-15T10:53:27.565Z",
            "updatedAt": "2020-12-15T10:53:27.565Z"
        }
    },
    {
        "UserId": 2,
        "ProductId": 8,
        "quantity": 3,
        "createdAt": "2020-12-17T02:08:46.008Z",
        "updatedAt": "2020-12-17T02:08:49.341Z",
        "Product": {
            "id": 8,
            "name": "iphone",
            "image_url": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg",
            "price": 100,
            "stock": 10,
            "createdAt": "2020-12-14T17:00:00.000Z",
            "updatedAt": "2020-12-14T17:00:00.000Z"
        }
    }
  ...
]
```

### POST /cart

Description: Create item Cart

Request:

- headers:
  - access_token: string
- body:

```json
{
  "ProductId": "10"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "UserId": 2,
  "ProductId": 10,
  "updatedAt": "2020-12-17T05:40:25.159Z",
  "createdAt": "2020-12-17T05:40:25.159Z",
  "quantity": 1
}
```

### PUT /cart/increase

Description: Increase quantity of item Cart by 1

Request:

- headers:
  - access_token: string
- body:

```json
{
  "ProductId": "10"
}
```

Response:

- status: 201
- body:
  ​

```json
[
  [
    [
      {
        "id": 3,
        "UserId": 4,
        "ProductId": 10,
        "quantity": 6,
        "createdAt": "2020-12-16T05:28:38.721Z",
        "updatedAt": "2020-12-17T05:42:38.314Z"
      }
    ],
    1
  ]
]
```

### PUT /cart/decrease

Description: Decrease quantity of item Cart by 1

Request:

- headers:
  - access_token: string
- body:

```json
{
  "ProductId": "10"
}
```

Response:

- status: 201
- body:
  ​

```json
[
  [
    [
      {
        "id": 3,
        "UserId": 4,
        "ProductId": 10,
        "quantity": 5,
        "createdAt": "2020-12-16T05:28:38.721Z",
        "updatedAt": "2020-12-17T05:43:31.085Z"
      }
    ],
    1
  ]
]
```

### DELETE /cart/:id

Description: Delete Cart by id

Request:

- headers:
  - access_token: string
- params:

```json
{
  "id": "10"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "message": "successfully delete a cart item"
}
```

### GET /wishlist

Description: Get all User Wishlist

Request:

- headers:
  - access_token: string

Response:

- status: 200
- body:
  ​

```json
[
  {
    "UserId": 2,
    "ProductId": 10,
    "status": "true",
    "createdAt": "2020-12-17T05:55:45.776Z",
    "updatedAt": "2020-12-17T05:55:45.776Z",
    "Product": {
      "id": 10,
      "name": "Samsung Note 20",
      "image_url": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-note20-1.jpg",
      "price": 2200000,
      "stock": 10,
      "createdAt": "2020-12-16T05:05:13.673Z",
      "updatedAt": "2020-12-16T05:05:13.673Z"
    }
  },
  {
    "UserId": 2,
    "ProductId": 8,
    "status": "true",
    "createdAt": "2020-12-17T05:55:46.501Z",
    "updatedAt": "2020-12-17T05:55:46.501Z",
    "Product": {
      "id": 8,
      "name": "iphone",
      "image_url": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg",
      "price": 100,
      "stock": 10,
      "createdAt": "2020-12-14T17:00:00.000Z",
      "updatedAt": "2020-12-14T17:00:00.000Z"
    }
  }
]
```

### POST /wishlist

Description: Create item Wishlist

Request:

- headers:
  - access_token: string
- body:

```json
{
  "ProductId": "9"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "UserId": 2,
  "ProductId": 9,
  "updatedAt": "2020-12-17T05:59:37.049Z",
  "createdAt": "2020-12-17T05:59:37.049Z",
  "status": "true"
}
```

### DELETE /wishlist/:id

Description: Delete Wishlist by ProductId

Request:

- headers:
  - access_token: string
- params:

```json
{
  "id": "10"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "message": "successfully delete a wishlist item"
}
```
