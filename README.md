# SportApp
    * Version: 1.25.0
## Atomic Design
    
# Info
    * Angular CLI: 14.2.6
    * Node 16.18.0
    * npm 8.19.2
    * nvm use v16.18.0
    * npm i -g npm-check-updates
    * npm-check-updates -u
# Packages
    * npm install bootstrap
    * npm install jquery --save
    * npm install popper.js --save
    * npm install @ngx-translate/core --save
    * npm i ngx-spinner
    * npm install sonar-scanner --save-dev    
    * npm install @fullcalendar/angular
    * npm install @fullcalendar/core
    * npm install @fullcalendar/daygrid
    * npm install @fullcalendar/interaction
    * npm install @fullcalendar/list
    * npm install @fullcalendar/timegrid
    * angular.json -> "scripts": ['node_modules/popper.js/dist/umd/popper.min.js'] 
    * npm install ngx-gauge -> https://github.com/ashish-chopra/ngx-gauge
    * npm i ngx-chronometer --save
    * npm i xlsx
    * Info KCal https://colegiosaintmaurices.cl/wp-content/uploads/2020/04/Electivo-Ciencias-del-ejercicio-f%C3%ADsico-y-deportivo-Gu%C3%ADa-3.pdf
# Commands
    * ng new SportApp
    * ng serve
    * npm start
    * npm run format
    * npm run lint
    * npm run coverage
    * npm run build
    * npm run prod
    * npm run sonar
# Docker
    * npm run prod
    * docker build . -t sport_app:0.0.0
    * docker run -d -p 8080:80 sport_app:0.0.0
    * docker stop <container-name>
    * docker push mninos/sport_app:0.0.0 