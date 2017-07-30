# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

### Technologies
* Frontend - ReactJS(0.14.8) with flux
* Backend - ROR(5.0.4)
* Database - Postgres

### API Documentation

* Get first 10 products
...URL - /products.json
...Response
```javascript
[
	{
		"id":3,
		"name":"Urban Decay Naked 3",
		"category":"Beauty",
		"under_sale":false,
		"price":100,
		"sale_price":null,
		"sale_text":null,
		"created_at":"2017-07-30T13:45:46.135Z",
		"updated_at":"2017-07-30T13:45:46.135Z"
	}
]
```

Available query params 
1. pageNo=4
2. category=Beauty
3. startPrice=100&endPrice=9000

Combination of available params are also supported

* Get the detail the 1 product
...URL - /products/3.json
...Response
```javascript
	{
		"id":3,
		"name":"Urban Decay Naked 3",
		"category":"Beauty",
		"under_sale":false,
		"price":100,
		"sale_price":null,
		"sale_text":null,
		"created_at":"2017-07-30T13:45:46.135Z",
		"updated_at":"2017-07-30T13:45:46.135Z"
	}
```

### Rake command to create dummy products
* rake product:create_electronics_products
* rake product:create_beauty_products

### Command to start application
* Backend - Go to root directory of project and run command - rails s
* Frontend - Go to root directory of project and run command - cd client && npm run build:development
