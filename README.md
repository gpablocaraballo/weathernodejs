#weathernodejs

Weather API for nodejs based on https://openweathermap.org/api

Current GEO Lat, Lon
http://localhost:8080/v1/location

Current Weather for your geo location
http://localhost:8080/v1/current

Current Weather for Argentina
http://localhost:8080/v1/current/3435907

Next 5 days Weather for your geo location
http://localhost:8080/v1/forecast

Next 5 days Weather for Argentina
http://localhost:8080/v1/forecast/3435907


List of all countries
http://bulk.openweathermap.org/sample/

Icons:
https://openweathermap.org/weather-conditions
http://openweathermap.org/img/wn/10d@2x.png

To run parallel instances you can use pm2 (optional)
https://www.npmjs.com/package/pm2
npm install pm2 -g

Basics:
pm2 start nodeweather-api.js
pm2 list
pm2 stop     nodejwt-api
pm2 restart  nodejwt-api
pm2 delete   nodejwt-api


Classic way. 
node nodeweather-api.js
