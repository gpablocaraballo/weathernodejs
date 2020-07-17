###########################################################################################################
Gabriel Pablo Caraballo
Weather API done with nodejs using https://openweathermap.org/api
This is the backend part, but its a full solution.

You can check the frontend with react
https://github.com/developergit001/weather-react.git

Current nodejs project:
https://github.com/developergit001/weathernodejs.git
###########################################################################################################

###########################################################################################################
#To install and run the app
 
npm install

node nodeweather-api.js
###########################################################################################################

###########################################################################################################
#Testing: All use case (testing) are done in the frontend solution.
###########################################################################################################

###########################################################################################################
#Comments:
This backend is running in http://localhost:8080 by default
You can change the port but you must know that the frontend expect the 8080 port.

Token openweatherapi:
You can put yours in utilities\util.js

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
###########################################################################################################
