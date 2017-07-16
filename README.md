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
