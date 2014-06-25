# Nodejs, Express 4, MongoDb API boilerplate

Supports either a locally-running MongoDB or MongoDB as-a-service

`crud` endpoint supports operations without any authentication.

`fruit` endpoint uses Basic Auth.


## Setup
1. Install [mongoDB](http://docs.mongodb.org/manual/installation/) OR create an account with either [MongoLab](https://mongolab.com/) or [MongoHQ](https://www.mongohq.com/)
1. Install dependencies: `npm install`

## Running
1. Run `npm start`
1. Specify Mongo Settings (read below). Settings in `app/config.js`
1. Open <http://localhost:3000/>
1. If you see the Hi message, it works!

## Sample usage
1. Comment out the specified lines in `app/index.js` to populate your database with a `crud` table with the sample json data in `data/crud.json`

## Specify MongoDB Settings
You may connect to [MongoLab](https://mongolab.com/), [MongoHQ](https://www.mongohq.com/) or a locally-running [MongoDB](http://docs.mongodb.org/manual/tutorial/getting-started-with-the-mongo-shell/)

Connect to MongoDB by specifying the URI in your environment variable in ~/.bash_profile or in `app/config.js`

Environment variable `MONGOLAB_URI` for MongoLab, `MONGOHQ_URL` for MongoHQ:
```sh
# To connect to MongoLab
MONGOLAB_URI = mongodb://<username>:<password>@<host>.mongolab.com:<port>/<databasename>

# To connect locally
MONGOLAB_URI =  mongodb://127.0.0.1:27017/test
```

## License
MIT