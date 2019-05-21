const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'https://api.darksky.net/forecast/dfb83b71cdc2cc4a496da1f62c00d966/' +
    latitude +
    ',' +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services');
    } else if (error) {
      callback('Unable to find location');
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          ' It is currently ' +
          body.currently.temperature +
          ' degrees out. ' +
          'The high today is ' +
          body.daily.data[0].temperatureHigh +
          ' with a low of ' +
          body.daily.data[0].temperatureLow +
          '. ' +
          'There is a ' +
          body.currently.precipProbability +
          '% chance of rain.'
      );
    }
  });
};

module.exports = forecast;
