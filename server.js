'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { flights } = require('./test-data/flightSeating');
const { reservations, clients } = require('./test-data/reservations');

const PORT = process.env.PORT || 8000;

// various handlers

const handleFlight = (req, res) => {
  const { flightNumber } = req.params;
  // get all flight numbers
  const allFlights = Object.keys(flights);
  // is flightNumber in the array?
  console.log('REAL FLIGHT: ', allFlights.includes(flightNumber));
};


const getFlightNums = (req, res) => {
  // supposed to return an array of flight numbers
  let flightArray = Object.keys(flights);
  res.send(flightArray);
}

const returnFlightInfo = (req, res) => {
  let flightNum = req.params.flight;
  let flightInfo = flights[flightNum];
  res.send(flightInfo);
}

const getAllUsers = (req, res) => {
  // returns an array of all users.
  // Accepts query params of limit and start for pagination.
  // If values are not provided, it will return the first 10 users

  // are they expecting me to create a ton of test data?
  // or a separate array of users? Or what?

  // I have created a separate array of users.

  if (req.params.limit === undefined || req.params.start === undefined) {
    let firstTenClients = [];
    for (let i = 0; i < 10; i++) {
      firstTenClients.push(clients[i]);
    }
    return firstTenClients;
  }
}

const addUser = (req, res) => {
  // creates a new user/reservation
}

// express starts here, obvs

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('dev'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints

  .get('/slingair/flights', getFlightNums)
  .get('/slingair/flights/:flight', returnFlightInfo)
  .get('/slingair/users', getAllUsers) //Accepts query params of `limit` and `start` for pagination. _If values are not provided, it will return the first 10 users_
  .post('/slingair/users', addUser)
  .get('/flights/:flightNumber', handleFlight)
  .use((req, res) => res.send('Not Found'))
  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
