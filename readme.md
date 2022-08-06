#install required packages

npm i express body-parser nodemon mysql2 dotenv

npm i sequelize sequelize-cli


npx sequelize init

npx sequelize db:create

npx sequelize model:generate --name Catagories --attributes name:text,description:text