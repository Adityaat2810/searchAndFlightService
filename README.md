# Welcome to Flight Service 

## Project Setup
-Clone the project on your local 
-Execute `npm install` on the same path as of your root directory of downloaded project
-Create `.env` file in the root directory and add following enviorment variable
    -`PORT=3000`
-Inside the `src/config` folder create a new file `config.json` and then add the following piece.json

```
{
  "development": {
    "username":<YOUR_DB_LOGIN_NAME> ,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  
}

 
```
-Once you have added your db config as listed above , go to the src folder from your terminal and execute `npm sequelize db:create`

## DB Design
  -Airplane Table
  -Flight
  -Airport 
  -City
  
  - A flight belongs to an airplane but one airpalne can be used in multiple flights.
  - A city has many airports but one airport belongs to a city .
  - One airport can have many flights ,but a flight belong to one airport 



    