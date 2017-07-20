# FLACADA

The Florida Academic Advising Association (FLACADA) web application allows users to see all exhibitors, sponsors, sessions and speakers from the conference. It also allows users to create an account so they can add sessions to a schedule and have their own personalized schedule for the conference. Admins will also have the privilege to add and delete sessions, speakers, sponsors and exhibitors from the app.

### Installing (Mac)

* Clone this repo and navigate to the root directory and run the command
  $npm install
* Download mongodb - [Here's how to set it up](https://docs.mongodb.com/manual/administration/install-community/)
* Then open a terminal window and run:
 $ mongod
 $ use flacada
* Since it'll be an empty database, much of the pages won't be populated.
* To run the application run $nodemon start for a local environment and open your preferred browser and navigate to localhost:3000


### Installing (Windows)
* Clone this repo and navigate to the root directory and run the command
  $npm install
* Download mongodb - [Here's how to set it up](https://docs.mongodb.com/manual/administration/install-community/)
* Create a folder called mongodb wherever you want to store the information
* Within the mongodb folder create another folder called data
* On the terminal go to the location of the mongodb folder and run:
 $ mongod --dbpath data
* This gives you an empty database. To create a database or a collection from the mongo terminal run:
$ mongo
* To see the databases in the system run:
$ show dbs
* If you don't see the flacada database, just create it with:
$ use flacada
* Also, on the root of the directory where the repo has been cloned run:
 $ nodemon
* To run the application run $nodemon start for a local environment and open your preferred browser and navigate to localhost:3000

### Heroku information
* Create an account on heroku and ask the product owner for access to the app
* To sign in to the heroku account, on the root directory of the github cloned repo, run:
$ heroku login
* Then type your credentials
* To create a local repository of the heroku application:
$ heroku git:remote -a sheltered-mesa-44284
* To open the remore database for the heroku app:
* First install adds by running:
$ heroku addons:add mongolab
* Then:
$ heroku addons:open mongolab
* To push data into the application, create a temporary folder:
* mkdir -p ~/tmp/mongodump
* Then:
$ mongodump -h localhost:27017 -d flacada -o ~/tmp/mongodump
* Where:
* -h: The host server (and port)
* -d: The database name
* -o: The output destination folder
* Using the database URI (which can be found when the mongolab is opened), run:
* mongorestore -h (to fill in) -d (to fill in) -u (to fill in) -p (to fill in) ~/tmp/mongodump/flacada
* Where:
* -h: Live host and port
* -d: Live database name
* -u: Username for the live database (found under users in the mongolab)
* -p: Password for the live database (found under users in the mongolab)
* To connect the MongoDB shell to the external database run:
$ mongo hostname:port/database_name -u username -p password



## Deployment

The app is deployed on Heroku using mLab live database, ask product owner for more information.

## Built With

* [MongoDB](https://www.mongodb.com/) - Database
* [Express](https://expressjs.com/) - Web framework
* [Angular](https://angularjs.org/) - The frontend framework used
* [NodeJS](https://nodejs.org/en/) - The backend framework used

## Authors

* **Nickolas Morales** - *Mostly Front End*
* **Mabel Amaya** - *Mostly Back End*

## License

The MIT License (MIT)
Copyright (c) 2017 Florida International University
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Acknowledgments

* Hat tip to anyone who's code was used when trying to find solutions to bugs on Stack Overflow, and Getting Started pages in the respective technologies.
