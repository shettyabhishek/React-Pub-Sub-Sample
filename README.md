-------------------------------------------------------------------------------------------------------------------------------------
Documentation created By : Abhishek H Shetty
Created On : 17th July 2017
-------------------------------------------------------------------------------------------------------------------------------------

This project is developed to understand the concept of Publisher & Subscriber Model.
-------------------------------------------------------------------------------------------------------------------------------------
Steps to run this application.
-------------------------------------------------------------------------------------------------------------------------------------
- Install Node from nodejs.org
- To confirm if node is installed execute the below command
  $ node -v
- Execute the below command to create a react project . Use a name of your choice for the application
  $ npm install create-react-project -g
  $ create-react-project your-app-name
- cd your-app-name
- add the package.json from the git path code checked out
- Run this below command , to get the node plugins (node_modules) installed
  $ npm install
- Copy the gulp script for handling the minificaiton & css pre-processing  
- copy the public & src folders into the project folder.
- Run the below command to bring up the server and get started.
  $ npm start

-------------------------------------------------------------------------------------------------------------------------------------
Other specification
-------------------------------------------------------------------------------------------------------------------------------------
Package.json
- Dependencies => gulp, gulp-clean-css, gulp-cssmin, gulp-rename, gulp-sass, node-sass //For sass pre-processing
               => pubsub-js //For integrating the publisher & subscriber model
- running server => //The project set up builds the configuration for running the server using
              $npm start
