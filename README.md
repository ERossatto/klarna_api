# klarna_api

<h3>Small REST-based service to retrieve information about the weather in different cities.</h3>

<br>
<hr>
<br>

## How to use

  1. Clone de repository
  ```bash
    $ git clone git@github.com:ERossatto/klarna_api.git
  ```

  2. Enter into your repositoty directory
  ```bash
    $ cd klarna_api
  ```

  3. Install the project
  ```bash
    $ npm install
  ```

  4. Run the project
  ```bash
    $ npm start
  ```

  5. The API will be avaiable on [http://localhost:8080](http://localhost:8080)

<br>
<hr>
<br>

## How to test
  ### Try it on Insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Klarna_API&uri=https%3A%2F%2Fraw.githubusercontent.com%2FERossatto%2Fklarna_api%2Fmain%2Finsomnia_klarna_api.json)

  <br>

  ### Try it on your brownser
  After completing the steps of "How to use" try it out by clicking the links below.

  Sample:

  | Description | URL |
  |:--------| :----|
  | Get all cities within 10km radius of the given coordinate | [http://localhost:8080/cities?lat=49.48&lng=8.48](http://localhost:8080/cities?lat=49.48&lng=8.48) |
  | Get a specific city info by id | [http://localhost:8080/cities/2814795](http://localhost:8080/cities/2814795) |
  | Get a specific city weather by id | [http://localhost:8080/cities/2872828/weather](http://localhost:8080/cities/2872828/weather) |

<br>
<hr>
<br>

## How it works
  ### <b> /cities <b>
  List the available cities around the specified latitude/longitude within a radius of 10 kilometers.

  Sample:
  * `HTTP 200 Ok` with body:
  ```js
  [
    {
      "id":2873891,
      "name":"Mannheim"
    },
    {
      "id":6555232,
      "name":"Altrip"
    }, 
    ...
  ]
  ```
  * `HTTP 400 Bad Request` if parameters are missing:
  ```js
  {
    "code":"BadRequestError",
    "message":"lat/lng required"
  }
  ```

  <br>

  ### <b> /cities/{city_id} <b>
  Retrieve the details for a city by city_id.

  Sample:
  * `HTTP 200 Ok` with body:
  ```js
  {
    "id":2873891,
    "name":"Mannheim", 
    "lat":49.488331, 
    "lng":8.46472
  }
  ```
  * `HTTP 404 Not Found` if the city_id was not found:
  ```js
  {
    "code":"NotFoundError",
    "message":"not found"
  }
  ```

  <br>

  ### <b> /cities/{city_id}/weather <b>
  Retrieve the weather data for a city by city_id.

  Sample:
  * `HTTP 200 Ok` with body:
  ```js
  {
    "type": "Clear",
    "type_description": "clear sky",
    "sunrise": "2016-08-23T08:00:00.000Z",
    "sunset": "2016-08-23T22:00:00.000Z",
    "temp": 29.72,
    "temp_min": 26.67,
    "temp_max": 35,
    "pressure": 1026,
    "humidity": 36,
    "clouds_percent": 0,
    "wind_speed": 1.5
  }
  ```
  * `HTTP 404 Not Found` if the city_id was not found:
  ```js
  {
    "code":"NotFoundError",
    "message":"not found"
  }
  ```

<br>
<hr>
<br>

## About project structure
  This project uses "Package by Feature" architecture.

<br>
<hr>
<br>

## Limitations and Improvements

  - No docker setup - If the project grows up and require more dependencies, it may be convenient to dockerize it.

  - No unit tests - This API was made in a very simple mvp manner, so there is no testing set yet.

  - Expose the API KEY - Normally we use environment variables to hide secret keys. But in this case we chose not to, in order to simplify the use of the api.
