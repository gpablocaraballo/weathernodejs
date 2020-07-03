Weather API hecho en nodejs basado en https://openweathermap.org/api
Gabriel Pablo Caraballo

Se realizo la solución frontend y backend completa.

frontend en react
https://github.com/developergit001/weather-react.git

Este proyecto:
https://github.com/developergit001/weathernodejs.git

#Para correr la app
node nodeweather-api.js

#Testing: Los casos de prueba se hicieron completamente en react para unificar el lugar y tipos de prueba.

#Datos varios:
Este backend de node estaria corriendo en http://localhost:8080 por defecto.
Se puede cambiar dicho puerto en el archivo nodeweather-api.js PERO tener en cuenta que react espera el port 8080 del back.

Token openweatherapi:
Se puede cambiar el mismo en el archivo utilities\util.js

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

