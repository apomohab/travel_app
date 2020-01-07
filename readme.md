# Travel Planner Web App
This is a small web app that allows users to add/remove flights and get details about the flight.

# Setup
Open terminal window, navigate to the directory and run command `npm install`

# Back-end apis in use

 - DarkSky - For fetching weather information. 
 - Geonames - For fetching destination lat and lng. 
 - Pixabay - For fetching a preview image of the destination.

 Keys can be obtained from: [Dark Sky API](https://darksky.net/dev), [GeoNames API](http://www.geonames.org/export/web-services.html) & [Pixabay API](https://pixabay.com/api/docs)

# Testing
The web app uses Jest as a unit testing library. To run the tests, in terminal run command `npm run test`

# Server
To run the local node server (runs on port 3000), in the terminal run command `npm run server`