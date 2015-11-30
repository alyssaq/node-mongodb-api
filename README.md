# Nodejs, Express 4, MongoDB + Mongoose API boilerplate

Supports either a locally-running MongoDB or MongoDB as-a-service

`crud` endpoint supports operations without any authentication.

`note` endpoint uses Basic Auth.


## Setup
1. Install [mongoDB](http://docs.mongodb.org/manual/installation/) OR create an account with either [MongoLab](https://mongolab.com/) or [Compose MongoDB](https://www.compose.io/mongodb/)
1. Install dependencies: `npm install`

## Running
1. Run `npm start`
1. Specify Mongo Settings (read below). Settings in `app/config.js`
1. Open <http://localhost:3000/>
1. If you see the `Hi` message and no db connection errors, it works!

## Sample usage
1. Comment out the specified lines in `app/index.js` to populate your database with a `crud` table with the sample json data in `data/crud.json`

2. Run `npm start` and verify that tables have been populated with:
`curl localhost3000/note/

## Specify MongoDB Settings
You may connect to [MongoLab](https://mongolab.com/), [Compose MongoDB](https://www.compose.io/mongodb/) or a locally-running [MongoDB](http://docs.mongodb.org/manual/tutorial/getting-started-with-the-mongo-shell/)

Connect to MongoDB by specifying the URI in your environment variable in ~/.bash_profile or in `app/config.js`

Environment variable `MONGOLAB_URI` for MongoLab, `COMPOSEMONGO_URL` for Compose MongoDB:
```sh
# To connect to MongoLab
MONGOLAB_URI = mongodb://<username>:<password>@<host>.mongolab.com:<port>/<databasename>

# To connect locally
MONGOLAB_URI =  mongodb://127.0.0.1:27017/test
```

## License
[MIT](http://alyssaq.github.io/mit-license/)