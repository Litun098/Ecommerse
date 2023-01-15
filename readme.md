# Ecommerce API

#### install required packages

```bash
    npm i
``` 
Create Product Catagories
```bash
    npx sequelize model:generate --name Catagories --attributes name:text,description:text
```

Create Product table
```bash
    npx sequelize model:generate --name Products --attributes name:text,cost:integer,description:text,quantity:integer
```

Post API: localhost:2500/ecomm/api/v1/categories { "description":"about Fashion", "name" :"Fashion" }

GET API: localhost:2500/ecomm/api/v1/categories localhost:2500/ecomm/api/v1/categories/1

PUT API: localhost:2500/ecomm/api/v1/categories/1 { "name" : "bank", "description":"about bank & payment" }

DELETE API: localhost:2500/ecomm/api/v1/categories/1

Products: npx sequelize model:generate --name Products --attributes name:text,cost:integer,description:text,quantity:integer

POST API localhost:2500/ecomm/api/v1/products

{ "description":"For men", "name" :"summer shirts", "cost": 870, "quantity": 20 }

GET API http://localhost:2500/ecomm/api/v1/products

GET API based on product ID http://localhost:2500/ecomm/api/v1/products/1

Update API/ PUT localhost:2500/ecomm/api/v1/products/2

{ "name" : "bank", "description":"about bank & payment", "quantity": 24, "cost": 450 }

DELETE API: localhost:2500/ecomm/api/v1/products/2
