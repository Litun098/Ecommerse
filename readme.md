#install required packages

npm i express body-parser nodemon mysql2 dotenv

npm i sequelize sequelize-cli


npx sequelize init

npx sequelize db:create

Create Product Catagories
npx sequelize model:generate --name Catagories --attributes name:text,description:text


Create Product table
npx sequelize model:generate --name Products --attributes name:text,cost:integer,description:text,quantity:integer

